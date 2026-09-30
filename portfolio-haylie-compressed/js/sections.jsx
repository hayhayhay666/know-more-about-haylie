// ============================================
// Sections — unified Journey timeline
// ============================================

const { useRef, useEffect, useState } = React;

// --- Nav ---
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">Know more about Haylie —</div>
      <ul className="nav-links">
        <li><a href="#journey">Journey</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// --- Hero Section ---
function HeroSection() {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: "0px" });
  const [letterSpacing, setLetterSpacing] = React.useState("0.02em");
  const [scale, setScale] = React.useState(1);
  const [bgOffset, setBgOffset] = React.useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = 600;
          const progress = Math.min(scrollY / maxScroll, 1);
          const startSpacing = 0.02;
          const endSpacing = -0.01;
          setLetterSpacing(`${startSpacing + (endSpacing - startSpacing) * progress}em`);
          const startScale = 1;
          const endScale = 0.95;
          setScale(startScale + (endScale - startScale) * progress);
          setBgOffset(scrollY * 0.3);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = HERO_DATA.title.split(" ");

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg">
        <img
          src={HERO_DATA.bgImage}
          alt="Mountain landscape"
          style={{ transform: `translateY(${bgOffset}px) scale(1.05)` }}
        />
      </div>
      <div className="hero-inner" ref={ref}>
        <div className={`hero-eyebrow ${inView ? "visible" : ""}`}>
          {HERO_DATA.eyebrow}
        </div>
        <h1
          className="hero-title"
          style={{
            letterSpacing: letterSpacing,
            transform: `scale(${scale})`,
            transformOrigin: "center top"
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={`word ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${0.4 + i * 0.05}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className={`hero-subtitle ${inView ? "visible" : ""}`}>
          {HERO_DATA.subtitle}
        </p>
        <div className={`hero-name ${inView ? "visible" : ""}`}>
          {HERO_DATA.name}
        </div>
        <div className={`hero-title-line ${inView ? "visible" : ""}`}></div>
        <div className={`hero-role ${inView ? "visible" : ""}`}>
          {HERO_DATA.role}
        </div>
      </div>
      <div className={`hero-scroll-indicator ${inView ? "visible" : ""}`}>
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

// ============================================
// Journey Section — unified timeline
// ============================================
function JourneySection() {
  const [titleRef, titleVisible] = useInView({ threshold: 0.3 });
  const [subtitleRef, subtitleVisible] = useInView({ threshold: 0.3 });
  return (
    <section className="section journey-section" id="journey">
      <div className="section-inner">
        <SectionLabel number="01" text="The Journey" />
        <h2 ref={titleRef} className={`section-title ${titleVisible ? "visible" : ""}`}>
          Ten chapters, one question.
        </h2>
        <p ref={subtitleRef} className={`section-subtitle ${subtitleVisible ? "visible" : ""}`}>
          Where does real change happen — and how do I get there?
        </p>

        <div className="journey-timeline">
          {JOURNEY_DATA.map((chapter, i) => (
            <JourneyChapter key={i} chapter={chapter} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ number, text }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div ref={ref} className={`section-label ${inView ? "visible" : ""}`}>
      {number} — {text}
    </div>
  );
}

function JourneyChapter({ chapter, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  if (chapter.type === "hero") {
    return (
      <div
        ref={ref}
        className={`journey-chapter journey-hero-chapter ${inView ? "visible" : ""} ${chapter.reverse ? "reverse" : ""}`}
      >
        <div className="journey-hero-bg">
          <img src={chapter.heroImage} alt={chapter.title} />
          <div className="journey-hero-overlay"></div>
        </div>
        <div className="journey-hero-content">
          <span className="journey-era">{chapter.era}</span>
          <h3 className="journey-hero-title">{chapter.title}</h3>
          <p className="journey-hero-quote">{chapter.tagline}</p>
          <div className="journey-hero-caption">{chapter.heroCaption}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`journey-chapter ${chapter.type} ${inView ? "visible" : ""} ${chapter.reverse ? "reverse" : ""}`}
      style={{ transitionDelay: `${index * 0.03}s` }}
    >
      {/* Left: content */}
      <div className="journey-content">
        <span className="journey-era">{chapter.era}</span>
        <h3 className="journey-title">{chapter.title}</h3>
        <p className="journey-tagline">{chapter.tagline}</p>

        {chapter.keywords && chapter.keywords.length > 0 && (
          <div className="journey-keywords">
            {chapter.keywords.map((kw, i) => (
              <span key={i} className="journey-keyword">{kw}</span>
            ))}
          </div>
        )}

        {chapter.metrics && chapter.metrics.length > 0 && (
          <div className="journey-metrics">
            {chapter.metrics.map((m, i) => (
              <div key={i} className="journey-metric">
                <span className="journey-metric-value">{m.value}</span>
                <span className="journey-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right: visual */}
      <div className="journey-visual">
        {(chapter.type === "photo" || chapter.type === "photo-grid") && (
          <div
            className="journey-main-image"
            onClick={() => openLightbox(chapter.heroImage, chapter.heroCaption, chapter.heroRotate)}
          >
            <img
              src={chapter.heroImage}
              alt={chapter.heroCaption}
              style={chapter.heroRotate ? { "--rotate": `${chapter.heroRotate}deg` } : {}}
            />
            <div className="journey-main-caption">{chapter.heroCaption}</div>
          </div>
        )}

        {chapter.type === "photo-grid" && chapter.images && chapter.images.length > 0 && (
          <div className="journey-secondary-grid">
            {chapter.images.map((img, i) => (
              <div
                key={i}
                className="journey-secondary-item"
                onClick={() => openLightbox(img.src, img.caption, img.rotate)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  style={img.rotate ? { "--rotate": `${img.rotate}deg` } : {}}
                />
                <div className="journey-secondary-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        )}

        {chapter.type === "text" && (
          <div className="journey-text-visual">
            <div className="journey-text-visual-number">{chapter.era.split(" ")[0]}</div>
            <div className="journey-text-visual-line"></div>
          </div>
        )}

        {chapter.type === "no-photo" && (
          <div className="journey-text-visual">
            <div className="journey-text-visual-number">{chapter.era.split(" ")[0]}</div>
            <div className="journey-text-visual-line"></div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Skills Section
// ============================================
function SkillsSection() {
  const [titleRef, titleVisible] = useInView({ threshold: 0.3 });
  const [subtitleRef, subtitleVisible] = useInView({ threshold: 0.3 });
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionLabel number="02" text="What I Bring" />
        <h2 ref={titleRef} className={`section-title ${titleVisible ? "visible" : ""}`}>
          Three things I do well.
        </h2>
        <p ref={subtitleRef} className={`section-subtitle ${subtitleVisible ? "visible" : ""}`}>
          Built through every chapter above.
        </p>

        <div className="skills-grid">
          {SKILLS_DATA.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>

        {/* Expectations cards */}
        <div className="expectations-grid">
          {EXPECTATIONS_DATA.map((item, i) => (
            <ExpectationCard key={i} item={item} index={i} />
          ))}
        </div>

        <div className="traits-row">
          {TRAITS.map((t, i) => (
            <span key={i} className="trait-chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`skill-card ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="skill-number">{skill.number}</span>
      <h3 className="skill-title">{skill.title}</h3>
      <p className="skill-evidence">{skill.evidence}</p>
    </div>
  );
}

function ExpectationCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`expectation-card ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className="expectation-label">{item.label}</span>
      <h4 className="expectation-title">{item.title}</h4>
      <p className="expectation-body">{item.body}</p>
    </div>
  );
}

// ============================================
// Contact Section
// ============================================
function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner contact-inner">
        <div
          ref={ref}
          className={`contact-content ${inView ? "visible" : ""}`}
        >
          <h2 className="contact-title">{CONTACT_DATA.title}</h2>
          <p className="contact-subtitle">{CONTACT_DATA.subtitle}</p>
          <a href={`mailto:${CONTACT_DATA.email}`} className="contact-email">
            {CONTACT_DATA.email}
          </a>
          <p className="contact-phone">Mobile: {CONTACT_DATA.phone}</p>
        </div>
      </div>
      <div className="contact-footer">
        <span>© Haylie Chau · Hiu Ying CHAU</span>
      </div>
    </section>
  );
}

// ============================================
// Lightbox
// ============================================
function openLightbox(src, caption, rotate) {
  const evt = new CustomEvent("openLightbox", { detail: { src, caption, rotate } });
  window.dispatchEvent(evt);
}

// ============================================
// App — root
// ============================================
function App() {
  const [lightbox, setLightbox] = useState({ img: null, cap: null });

  useEffect(() => {
    function onOpen(e) {
      setLightbox({ img: e.detail.src, cap: e.detail.caption, rot: e.detail.rotate });
    }
    window.addEventListener("openLightbox", onOpen);
    return () => window.removeEventListener("openLightbox", onOpen);
  }, []);

  function closeLightbox() {
    setLightbox({ img: null, cap: null });
  }

  return (
    <div className="app">
      <Nav />
      <HeroSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
      <Lightbox image={lightbox.img} caption={lightbox.cap} rotate={lightbox.rot} onClose={closeLightbox} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
