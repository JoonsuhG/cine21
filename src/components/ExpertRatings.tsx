import React, { useState } from 'react';
import { ThumbsUp, Sparkles, MessageSquare, Star } from 'lucide-react';
import { Movie } from '../types';
import { MOVIES } from '../data';

interface ExpertRatingsProps {
  onSelectMovie: (movie: Movie) => void;
}

export default function ExpertRatings({ onSelectMovie }: ExpertRatingsProps) {
  // Let the user submit a custom local react reaction to create instant micro-interaction!
  const [userReactions, setUserReactions] = useState<{ [key: string]: string[] }>({
    'beyond-the-shadows': [],
    'the-noir-code': []
  });
  const [inputs, setInputs] = useState<{ [key: string]: string }>({
    'beyond-the-shadows': '',
    'the-noir-code': ''
  });

  const [votes, setVotes] = useState({
    'beyond-the-shadows': 142,
    'the-noir-code': 94
  });

  const handleVote = (movieId: 'beyond-the-shadows' | 'the-noir-code', e: React.MouseEvent) => {
    e.stopPropagation();
    setVotes(prev => ({
      ...prev,
      [movieId]: prev[movieId] + 1
    }));
  };

  const handleAddReaction = (movieId: string, e: React.FormEvent) => {
    e.preventDefault();
    const txt = inputs[movieId]?.trim();
    if (!txt) return;

    setUserReactions(prev => ({
      ...prev,
      [movieId]: [txt, ...prev[movieId]]
    }));
    setInputs(prev => ({ ...prev, [movieId]: '' }));
  };

  const beyondShadowsMovie = MOVIES.find(m => m.id === 'beyond-the-shadows')!;
  const noirCodeMovie = MOVIES.find(m => m.id === 'the-noir-code')!;

  return (
    <section className="py-16 md:py-24 px-6 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
      <h2 className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 md:mb-16 text-center">
        EXPERT RATINGS
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Feature Item: BEYOND THE SHADOWS */}
        <div 
          onClick={() => onSelectMovie(beyondShadowsMovie)}
          className="lg:col-span-5 cursor-pointer block group"
        >
          <div className="relative">
            <div className="overflow-hidden border border-white/10 relative">
              <img 
                alt="Beyond The Shadows Poster" 
                className="w-full h-auto grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugFX-kbEk7JwKVUIz-aPw9sBdqzNSQ8l2-vUq8okOhIHuXehD5UIQQOWjQoXB10DK8rqlmHaFStUXXCzjqX933CY_YpheAad1Ukbf2dHgO9icNITuBKxRZ2T0Ww3Q2m8_cswWvOQAlqy9JgT8oKaXTTFHgGQRlWvu4TdUkt98zlSHSnBzkLXPCrW-ARcNwgFMTGL8Odhhx2TrGfEqrOHNuZ_9T53M7CPBgJxt-1vzPXHk2ZvB_SG7vV5A"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            
            {/* Score Pill overlay on bottom-right of image */}
            <div className="absolute -bottom-5 -right-5 bg-primary text-black w-20 h-20 md:w-24 md:h-24 flex items-center justify-center font-extrabold text-3xl md:text-4xl leading-none bloom-purple z-10 select-none">
              9.2
            </div>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs text-primary tracking-widest mb-2 uppercase font-bold">WEEKLY PICK</p>
            <h4 className="font-sans text-2xl md:text-3xl font-black uppercase mb-3 tracking-tight group-hover:text-primary transition-colors">
              BEYOND THE SHADOWS
            </h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed italic mb-4">
              "A masterpiece of restraint and visual storytelling. The best cinematography we've seen this year."
            </p>

            {/* Micro Interaction Section */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono" onClick={e => e.stopPropagation()}>
              <button 
                onClick={(e) => handleVote('beyond-the-shadows', e)}
                className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5 hover:bg-primary hover:text-black transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>AGREE ({votes['beyond-the-shadows']})</span>
              </button>
            </div>

            {/* Reaction inputs */}
            <form 
              onSubmit={(e) => handleAddReaction('beyond-the-shadows', e)}
              onClick={e => e.stopPropagation()}
              className="mt-4 flex"
            >
              <input 
                type="text" 
                placeholder="ADD CINEPHILE DIRECT REPLY REACTION..." 
                value={inputs['beyond-the-shadows'] || ''}
                onChange={e => setInputs(prev => ({ ...prev, 'beyond-the-shadows': e.target.value }))}
                className="px-3 py-2 bg-[#121212] border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-xs font-mono tracking-wider w-full placeholder-white/25 text-white"
              />
              <button type="submit" className="bg-primary text-black px-4 text-xs font-mono font-bold uppercase transition-colors hover:bg-white shrink-0">
                SEND
              </button>
            </form>

            {/* Custom comments box */}
            {userReactions['beyond-the-shadows'].length > 0 && (
              <div className="mt-3 bg-white/5 p-3 space-y-2 max-h-32 overflow-y-auto custom-scrollbar border-l border-primary" onClick={e => e.stopPropagation()}>
                {userReactions['beyond-the-shadows'].map((cmt, idx) => (
                  <div key={idx} className="flex gap-2 text-xs font-mono">
                    <span className="text-primary font-bold">NODE_{idx}:</span>
                    <span className="text-white/80">{cmt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Critical Stats Column */}
        <div className="lg:col-span-2 flex flex-col gap-6 lg:pt-24">
          <div className="border-y border-white/10 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">CRITICS SCORE</p>
            <p className="font-sans text-3xl font-black text-white mt-1">88%</p>
          </div>
          <div className="border-y border-white/10 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">AUDIENCE RATIO</p>
            <p className="font-sans text-3xl font-black text-primary mt-1">A+</p>
          </div>
          <div className="border-y border-white/10 py-5 bg-white/5 p-4 border-l border-primary/40">
            <div className="flex items-center gap-1.5 text-primary text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE ANALYTICS</span>
            </div>
            <p className="font-sans text-[11px] text-on-surface-variant mt-2 leading-relaxed font-mono uppercase tracking-wide">
              Dynamic sentiment calculation is currently indexing active theatrical feeds.
            </p>
          </div>
        </div>

        {/* Right Feature Item: THE NOIR CODE (Offset on desktop) */}
        <div 
          onClick={() => onSelectMovie(noirCodeMovie)}
          className="lg:col-span-5 cursor-pointer block group lg:mt-36"
        >
          <div className="relative">
            <div className="overflow-hidden border border-white/10 relative">
              <img 
                alt="The Noir Code Poster" 
                className="w-full h-auto grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhkYjE05M4U5M5rEIDCe3cbR4GY3O_y-iYHCxqFGZ5foPvMLLJcrAYMU2xJbveGdDsEb1cjl1LeMEUzO5S6C7SjO2tuTXSMGrED5bBvbsiSGR6fUQFR41NQ1tB530mTiq-jc2ocnyCtPKtruGS6-8E-qdl_xhNl4mjQ6LjTP8T1QAgYrCDie4f0vXbB-RUF_xZSsBFHYKOBqD_ZDWJhSQunQqwr2W4wDZlmfWM_wCGqhmWxAoHXU07mqbk"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </div>

            {/* Score Pill overlay on top-left of image */}
            <div className="absolute -top-5 -left-5 bg-white text-black w-20 h-20 md:w-24 md:h-24 flex items-center justify-center font-extrabold text-3xl md:text-4xl leading-none noir-bloom z-10 select-none">
              8.5
            </div>
          </div>

          <div className="mt-8 text-right">
            <p className="font-mono text-xs text-primary tracking-widest mb-2 uppercase font-bold">CRITIC'S CHOICE</p>
            <h4 className="font-sans text-2xl md:text-3xl font-black uppercase mb-3 tracking-tight group-hover:text-primary transition-colors">
              THE NOIR CODE
            </h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed italic mb-4">
              "Challenging, dark, and beautifully composed. A film that demands multiple viewings."
            </p>

            {/* Micro Interaction Section */}
            <div className="flex flex-wrap items-center justify-end gap-4 text-xs font-mono" onClick={e => e.stopPropagation()}>
              <button 
                onClick={(e) => handleVote('the-noir-code', e)}
                className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5 hover:bg-white hover:text-black transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>AGREE ({votes['the-noir-code']})</span>
              </button>
            </div>

            {/* Reaction inputs */}
            <form 
              onSubmit={(e) => handleAddReaction('the-noir-code', e)}
              onClick={e => e.stopPropagation()}
              className="mt-4 flex justify-end"
            >
              <input 
                type="text" 
                placeholder="ADD CRIDIC FEED DEVISE REACTION..." 
                value={inputs['the-noir-code'] || ''}
                onChange={e => setInputs(prev => ({ ...prev, 'the-noir-code': e.target.value }))}
                className="px-3 py-2 bg-[#121212] border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-xs font-mono tracking-wider w-full placeholder-white/25 text-white text-right"
              />
              <button type="submit" className="bg-white text-black px-4 text-xs font-mono font-bold uppercase transition-colors hover:bg-primary shrink-0">
                SEND
              </button>
            </form>

            {/* Custom comments box */}
            {userReactions['the-noir-code'].length > 0 && (
              <div className="mt-3 bg-white/5 p-3 space-y-2 max-h-32 overflow-y-auto custom-scrollbar border-r border-white text-right" onClick={e => e.stopPropagation()}>
                {userReactions['the-noir-code'].map((cmt, idx) => (
                  <div key={idx} className="flex gap-2 text-xs font-mono justify-end">
                    <span className="text-white/80">{cmt}</span>
                    <span className="text-white font-bold">:NODE_{idx}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
