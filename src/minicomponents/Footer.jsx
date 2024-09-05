import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-5 font-raleway">
      <div className="wrapper flex justify-between">
        <div>
          <img className="w-16" src="src/assets/icons/numtify.svg" alt="" />
          <p className="text-sm">numtify21@gmail.com</p>
        </div>
        <div className="text-sm font-medium">Copyright reserved {year}</div>
      </div>
    </footer>
  );
}
