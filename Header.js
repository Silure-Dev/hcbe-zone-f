'use client';
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <img src="/HB.jpg" className="logo" />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}
