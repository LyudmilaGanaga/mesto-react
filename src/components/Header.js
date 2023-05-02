import React from "react";
import headerLogo from "../../src/images/Vector.svg"

export default function Header() {
  return (
    <header className="header">
      <img className="headerLogo" src={headerLogo} alt="Логотип" />
    </header>
  )
}