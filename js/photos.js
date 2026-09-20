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

  // ── VIDEO REELS (2 slots, shown under My Favorites) ───────
  // Add up to 2 videos here. Each needs an .mp4 in videos/ and,
  // optionally, a poster thumbnail image in images/reels/ (shown
  // before the video is played). Leave src as "" for a slot to
  // show a "Video Coming Soon" placeholder instead.
  reels: [
    { src: "", poster: "", title: "" }, // e.g. { src: "reel-1.mp4", poster: "reel-1.jpg", title: "2026 Sports Reel" }
    { src: "", poster: "", title: "" },
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
  
  // ── PORTRAITURE PROJECTS ─────────────────────────────────
  // Each key is a project. The "cover" image is the first one
  // in the array — it shows on the Portraiture landing page.
  // All images in the array appear in that project's gallery.

  portraiture: {

    "senior-portraits": {
      title: "Senior Portraits",
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
      ],
    },

    "natural-light": {
      title: "Coming Soon",
      year: "2027",
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
      title: "Coming Soon",
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
      title: "Coming Soon",
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

    "brophy-stampede": {
      title: "The STAMPEDE",
      year: "2025",
      cover: "7.jpg",
      photos: [
      { src: "1.jpg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "2.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "3.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "4.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "5.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "6.jpg", alt: "Basketball 1", orientation:"portrait"   },       
        { src: "7.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "8.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "9.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "10.jpg", alt: "Basketball 1", orientation:"portrait"   },
        { src: "11.jpg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "12.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "13.jpg", alt: "Basketball 1", orientation:"portrait"   },        
        { src: "14.jpg", alt: "Basketball 1", orientation:"portrait"   }, 
      ],
    },

    "pep-rally": {
      title: "Brophy Pep Rallys",
      year: "2025",
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
        { src: "12.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "13.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "14.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "15.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "16.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "17.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "18.jpg", alt: "Basketball 1", orientation:"landscape"   },       
        { src: "19.jpg", alt: "Basketball 1", orientation:"landscape"   },
        { src: "20.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "21.jpg", alt: "Basketball 1", orientation:"landscape"   },        
        { src: "22.jpg", alt: "Basketball 1", orientation:"landscape"   },
      ],
    },

  },

}; // end PHOTOS
