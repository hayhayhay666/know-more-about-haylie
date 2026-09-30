// ============================================
// Scroll-triggered animation hooks
// Apple-inspired: fade in, translate up, letter-spacing transitions
// ============================================

const { useState, useEffect, useRef } = React;

// Hook: observe an element and return whether it's in view
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (!options.repeat) observer.unobserve(entry.target);
          } else if (options.repeat) {
            setInView(false);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -80px 0px",
        ...options
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);

  return [ref, inView];
}

// Hook: scroll-based parallax offset
function useParallax(speed = 0.3) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleScroll() {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setOffset((progress - 0.5) * speed * 100);
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return [ref, offset];
}

// Hook: nav scroll state
function useNavScroll(threshold = 200) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

// Lightbox context-like component (simple)
function Lightbox({ image, caption, onClose, rotate }) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [image]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!image) return null;

  const imgStyle = rotate ? { "--rotate": `${rotate}deg` } : {};

  return (
    React.createElement("div", {
      className: "lightbox active",
      onClick: onClose
    },
      React.createElement("div", { className: "lightbox-close", onClick: onClose }, "×"),
      React.createElement("img", {
        src: image,
        alt: caption || "",
        className: "lightbox-image",
        style: imgStyle,
        onClick: (e) => e.stopPropagation()
      }),
      caption && React.createElement("div", { className: "lightbox-caption" }, caption)
    )
  );
}

Object.assign(window, { useInView, useParallax, useNavScroll, Lightbox });
