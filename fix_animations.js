const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'OENT' || err.code === 'EACCES') console.log(err);
    }
  });
  return filelist;
};

const srcDir = path.join(__dirname, 'src');
let files = walkSync(srcDir).filter(f => f.endsWith('.jsx'));

// Function to update duration and delay
const updateTransition = (content) => {
    
    // update simple durations in transition
    content = content.replace(/duration:\s*([0-9.]+)/g, (match, p1) => {
        let dur = parseFloat(p1);
        if (dur >= 0.3 && dur <= 0.6) {
            // we want to push 0.35 - 0.45 to 0.5 - 0.55
            dur = dur * 1.35; 
            dur = Math.max(0.5, Math.min(0.6, dur)); // clamp between 0.5 and 0.6
            // Round to 2 decimal places
            dur = Math.round(dur * 100) / 100;
            return `duration: ${dur}`;
        }
        return match;
    });

    // update delays
    content = content.replace(/delay:\s*([0-9.]+)/g, (match, p1) => {
        let delay = parseFloat(p1);
        if (!isNaN(delay) && delay > 0 && delay <= 1) {
            delay = delay * 1.2; // increase delays slightly
            delay = Math.round(delay * 100) / 100;
            return `delay: ${delay}`;
        }
        return match;
    });

    // update staggerChildren
    content = content.replace(/staggerChildren:\s*([0-9.]+)/g, (match, p1) => {
        let stagger = parseFloat(p1);
        if (stagger < 0.1) {
            stagger = Math.max(0.06, stagger * 1.25); // increase stagger slightly
            stagger = Math.round(stagger * 100) / 100;
            return `staggerChildren: ${stagger}`;
        }
        return match;
    });
    
    // update index based delays
    // like delay: index * 0.08
    content = content.replace(/delay:\s*([a-zA-Z]+)\s*\*\s*([0-9.]+)/g, (match, p1, p2) => {
        let stagger = parseFloat(p2);
        stagger = Math.round(stagger * 1.2 * 100) / 100;
        return `delay: ${p1} * ${stagger}`;
    });

    // delay: 0.18 + (i * 0.08)
    content = content.replace(/delay:\s*([0-9.]+)\s*\+\s*\(\s*([a-zA-Z]+)\s*\*\s*([0-9.]+)\s*\)/g, (match, p1, p2, p3) => {
        let baseDelay = parseFloat(p1) * 1.2;
        let stagger = parseFloat(p3) * 1.2;
        baseDelay = Math.round(baseDelay * 100) / 100;
        stagger = Math.round(stagger * 100) / 100;
        return `delay: ${baseDelay} + (${p2} * ${stagger})`;
    });

    return content;
};

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // viewport was already updated correctly (once: true, margin: "50px")
    // we just need to refine transition timings
    content = updateTransition(content);
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
