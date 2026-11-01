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
 *
 *  HOW TO ADD A VIDEO (works in ANY project: nature, sports, events,
 *  real estate, stampede...) — same folder as the photos, same array:
 *  { video: "clip.mp4", poster: "clip.jpg", orientation: "portrait" }
 *    • poster = optional thumbnail image (also in that folder)
 *    • orientation = "portrait" (vertical) or "landscape" (horizontal)
 *    • keep files small (GitHub web upload limit is 25MB per file)
 * ============================================================
 */

const PHOTOS = {

  // ── HERO ─────────────────────────────────────────────────
  // One image shown full-screen behind your name on the homepage.
  // Used automatically if no showreel video is set below.
  hero: [
    { src: "30.jpeg", alt: "Hero background photo" },
  ],

  // ── HERO SHOWREEL VIDEO (optional) ────────────────────────
  // A short, muted, looping video that plays automatically behind
  // your name instead of the hero photo above.
  //   1. Export it as an .mp4, ideally under ~15MB (compress it —
  //      see the note Claude gave you about video hosting).
  //   2. Drop it in videos/ (make a "videos" folder next to "images").
  //   3. Put the filename below.
  // Leave src as "" to keep using the hero photo instead.
  showreel: {
    src: "edit.mp4", // e.g. "showreel.mp4"
  },

  // ── CLIENT / COMPANY LOGOS (scrolling strip) ──────────────
  // Logos that scroll across the homepage between the hero and
  // "My Favorites." Use PNGs with transparent backgrounds if you
  // can — they'll be shown in grayscale automatically and go full
  // color on hover.
  //   1. Drop logo files into images/clients/
  //   2. Add an entry below for each one
  // Leave this array empty to show placeholder pills instead.
  clients: [
    // { src: "logo-brophy.png", name: "Brophy Prep" },
    // { src: "logo-arcadia.png", name: "Arcadia High School" },
  ],

  // ── VIDEO REELS (4 slots, shown under My Favorites) ───────
  // Each slot can be EITHER a YouTube video OR a self-hosted file:
  //
  //   YouTube (recommended — no file size limits, click to play):
  //     { youtubeId: "dQw4w9WgXcQ", title: "2026 Sports Reel" }
  //     The ID is the part after "v=" in the video's YouTube URL,
  //     e.g. https://youtube.com/watch?v=dQw4w9WgXcQ → dQw4w9WgXcQ
  //     Works with unlisted videos too — they just won't show up
  //     in YouTube search, only for people with the link/on your site.
  //
  //   Self-hosted:
  //     { src: "reel-1.mp4", poster: "reel-1.jpg", title: "..." }
  //     .mp4 goes in videos/, poster thumbnail (optional) in images/reels/
  //
  // Leave a slot as { } for a "Video Coming Soon" placeholder.
  reels: [ 
    { youtubeId: "4F3TPKbgKMM", title: "NIKE X BROPHY" },
    { youtubeId: "AYnDOeniP48", title: "FASHION SHOW 2026" },
    { youtubeId: "Of3eXICoGLM", title: "BROPHY HYPE REEL" },  
    { youtubeId: "Of3eXICoGLM", title: "BROPHY HYPE REEL" },   
  ],

  // ── MY FAVORITES ─────────────────────────────────────────
  // Shown in the "My Favorites" grid on the homepage (6 slots).
  // Add or remove entries freely — the grid fills in order.
  favorites: [
    { src: "29.jpg", alt: "Favorite photo 1", title: "Brophy Track, 2026" },
    { src: "1.jpg", alt: "Favorite photo 2", title: "Brophy XC, 2026" },
    { src: "34.jpeg", alt: "Favorite photo 3", title: "Brophy Tennis, 2025" },
    { src: "35.jpg", alt: "Favorite photo 4", title: "Brophy Lacrosse, 2026" },
    { src: "36.jpg", alt: "Favorite photo 5", title: "Brophy Lacrosse, 2026" },
    { src: "33.jpeg", alt: "Favorite photo 6", title: "Brophy Soccer, 2026" },
  ],

  // ── PROJECT TAB COVERS ───────────────────────────────────
// One image per top-level tab on the homepage (Portraiture,
// Nature, Sports, Events). Put these 4 files in images/covers/.
covers: {
  portraiture: { src: "40.jpeg", alt: "Portraiture cover" },
  nature:      { src: "50.jpeg", alt: "Nature cover" },
  sports:      { src: "60.jpg", alt: "Sports cover" },
  events:      { src: "70.jpg", alt: "Events cover" },
},
  
  // ── BROPHY STAMPEDE (row on the homepage + its own page) ──
  // Files go in images/stampede/ (photos AND videos together).
  // "featured" = the 3 vertical videos beside the text on the homepage.
  // "gallery"  = everything on the "See More Work" page (photos + videos).
  stampede: {
    // 👇 CHANGE THE TITLE & DESCRIPTION HERE
    title: "Brophy Stampede",
    description: "Over the past two years, I've created promotional content and mixtapes for the Brophy Stampede to promote school events. This year, I lead a team of five media creators, helping produce content that has generated over 500,000 views per month for multiple consecutive months. Take a look at some of my favorite pieces.",
    instagram: "https://www.instagram.com/brophystampede/",
    // 👇 the 3 homepage videos: just rename src (video) and poster (thumbnail)
    featured: [
      { src: "eteique.mov", poster: "mixtape-1.jpg" },
      { src: "Untitled.mov", poster: "mixtape-2.jpg" },
      { src: "5.mov", poster: "mixtape-3.jpg" },
    ],
    // 👇 "See More Work" page. To add more, copy any line and change the names.
    gallery: [
      { video: "eteique.mov", poster: "promo-1.jpg", orientation: "portrait" },
      { video: "Untitled.mov", poster: "promo-2.jpg", orientation: "portrait" },
      { video: "1.mov", poster: "promo-3.jpg", orientation: "portrait" },
      { video: "2.mov", poster: "promo-4.jpg", orientation: "portrait" },
      { video: "3.mov", poster: "promo-5.jpg", orientation: "portrait" },
      { video: "4.mov", poster: "promo-5.jpg", orientation: "portrait" },
      { video: "5.mov", poster: "promo-5.jpg", orientation: "portrait" },
      { src: "1.jpg", alt: "Photo 1" },
      { src: "2.jpg", alt: "Photo 2" },
      { src: "3.jpg", alt: "Photo 3" },
      { src: "4.jpg", alt: "Photo 4" },
      { src: "5.jpg", alt: "Photo 5" },
    ],
  },

  // ── REAL ESTATE (row on the homepage) ─────────────────────
  // Files go in images/realestate/ . The 3 vertical videos beside the text.
  // The real estate portfolio itself (by agent / company) is at the bottom: "realestate".
  realestateHome: {
    // 👇 CHANGE THE TITLE & DESCRIPTION HERE
    title: "Real Estate",
    description: "I create listing videos, listing photos, and personal brand promotional content for real estate agents and teams. Whether you're launching a new listing or building your brand, I'll help you stand out.",
    featured: [
      { src: "listing-1.mov", poster: "listing-1.jpg" },
      { src: "listing-2.mov", poster: "listing-2.jpg" },
      { src: "listing-3.mov", poster: "listing-3.jpg" },
    ],
  },

  // ── PORTRAITURE PROJECTS ─────────────────────────────────
  // Each key is a project. The "cover" image is the first one
  // in the array — it shows on the Portraiture landing page.
  // All images in the array appear in that project's gallery.

  portraiture: {

    "senior-portraits": {
      title: "Brophy Senior Portraits",
      year: "2026",
      cover: "1.jpeg",       // ← shown on landing page card
      photos: [
        { src: "1.jpeg", alt: "Senior portrait 1" },
        { src: "2.jpeg", alt: "Senior portrait 2" },
        { src: "3.jpeg", alt: "Senior portrait 3" },
        { src: "4.jpeg", alt: "Senior portrait 4" },
        { src: "5.jpeg", alt: "Senior portrait 5" },
        { src: "6.jpeg", alt: "Senior portrait 6" },
        { src: "7.jpeg", alt: "Senior portrait 2" },
        { src: "8.jpeg", alt: "Senior portrait 3" },
        { src: "9.jpeg", alt: "Senior portrait 4" },
        { src: "10.jpeg", alt: "Senior portrait 5" },
        { src: "11.jpeg", alt: "Senior portrait 6" },
        { src: "12.jpeg", alt: "Senior portrait 3" },
        { src: "13.jpeg", alt: "Senior portrait 4" },
        { src: "14.jpeg", alt: "Senior portrait 5" },
        { src: "15.jpeg", alt: "Senior portrait 6" },
        { src: "16.jpeg", alt: "Senior portrait 5" },
        { src: "17.jpeg", alt: "Senior portrait 6" },
        { src: "18.jpeg", alt: "Senior portrait 3" },
        { src: "19.jpeg", alt: "Senior portrait 4" },
        { src: "20.jpeg", alt: "Senior portrait 5" },
        { src: "15.jpeg", alt: "Senior portrait 6" },
      ],
    },

    "natural-light": {
      title: "Outdoor Senior Portraits",
      year: "2026",
      cover: "1.jpeg",
      photos: [
        { src: "1.jpeg", alt: "Senior portrait 1" },
        { src: "2.jpeg", alt: "Senior portrait 2" },
        { src: "3.jpeg", alt: "Senior portrait 3" },
        { src: "4.jpeg", alt: "Senior portrait 4" },
        { src: "5.jpeg", alt: "Senior portrait 5" },
        { src: "6.jpeg", alt: "Senior portrait 6" },
        { src: "7.jpeg", alt: "Senior portrait 2" },
        { src: "8.jpeg", alt: "Senior portrait 3" },
        { src: "9.jpeg", alt: "Senior portrait 4" },
        { src: "10.jpeg", alt: "Senior portrait 5" },
        { src: "11.jpeg", alt: "Senior portrait 6" },
        { src: "12.jpeg", alt: "Senior portrait 3" },
        { src: "13.jpeg", alt: "Senior portrait 4" },
        { src: "14.jpeg", alt: "Senior portrait 5" },
        { src: "15.jpeg", alt: "Senior portrait 6" },
        { src: "16.jpeg", alt: "Senior portrait 5" },
        { src: "17.jpeg", alt: "Senior portrait 6" },
        { src: "18.jpeg", alt: "Senior portrait 3" },
        { src: "19.jpeg", alt: "Senior portrait 4" },
        { src: "20.jpeg", alt: "Senior portrait 5" },
        { src: "21.jpeg", alt: "Senior portrait 6" },
        { src: "22.jpeg", alt: "Senior portrait 2" },
        { src: "23.jpeg", alt: "Senior portrait 3" },
        { src: "24.jpeg", alt: "Senior portrait 4" },
        { src: "25.jpeg", alt: "Senior portrait 5" },
        { src: "26.jpeg", alt: "Senior portrait 6" },
        { src: "27.jpeg", alt: "Senior portrait 3" },
        { src: "28.jpeg", alt: "Senior portrait 4" },
        { src: "29.jpeg", alt: "Senior portrait 5" },
        { src: "30.jpeg", alt: "Senior portrait 6" },
      ],
    },

    "studio-series": {
      title: "Coming Soon",
      year: "2027",
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
      title: "Coming Soon",
      year: "2027",
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
      title: "France",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { video: "1.mov", orientation: "landscape" },
        { video: "2.mov", orientation: "landscape" },
        { video: "3.mov", orientation: "landscape" },
        { src: "1.jpg", alt: "Desert light 4", orientation: "landscape" },
        { src: "5.jpeg", alt: "Desert light 5", orientation: "landscape" },
      ],
    },

    "golden-hour": {
      title: "Mount Humphreys",
      year: "2026",
      cover: "2.jpeg",
      photos: [
        { src: "1.jpeg", alt: "Senior portrait 1", orientation: "landscape" },
        { src: "2.jpeg", alt: "Senior portrait 2" },
        { src: "3.jpeg", alt: "Senior portrait 3", orientation: "landscape" },
        { src: "4.jpeg", alt: "Senior portrait 4", orientation: "landscape" },
        { src: "5.jpeg", alt: "Senior portrait 5", orientation: "landscape" },
        { src: "6.jpeg", alt: "Senior portrait 6" },
        { src: "7.jpeg", alt: "Senior portrait 2" },
        { src: "8.jpeg", alt: "Senior portrait 3", orientation: "landscape" },
        { src: "9.jpeg", alt: "Senior portrait 4", orientation: "landscape" },
        { src: "10.jpg", alt: "Senior portrait 5", orientation: "landscape" },
        { src: "11.jpg", alt: "Senior portrait 5" },
      ],
    },

    "monsoon-season": {
      title: "Random",
      year: "2026",
      cover: "2.jpg",
      photos: [
        { src: "1.jpeg", alt: "Mountain trail 1", orientation: "landscape" },
        { src: "2.jpg", alt: "Mountain trail 2" },
        { src: "3.jpeg", alt: "Mountain trail 3", orientation: "landscape" },
        { src: "4.jpg", alt: "Mountain trail 4" },
        { src: "5.jpeg", alt: "Mountain trail 5", orientation: "landscape" },
      ],
    },

    "mountain-trails": {
      title: "Coming Soon",
      year: "2027",
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

    "brophy-tennis": {
      title: "Brophy Tennis",
      year: "2026",
      cover: "1.jpeg",
      photos: [
        { src: "1.jpg", alt: "Arcadia baseball 1", orientation:"portrait"  },
        { src: "2.jpg", alt: "Arcadia baseball 2", orientation:"portrait"  },
        { src: "3.jpg", alt: "Arcadia baseball 3", orientation:"portrait"  },
        { src: "4.jpg", alt: "Arcadia baseball 4", orientation:"portrait"  },
        { src: "5.jpg", alt: "Arcadia baseball 5", orientation:"portrait"  },
        { src: "6.jpg", alt: "Arcadia baseball 6", orientation:"portrait"  },
        { src: "7.jpg", alt: "Arcadia baseball 1", orientation:"portrait"  },
        { src: "8.jpg", alt: "Arcadia baseball 2", orientation:"portrait"  },
        { src: "9.jpg", alt: "Arcadia baseball 3", orientation:"portrait"  },
        { src: "10.jpg", alt: "Arcadia baseball 4", orientation:"landscape"  },
        { src: "11.jpg", alt: "Arcadia baseball 5", orientation:"landscape"  },
        { src: "12.jpg", alt: "Arcadia baseball 6", orientation:"landscape"  },
        { src: "13.jpg", alt: "Arcadia baseball 6", orientation:"landscape"  },
        { src: "1.jpeg", alt: "Arcadia baseball 6", orientation:"landscape"  },
      ],
    },

    "brophy-lacrosse": {
      title: "Brophy Lacrosse",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "1.jpeg", alt: "Arcadia baseball 1", orientation:"portrait"  },
        { src: "2.jpeg", alt: "Arcadia baseball 2", orientation:"portrait"  },
        { src: "3.jpeg", alt: "Arcadia baseball 3", orientation:"portrait"  },
        { src: "4.jpeg", alt: "Arcadia baseball 4", orientation:"portrait"  },
        { src: "5.jpeg", alt: "Arcadia baseball 5", orientation:"portrait"  },
        { src: "6.jpeg", alt: "Arcadia baseball 6", orientation:"portrait"  },
        { src: "7.jpeg", alt: "Arcadia baseball 1", orientation:"portrait"  },
        { src: "8.jpeg", alt: "Arcadia baseball 2", orientation:"portrait"  },
        { src: "9.jpeg", alt: "Arcadia baseball 3", orientation:"portrait"  },
        { src: "10.jpeg", alt: "Arcadia baseball 4", orientation:"landscape"  },
        { src: "11.jpeg", alt: "Arcadia baseball 5", orientation:"landscape"  },
        { src: "12.jpeg", alt: "Arcadia baseball 6", orientation:"landscape"  },
      ],
    },

    "track-field": {
      title: "Brophy Track & Feild",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "2.jpg", alt: "Track and field 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Track and field 2", orientation:"portrait"   },
        { src: "4.jpg", alt: "Track and field 3", orientation:"portrait"   },
        { src: "5.jpg", alt: "Track and field 4", orientation:"portrait"   },
        { src: "6.jpg", alt: "Track and field 5", orientation:"portrait"   },
        { src: "7.jpg", alt: "Track and field 6", orientation:"portrait"   },
        { src: "8.jpg", alt: "Track and field 2", orientation:"portrait"   },
        { src: "9.jpg", alt: "Track and field 3", orientation:"portrait"   },
        { src: "10.jpg", alt: "Track and field 4", orientation:"portrait"   },
        { src: "11.jpg", alt: "Track and field 5", orientation:"portrait"   },
        { src: "12.jpg", alt: "Track and field 6", orientation:"portrait"   },
      ],
    },

    "brophy-soccer": {
      title: "Brophy Soccer",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "12.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "13.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "16.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "17.jpg", alt: "Basketball 1", orientation:"portrait"   },                
      ],
    },
    
    "brophy-football": {
      title: "Brophy Football",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "13.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "16.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "17.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "18.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "19.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "20.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "21.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "22.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "23.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "24.jpg", alt: "Basketball 1", orientation:"landscape"   },        
      ],
    },
    
    "brophy-baseball": {
      title: "Brophy Baseball",
      year: "2025",
      cover: "1.JPG",
      photos: [
        { src: "1.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "12.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "13.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "14.JPG", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "15.JPG", alt: "Basketball 1", orientation:"landscape"   },  
        { src: "16.JPG", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "17.JPG", alt: "Basketball 1", orientation:"landscape"   },
        { src: "18.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "19.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "20.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "21.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "22.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "23.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "24.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "25.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "26.jpg", alt: "Basketball 1", orientation:"portrait"   },   
        { src: "27.jpg", alt: "Basketball 1", orientation:"portrait"   },              

      ],
    },
    
    "brophy-basketball": {
      title: "Brophy Basketball",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"portrait"   },                       
      ],
    },
    
    "xavier-soccer": {
      title: "Xavier Soccer",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "13.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "16.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "17.jpg", alt: "Basketball 1", orientation:"landscape"   },                
      ],
    },
     
    "brophy-cross": {
      title: "Brophy Cross Country",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "13.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "16.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "17.jpg", alt: "Basketball 1", orientation:"portrait"   },  
        { src: "18.jpg", alt: "Basketball 1", orientation:"portrait"   },                

      ],
    },
     
    "arcadia-baseball": {
      title: "Arcadia Baseball",
      year: "2026",
      cover: "1.JPG",
      photos: [
        { src: "1.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "13.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "16.JPG", alt: "Basketball 1", orientation:"portrait"   },        
      ],
    },
     
    "arcadia-lacrosse": {
      title: "Arcadia Lacrosse",
      year: "2025",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.JPG", alt: "Basketball 1", orientation:"portrait"   },                
      ],
    },
     
    "arcadia-soccer": {
      title: "Arcadia Soccer",
      year: "2025",
      cover: "1.jpg",
      photos: [
        { src: "1.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.JPG", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.JPG", alt: "Basketball 1", orientation:"portrait"   },
        { src: "13.JPG", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.JPG", alt: "Basketball 1", orientation:"portrait"   },                
      ],
    },


  },

  // ── EVENTS PROJECTS ──────────────────────────────────────

  events: {

    "little-league-opening": {
      title: "Brophy Open House",
      year: "2025",
      cover: "2.jpeg",
      photos: [
        { src: "1.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "2.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "4.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "9.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "12.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "13.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "16.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "17.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "18.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "19.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "20.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "21.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "22.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "24.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "23.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "25.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "26.jpeg", alt: "Basketball 1", orientation:"portrait"   },
      ],
    },

    "arcadia-hs-grad": {
      title: "DEAL Club",
      year: "2024 - 26",
      cover: "1.jpeg",
      photos: [
        { video: "1.mov", orientation: "portrait" },
        { video: "2.mov", orientation: "portrait" },
        { src: "1.jpeg", alt: "Senior portrait 1" },
        { src: "2.jpeg", alt: "Senior portrait 2" },
        { src: "3.jpeg", alt: "Senior portrait 3" },
        { src: "4.jpeg", alt: "Senior portrait 4" },
        { src: "5.jpeg", alt: "Senior portrait 5", orientation:"landscape" },
        { src: "6.jpeg", alt: "Senior portrait 6" },
        { src: "7.jpeg", alt: "Senior portrait 2" },
        { src: "8.jpeg", alt: "Senior portrait 3" },
        { src: "9.jpeg", alt: "Senior portrait 4" },
        { src: "10.jpg", alt: "Senior portrait 5" },
        { src: "11.jpg", alt: "Senior portrait 5" },
      ],
    },

    "brophy-stampede": {
      title: "The STAMPEDE",
      year: "2025",
      cover: "7.jpg",
      photos: [
      { src: "1.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "2.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "3.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "4.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "9.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "10.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "12.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "13.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "15.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "16.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "17.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "18.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "19.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "20.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "21.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "22.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "24.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "23.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "25.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "26.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "27.jpeg", alt: "Basketball 1", orientation:"portrait"   }, 
        { src: "28.jpeg", alt: "Basketball 1", orientation:"portrait"   }, 

      ],
    },

    "pep-rally": {
      title: "Brophy Pep Rallys",
      year: "2025",
      cover: "1.jpg",
      photos: [
        { src: "1.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "2.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "3.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "4.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpeg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "9.jpeg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "10.jpeg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "12.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "13.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "14.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "15.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "16.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "17.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "18.jpeg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "19.jpeg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "20.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "21.jpeg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "22.jpeg", alt: "Basketball 1", orientation:"landscape"   },
      ],
    },

  },

  // ── REAL ESTATE PORTFOLIO (one project per agent / company) ─
  // Photos + videos for each go in images/realestate/<project-key>/

  realestate: {

    "lane": {
      title: "Meredith Lane",
      year: "2026",
      cover: "1.jpg",
      photos: [
        { video: "listing-1.mov", poster: "tour-1.jpg", orientation: "portrait" },
        { video: "listing-2.mov", poster: "tour-2.jpg", orientation: "portrait" },
        { video: "listing-3.mov", poster: "tour-3.jpg", orientation: "portrait" },
        { video: "listing-4.mov", poster: "tour-4.jpg", orientation: "portrait" },
        { video: "listing-5.mov", poster: "tour-5.jpg", orientation: "portrait" },
        { video: "listing-6.mov", poster: "tour-1.jpg", orientation: "portrait" },
        { video: "listing-7.mov", poster: "tour-2.jpg", orientation: "portrait" },
        { video: "listing-8.mov", poster: "tour-3.jpg", orientation: "portrait" },
        { src: "a.jpg", alt: "Photo 1" },
        { src: "2.jpg", alt: "Photo 2" },
        { src: "3.jpg", alt: "Photo 3" },
        { src: "4.jpg", alt: "Photo 4" },
        { src: "5.jpg", alt: "Photo 5" },
      ],
    },

  },

}; // end PHOTOS
