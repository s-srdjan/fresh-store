import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-amber-600 font-semibold uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const arrow =
    "absolute top-[50%] translate-y-[-50%] bg-none p-[0.4rem] z-1 cursor-pointer transition-all ease-in-out duration-300 text-stone-600 hover:text-stone-800 focus:text-stone-800 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-5 md:py-3 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full font-semibold border-2 border-red-700 uppercase tracking-wide text-red-700 transition-colors duration-300 hover:bg-red-600 hover:text-stone-100 focus:text-stone-800 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-5 md:py-3",
    right_arrow:
      arrow +
      "right-[4%] hover:translate-x-[10%] hover:translate-y-[-50%] focus:translate-x-[10%] focus:translate-y-[-50%]",
    left_arrow:
      arrow +
      "left-[4%] hover:translate-x-[-10%] hover:translate-y-[-50%] focus:translate-x-[-10%] focus:translate-y-[-50%]",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
