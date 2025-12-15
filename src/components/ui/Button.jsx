function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition font-medium text-sm ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;