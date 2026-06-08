/**
 * ============================================================
 *  ARRIA VISUALS — PHOTO MANIFEST
 *  photos.js
 * ============================================================
 *
 *  This is the ONLY file you need to edit to manage photos
 *  across your entire website.
 *
 *  HOW TO ADD A PHOTO
 *  ──────────────────
 *  1. Drop the image file into the correct folder under images/
 *  2. Add a new entry to the matching array below
 *  3. Save — done. The site updates automatically.
 *
 *  ENTRY FORMAT
 *  ────────────
 *  {
 *    src:   "filename.jpg",   // just the filename, no path needed
 *    alt:   "Description",   // screen-reader / SEO text
 *    title: "Display Title", // shown on hover (optional)
 *  }
 *
 *  SUPPORTED FORMATS: .jpg  .jpeg  .png  .webp  .svg
 * ============================================================
 */

const PHOTOS = {

  // ── HERO ─────────────────────────────────────────────────
  // One image shown full-screen behind your name on the homepage.
  // Replace with your best shot.
  hero: [
    { src: "30.jpeg", alt: "Hero background photo" },
  ],

  // ── MY FAVORITES ─────────────────────────────────────────
  // Shown in the "My Favorites" grid on the homepage (6 slots).
  // Add or remove entries freely — the grid fills in order.
  favorites: [
    { src: "29.jpg", alt: "Favorite photo 1", title: "Golden Hour, 2024" },
    { src: "1.jpg", alt: "Favorite photo 2", title: "On the Field" },
    { src: "34.jpeg", alt: "Favorite photo 3", title: "Portrait Study" },
    { src: "35.jpg", alt: "Favorite photo 4", title: "Summit Ridge" },
    { src: "36.jpg", alt: "Favorite photo 5", title: "The Match" },
    { src: "33.jpeg", alt: "Favorite photo 6", title: "Still Light" },
  ],

  // ── PORTRAITURE PROJECTS ─────────────────────────────────
  // Each key is a project. The "cover" image is the first one
  // in the array — it shows on the Portraiture landing page.
  // All images in the array appear in that project's gallery.

  portraiture: {

    "senior-portraits": {
      title: "Senior Portraits",
      year: "2024",
      cover: "senior-1.svg",       // ← shown on landing page card
      photos: [
        { src: "senior-1.svg", alt: "Senior portrait 1" },
        { src: "senior-2.svg", alt: "Senior portrait 2" },
        { src: "senior-3.svg", alt: "Senior portrait 3" },
        { src: "senior-4.svg", alt: "Senior portrait 4" },
        { src: "senior-5.svg", alt: "Senior portrait 5" },
        { src: "senior-6.svg", alt: "Senior portrait 6" },
      ],
    },

    "natural-light": {
      title: "Natural Light",
      year: "2024",
      cover: "natural-1.svg",
      photos: [
        { src: "natural-1.svg", alt: "Natural light portrait 1" },
        { src: "natural-2.svg", alt: "Natural light portrait 2" },
        { src: "natural-3.svg", alt: "Natural light portrait 3" },
        { src: "natural-4.svg", alt: "Natural light portrait 4" },
        { src: "natural-5.svg", alt: "Natural light portrait 5" },
        { src: "natural-6.svg", alt: "Natural light portrait 6" },
      ],
    },

    "studio-series": {
      title: "Studio Series",
      year: "2024",
      cover: "studio-1.svg",
      photos: [
        { src: "studio-1.svg", alt: "Studio portrait 1" },
        { src: "studio-2.svg", alt: "Studio portrait 2" },
        { src: "studio-3.svg", alt: "Studio portrait 3" },
        { src: "studio-4.svg", alt: "Studio portrait 4" },
        { src: "studio-5.svg", alt: "Studio portrait 5" },
        { src: "studio-6.svg", alt: "Studio portrait 6" },
      ],
    },

    "street-faces": {
      title: "Street Faces",
      year: "2023",
      cover: "street-1.svg",
      photos: [
        { src: "street-1.svg", alt: "Street portrait 1" },
        { src: "street-2.svg", alt: "Street portrait 2" },
        { src: "street-3.svg", alt: "Street portrait 3" },
        { src: "street-4.svg", alt: "Street portrait 4" },
        { src: "street-5.svg", alt: "Street portrait 5" },
        { src: "street-6.svg", alt: "Street portrait 6" },
      ],
    },

  },

  // ── NATURE PROJECTS ──────────────────────────────────────

  nature: {

    "desert-light": {
      title: "Desert Light",
      year: "2024",
      cover: "desert-1.svg",
      photos: [
        { src: "desert-1.svg", alt: "Desert light 1" },
        { src: "desert-2.svg", alt: "Desert light 2" },
        { src: "desert-3.svg", alt: "Desert light 3" },
        { src: "desert-4.svg", alt: "Desert light 4" },
        { src: "desert-5.svg", alt: "Desert light 5" },
        { src: "desert-6.svg", alt: "Desert light 6" },
      ],
    },

    "monsoon-season": {
      title: "Monsoon Season",
      year: "2024",
      cover: "monsoon-1.svg",
      photos: [
        { src: "monsoon-1.svg", alt: "Monsoon 1" },
        { src: "monsoon-2.svg", alt: "Monsoon 2" },
        { src: "monsoon-3.svg", alt: "Monsoon 3" },
        { src: "monsoon-4.svg", alt: "Monsoon 4" },
        { src: "monsoon-5.svg", alt: "Monsoon 5" },
        { src: "monsoon-6.svg", alt: "Monsoon 6" },
      ],
    },

    "mountain-trails": {
      title: "Mountain Trails",
      year: "2023",
      cover: "trail-1.svg",
      photos: [
        { src: "trail-1.svg", alt: "Mountain trail 1" },
        { src: "trail-2.svg", alt: "Mountain trail 2" },
        { src: "trail-3.svg", alt: "Mountain trail 3" },
        { src: "trail-4.svg", alt: "Mountain trail 4" },
        { src: "trail-5.svg", alt: "Mountain trail 5" },
        { src: "trail-6.svg", alt: "Mountain trail 6" },
      ],
    },

    "golden-hour": {
      title: "Golden Hour",
      year: "2023",
      cover: "golden-1.svg",
      photos: [
        { src: "golden-1.svg", alt: "Golden hour 1" },
        { src: "golden-2.svg", alt: "Golden hour 2" },
        { src: "golden-3.svg", alt: "Golden hour 3" },
        { src: "golden-4.svg", alt: "Golden hour 4" },
        { src: "golden-5.svg", alt: "Golden hour 5" },
        { src: "golden-6.svg", alt: "Golden hour 6" },
      ],
    },

  },

  // ── SPORTS PROJECTS ──────────────────────────────────────

  sports: {

    "brophy-football": {
      title: "Brophy Football",
      year: "2024",
      cover: "football-1.svg",
      photos: [
        { src: "football-1.svg", alt: "Brophy football 1" },
        { src: "football-2.svg", alt: "Brophy football 2" },
        { src: "football-3.svg", alt: "Brophy football 3" },
        { src: "football-4.svg", alt: "Brophy football 4" },
        { src: "football-5.svg", alt: "Brophy football 5" },
        { src: "football-6.svg", alt: "Brophy football 6" },
      ],
    },

    "arcadia-baseball": {
      title: "Arcadia Baseball",
      year: "2024",
      cover: "baseball-1.svg",
      photos: [
        { src: "baseball-1.svg", alt: "Arcadia baseball 1" },
        { src: "baseball-2.svg", alt: "Arcadia baseball 2" },
        { src: "baseball-3.svg", alt: "Arcadia baseball 3" },
        { src: "baseball-4.svg", alt: "Arcadia baseball 4" },
        { src: "baseball-5.svg", alt: "Arcadia baseball 5" },
        { src: "baseball-6.svg", alt: "Arcadia baseball 6" },
      ],
    },

    "track-field": {
      title: "Track & Field",
      year: "2023",
      cover: "track-1.svg",
      photos: [
        { src: "track-1.svg", alt: "Track and field 1" },
        { src: "track-2.svg", alt: "Track and field 2" },
        { src: "track-3.svg", alt: "Track and field 3" },
        { src: "track-4.svg", alt: "Track and field 4" },
        { src: "track-5.svg", alt: "Track and field 5" },
        { src: "track-6.svg", alt: "Track and field 6" },
      ],
    },

    "basketball": {
      title: "Basketball",
      year: "2023",
      cover: "bball-1.svg",
      photos: [
        { src: "bball-1.svg", alt: "Basketball 1" },
        { src: "bball-2.svg", alt: "Basketball 2" },
        { src: "bball-3.svg", alt: "Basketball 3" },
        { src: "bball-4.svg", alt: "Basketball 4" },
        { src: "bball-5.svg", alt: "Basketball 5" },
        { src: "bball-6.svg", alt: "Basketball 6" },
      ],
    },

  },

  // ── EVENTS PROJECTS ──────────────────────────────────────

  events: {

    "little-league-opening": {
      title: "Little League Opening",
      year: "2024",
      cover: "ll-1.svg",
      photos: [
        { src: "ll-1.svg", alt: "Little league 1" },
        { src: "ll-2.svg", alt: "Little league 2" },
        { src: "ll-3.svg", alt: "Little league 3" },
        { src: "ll-4.svg", alt: "Little league 4" },
        { src: "ll-5.svg", alt: "Little league 5" },
        { src: "ll-6.svg", alt: "Little league 6" },
      ],
    },

    "arcadia-hs-grad": {
      title: "Arcadia HS Graduation",
      year: "2024",
      cover: "grad-1.svg",
      photos: [
        { src: "grad-1.svg", alt: "Graduation 1" },
        { src: "grad-2.svg", alt: "Graduation 2" },
        { src: "grad-3.svg", alt: "Graduation 3" },
        { src: "grad-4.svg", alt: "Graduation 4" },
        { src: "grad-5.svg", alt: "Graduation 5" },
        { src: "grad-6.svg", alt: "Graduation 6" },
      ],
    },

    "community-fest": {
      title: "Community Fest",
      year: "2023",
      cover: "fest-1.svg",
      photos: [
        { src: "fest-1.svg", alt: "Community fest 1" },
        { src: "fest-2.svg", alt: "Community fest 2" },
        { src: "fest-3.svg", alt: "Community fest 3" },
        { src: "fest-4.svg", alt: "Community fest 4" },
        { src: "fest-5.svg", alt: "Community fest 5" },
        { src: "fest-6.svg", alt: "Community fest 6" },
      ],
    },

    "awards-night": {
      title: "Awards Night",
      year: "2023",
      cover: "awards-1.svg",
      photos: [
        { src: "awards-1.svg", alt: "Awards night 1" },
        { src: "awards-2.svg", alt: "Awards night 2" },
        { src: "awards-3.svg", alt: "Awards night 3" },
        { src: "awards-4.svg", alt: "Awards night 4" },
        { src: "awards-5.svg", alt: "Awards night 5" },
        { src: "awards-6.svg", alt: "Awards night 6" },
      ],
    },

  },

}; // end PHOTOS
