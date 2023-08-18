import Link from "next/link";
import React from "react";

const Button = ({ children, link = "", align }) => {
  return (
    <div className={`flex ${align}`}>
      {link ? (
        <Link
          href={link}
          className="inline-block px-8 py-2 mx-auto font-bold rounded-lg bg-primary text-slate-900"
        >
          {children}
        </Link>
      ) : (
        <button className="inline-block px-8 py-2 mx-auto font-bold rounded-lg bg-primary text-slate-900">
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
