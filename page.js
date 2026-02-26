'use client';
import { translations } from "../../lib/translations";

export default function Projects() {
  const t = translations.en;
  return (
    <main className="container">
      <h1>{t.projectsTitle}</h1>
      <ul>
        <li>Community Outreach Programs</li>
        <li>Youth Education Initiatives</li>
        <li>Cultural & Social Events</li>
      </ul>
      <h2>{t.contact}</h2>
      <button>{t.send}</button>
    </main>
  );
}
