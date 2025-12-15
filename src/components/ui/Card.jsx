function Card({ children, className = "" }) {
  return (
    <div className={`p-5 rounded-2xl bg-secondary/70 border border-slate-800 backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

export default Card;