import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FiCode, FiCpu, FiBookOpen,
  FiChevronLeft, FiChevronRight,
  FiPlay, FiPause,
} from "react-icons/fi";
import { MdOutlineSwipe } from "react-icons/md";

/* ─────────────────────────────────────────────────────────────────────────────
   Static data
───────────────────────────────────────────────────────────────────────────── */
const CARDS = [
  { id: 1, type: "video", src: "/about/Card1.mp4",  title: "Meet Avinash",       icon: FiCode     },
  { id: 2, type: "image", src: "/about/Card2.webp", title: "System Architecture", icon: FiCpu      },
  { id: 3, type: "image", src: "/about/Card3.webp", title: "Coding Workspace",    icon: FiCode     },
  { id: 4, type: "image", src: "/about/Card4.webp", title: "Always Learning",     icon: FiBookOpen },
];
const N    = CARDS.length;
const ease = [0.16, 1, 0.3, 1];

/* Modulo that always returns non-negative */
const mod = (n, m) => ((n % m) + m) % m;

/* Ring-signed offset: always in (-N/2, +N/2] so cards wrap naturally */
const ringDelta = (i, active) => {
  let d = i - active;
  if (d >  N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
};

/* Format seconds → "M:SS" */
const fmt = (s) => {
  if (!s || isNaN(s)) return "";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */
export default function AboutStoryCards({ active = 0, setActive }) {
  const goTo   = useCallback((i) => {
    if (setActive) setActive(mod(i, N));
  }, [setActive]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  /* Keyboard ─────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [goNext, goPrev]);

  /* Parallax ─────────────────────────────────────────────────────────────── */
  const rawX   = useMotionValue(0);
  const rawY   = useMotionValue(0);
  const spCfg  = { damping: 22, stiffness: 110, mass: 0.5 };
  const prlxX  = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), spCfg);
  const prlxY  = useSpring(useTransform(rawY, [-0.5, 0.5], [-7, 7]), spCfg);

  const onAreaMove  = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onAreaLeave = () => { rawX.set(0); rawY.set(0); };

  /* Drag ─────────────────────────────────────────────────────────────────── */
  const onDragEnd = (_, { offset, velocity }) => {
    if      (offset.x < -50 || velocity.x < -300) goNext();
    else if (offset.x >  50 || velocity.x >  300) goPrev();
  };

  /* Video ─────────────────────────────────────────────────────────────────── */
  const vidRef       = useRef(null);
  const autoSlid     = useRef(false);
  const [playing,  setPlaying]  = useState(false);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [showCtrl, setShowCtrl] = useState(true);
  const progress = duration && duration > 0 ? currentTime / duration : 0;
  const ctrlTimer  = useRef(null);

  /* When active card changes, pause/reset video */
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    if (active === 0) {
      v.currentTime = 0;
      setCurrentTime(0);
      setShowCtrl(true);
      setPlaying(false);         // wait for user click
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [active]);

  const onMeta    = (e)  => { setDuration(e.target.duration); };
  const onTick    = (e)  => { setCurrentTime(e.target.currentTime); };
  const onEnded   = ()  => {
    setPlaying(false);
    setCurrentTime(0);
    if (vidRef.current) vidRef.current.currentTime = 0;
    if (!autoSlid.current) { autoSlid.current = true; setTimeout(() => goTo(1), 500); }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    const v = vidRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      if (v.ended) { v.currentTime = 0; setCurrentTime(0); autoSlid.current = false; }
      v.play().then(() => setPlaying(true)).catch(() => {});
    }
    revealControls();
  };

  /* Controls auto-hide ─────────────────────────────────────────────────── */
  const revealControls = useCallback(() => {
    setShowCtrl(true);
    clearTimeout(ctrlTimer.current);
    ctrlTimer.current = setTimeout(() => {
      if (vidRef.current && !vidRef.current.paused) setShowCtrl(false);
    }, 2000);
  }, []);

  const onVidMouseMove  = () => revealControls();
  const onVidMouseLeave = () => {
    clearTimeout(ctrlTimer.current);
    ctrlTimer.current = setTimeout(() => {
      if (vidRef.current && !vidRef.current.paused) setShowCtrl(false);
    }, 800);
  };

  /* ── Section enter animation (runs once) ─────────────────────────────── */
  const sectionVariants = {
    hidden:   {},
    visible:  { transition: { staggerChildren: 0.06 } },
  };
  const controlsVariants = {
    hidden:   { opacity: 0, y: 20 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  };

  /* ── Render ─────────────────────────────────────────────────────────── */
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px" }}
      variants={sectionVariants}
      className="flex w-full flex-col items-center justify-center"
    >
      {/* ── Card stack container ─────────────────────────────────────── */}
      <motion.div
        variants={{
          hidden:  { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.53, ease } },
        }}
        className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]"
        style={{ aspectRatio: "3/4" }}
        onMouseMove={onAreaMove}
        onMouseLeave={onAreaLeave}
      >
        {/*
          KEY DESIGN: all 4 cards are ALWAYS rendered.
          We NEVER conditionally unmount them.
          We only change their transform targets so Framer springs smoothly.
        */}
        {CARDS.map((card, i) => {
          const d      = ringDelta(i, active);
          const abs    = Math.abs(d);
          const isAct  = d === 0;

          /* Stack visual targets — only for outer (positioning) layer */
          const scale   = 1 - abs * 0.055;
          const xPx     = d * 44;
          const opacity = isAct ? 1 : Math.max(0.3, 1 - abs * 0.22);
          const zIdx    = N - abs;
          const rot     = d * 2.4;
          const blurPx  = abs === 0 ? 0 : abs * 1.8;

          const Icon = card.icon;

          return (
            /*
              LAYER 1 — Stack positioning.
              Owns: scale, x (xPx), opacity, rotate, blur.
              Never draggable. Never has parallax.
              This layer is what creates the premium stacked depth illusion.
            */
            <motion.div
              key={card.id}
              animate={{
                scale,
                x:      xPx,
                opacity,
                rotate: rot,
                filter: `blur(${blurPx}px)`,
              }}
              transition={{
                type:      "spring",
                stiffness: 240,
                damping:   28,
                mass:      0.8,
              }}
              style={{
                position:   "absolute",
                inset:      0,
                zIndex:     zIdx,
                willChange: "transform, opacity, filter",
              }}
            >
              {/*
                LAYER 2 — Drag + parallax.
                Owns: drag x (free), parallax x/y.
                Completely separate from animate.x above — no conflict.
                Only active card is draggable; others get pointer-events-none.
              */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={onDragEnd}
                style={{ position: "absolute", inset: 0 }}
                className="cursor-grab active:cursor-grabbing overflow-hidden rounded-[2rem] shadow-2xl w-full h-full"
              >
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    x: isAct ? prlxX : 0,
                    y: isAct ? prlxY : 0,
                  }}
                >
                {/* Dark base */}
                <div className="absolute inset-0 bg-[#111827]" />

                {/* ── VIDEO ───────────────────────────────────────────── */}
                {card.type === "video" && (
                  <div
                    className="absolute inset-0"
                    onMouseMove={onVidMouseMove}
                    onMouseLeave={onVidMouseLeave}
                  >
                    <video
                      ref={vidRef}
                      src={card.src}
                      playsInline
                      draggable={false}
                      preload="metadata"
                      onLoadedMetadata={onMeta}
                      onTimeUpdate={onTick}
                      onEnded={onEnded}
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Play / Pause */}
                    <AnimatePresence>
                      {showCtrl && (
                        <motion.div
                          key="ctrl-btn"
                          role="button"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          onClick={togglePlay}
                          aria-label={playing ? "Pause" : "Play"}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <motion.div
                            key={playing ? "pause-icon" : "play-icon"}
                            initial={{ opacity: 0, scale: 0.78 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.78 }}
                            transition={{ duration: 0.18 }}
                            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md shadow-lg"
                          >
                            {playing
                              ? <FiPause className="h-6 w-6" />
                              : <FiPlay  className="ml-1 h-6 w-6" />
                            }
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom bar */}
                    <AnimatePresence>
                      {showCtrl && (
                        <motion.div
                          key="bottom-bar"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.22 }}
                          className="absolute bottom-5 left-5 right-5 pointer-events-none"
                        >
                          <div className="flex items-end justify-between text-white/90">
                            <p className="w-3/5 text-xs font-medium leading-relaxed drop-shadow">
                              A glimpse of my journey, work and passion for building.
                            </p>
                            <div className="flex flex-col items-end gap-1">
                              <span className="text-[10px] font-bold tracking-widest drop-shadow">
                                {fmt(currentTime)}
                              </span>
                              <div className="h-0.5 w-10 overflow-hidden rounded-full bg-white/30">
                                <div
                                  className="h-full rounded-full bg-[#8b5727]"
                                  style={{
                                    transform:       `scaleX(${progress})`,
                                    transformOrigin: "left",
                                    transition:      "transform 0.25s linear",
                                    willChange:      "transform",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* ── IMAGE ───────────────────────────────────────────── */}
                {card.type === "image" && (
                  <>
                    <motion.img
                      src={card.src}
                      alt={card.title}
                      loading="lazy"
                      draggable={false}
                      animate={{ scale: isAct ? 1.12 : 1 }}
                      transition={{ duration: 22, ease: "linear" }}
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
                  </>
                )}

                {/* Label pill */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md pointer-events-none">
                  <Icon className="h-3.5 w-3.5 opacity-80" />
                  <span className="tracking-wide opacity-90">{card.title}</span>
                </div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Navigation controls ──────────────────────────────────────── */}
      <motion.div
        variants={controlsVariants}
        className="mt-10 flex flex-col items-center gap-5"
      >
        <div className="flex items-center gap-6">
          <button
            onClick={goPrev}
            aria-label="Previous card"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5727] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>

          {/* 4 dots — always, never conditional */}
          <div className="flex gap-3">
            {CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[#8b5727]"
                    : "w-2 bg-[#d4c5b6] hover:bg-[#8b5727]/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next card"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5727] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#8b5727]/80">
          <MdOutlineSwipe className="h-4 w-4" />
          Drag or use arrows to explore
        </div>
      </motion.div>
    </motion.div>
  );
}
