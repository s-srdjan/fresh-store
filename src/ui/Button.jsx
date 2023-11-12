import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-amber-800 font-semibold uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:bg-amber-600 focus:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-600 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
