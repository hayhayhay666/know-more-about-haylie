// ============================================
// App root — composes all sections
// ============================================

function App() {
  const scrolled = useNavScroll(300);

  return (
    <div className="app">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <AboutHero />
      <AboutSection />
      <ProjectsSection />
      <SecondarySection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
