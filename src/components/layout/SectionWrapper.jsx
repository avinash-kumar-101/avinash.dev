function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

export default SectionWrapper;