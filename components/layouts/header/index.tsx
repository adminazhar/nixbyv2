import React from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20">
      <Navbar fluid={true} rounded={true} border={true}>
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Nixby
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
