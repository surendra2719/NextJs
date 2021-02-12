import React from "react";
import Link from "next/link";
const Header = () => (
    <>
        <header>
            <div className="container"></div>
            <nav className="navbar navbar-expand-lg navbar-light"></nav>
            <Link href="/">
                <a className="navbar-brand" >My app</a>
            </Link>
        </header>
        <nav>
            <Link href="/">Home</Link>-
        <Link href="/contact">Contact</Link>-
        <Link href="/about">About</Link>-
        <Link href="/users">Users</Link>-
    </nav>
    </>
)
export default Header;

