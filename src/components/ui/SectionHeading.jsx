function SectionHeading({ title, description }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{title}</h2>
      {description && (
        <p className="text-slate-300 max-w-xl text-sm">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;