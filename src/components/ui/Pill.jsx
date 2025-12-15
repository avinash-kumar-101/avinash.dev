function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 text-xs border border-slate-700">
      {children}
    </span>
  );
}

export default Pill;