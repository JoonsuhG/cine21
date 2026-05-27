import React, { useEffect, useState } from 'react';

export default function Ticker() {
  const tickerItems = [
    "NOW PLAYING: DUNE PART TWO",
    "THE FIRST OMEN",
    "CIVIL WAR",
    "CHALLENGERS",
    "FURIOSA: A MAD MAX SAGA",
    "KINGDOM OF THE PLANET OF THE APES",
    "THE NOIR CODE",
    "BEYOND THE SHADOWS"
  ];

  // Duplicate items twice to allow seamless continuous loop
  const tickerText = Array(4).fill(tickerItems.join(" • ")).join(" • ");

  return (
    <div className="mt-[74px] overflow-hidden bg-[#121212] border-y border-primary/20 py-2.5 flex items-center select-none">
      <div className="whitespace-nowrap flex animate-ticker font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span>{tickerText}</span>
      </div>
    </div>
  );
}
