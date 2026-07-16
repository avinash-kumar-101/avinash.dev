import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Only run this once on initial mount
    const minimumTime = 1800; // 1.8 seconds minimum duration
    const startTime = Date.now();
    let isLoaded = document.readyState === 'complete';
    let timeoutId;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const hidePreloader = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumTime - elapsedTime);

      timeoutId = setTimeout(() => {
        setIsFadingOut(true);
        // Wait for fade out animation to complete before removing from DOM
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = '';
        }, 500);
      }, remainingTime);
    };

    if (isLoaded) {
      hidePreloader();
    } else {
      const handleLoad = () => {
        isLoaded = true;
        hidePreloader();
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
        document.body.style.overflow = '';
      };
    }

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`preloader-container ${isFadingOut ? 'preloader-hidden' : ''}`} 
      aria-hidden={isFadingOut}
    >
      <div className="preloader-content">
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
          <div className="wheel" />
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear" />
                <div className="hamster__eye" />
                <div className="hamster__nose" />
              </div>
              <div className="hamster__limb hamster__limb--fr" />
              <div className="hamster__limb hamster__limb--fl" />
              <div className="hamster__limb hamster__limb--br" />
              <div className="hamster__limb hamster__limb--bl" />
              <div className="hamster__tail" />
            </div>
          </div>
          <div className="spoke" />
        </div>
        
        {/* Branding */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-95 px-4 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-textMain sm:text-4xl">
            Avinash
          </h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm text-center">
            Building meaningful digital experiences...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
