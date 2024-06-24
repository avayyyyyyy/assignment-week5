import React from "react";

export default function Playlist() {
  const playlistItems = [
    "3. My Playlist",
    "Haluk and ErenYalcn",
    "Driving at +200km/h",
    "Haluk Levent's List",
    "Instrumental Music",
    "Hip Hop America",
    "3. My Playlist",
    "Haluk and ErenYalcn",
    "Driving at +200km/h",
    "Haluk Levent's List",
    "Instrumental Music",
    "Hip Hop America",
  ];

  // Dummy American songs
  const dummyAmericanSongs = [
    "Pop Hits",
    "Rock Classics",
    "Country Vibes",
    "Rap Anthems",
    "Indie Faves",
  ];

  return (
    <nav className="flex">
      <ul>
        {playlistItems.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href="#"
              className="text-link hover:text-white text-sm font-semibold"
            >
              {item}
            </a>
          </li>
        ))}
        {/* Adding dummy American songs */}
        {dummyAmericanSongs.map((song, index) => (
          <li key={index + playlistItems.length} className="mb-2">
            <a
              href="#"
              className="text-link hover:text-white text-sm font-semibold"
            >
              {song}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
