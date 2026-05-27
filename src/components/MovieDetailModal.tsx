import React, { useState } from 'react';
import { X, Play, Plus, Check, Star, Film, Volume2 } from 'lucide-react';
import { Movie } from '../types';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieDetailModal({ movie, onClose }: MovieDetailModalProps) {
  const [inLogs, setInLogs] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="bg-[#0e0e0e] border border-white/10 p-6 md:p-8 w-full max-w-3xl relative z-10 m-auto noir-bloom">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-white transition-colors"
          aria-label="Dismiss details modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!isPlaying ? (
          /* Normal Details Layout */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
            {/* Left Column: Cover Image & rating badge */}
            <div className="md:col-span-5 relative group">
              <div className="aspect-[3/4] overflow-hidden border border-white/5 bg-[#1a1a1a]">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-3 left-3 bg-primary text-black font-mono text-[10px] font-extrabold px-2.5 py-1 tracking-wider uppercase">
                {movie.provider}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/85 text-primary font-sans text-xl font-black px-3 py-1.5 border border-primary/20">
                ★ {movie.rating}
              </div>
            </div>

            {/* Right Column: Narrative Info */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-primary font-mono text-[10px] tracking-widest font-extrabold uppercase bg-white/5 px-2.5 py-1">
                  {movie.genre} ARCHIVE DATA
                </span>
                
                <h2 className="font-sans text-3xl md:text-4xl font-black text-white leading-none uppercase tracking-tighter mt-2">
                  {movie.title}
                </h2>

                <div className="flex gap-4 font-mono text-[10px] text-on-surface-variant uppercase">
                  <span>DURATION: {movie.duration} MIN</span>
                  <span>•</span>
                  <span>GENRE: {movie.genre}</span>
                  <span>•</span>
                  <span>SCORE: {movie.rating}/10</span>
                </div>

                <p className="font-sans text-sm text-on-surface-variant leading-relaxed pb-4 pt-2 border-b border-white/5">
                  {movie.description} This film highlights the tension of isolated protagonists caught in a web of bureaucratic corruption, captured with high-contrast, moody anamorphic lenses.
                </p>

                <div className="bg-[#121212] p-4 text-xs font-mono space-y-1 my-2">
                  <p className="text-white"><span className="text-primary font-bold">CRITICS CONCENSUS:</span> High density theatrical score.</p>
                  <p className="text-[#a5a5a5]">Available in selected theatres and 4K digital transfers.</p>
                </div>
              </div>

              {/* Actions row */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="flex-1 bg-primary text-black font-mono text-xs font-bold py-3.5 px-6 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all bloom-purple"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>PLAY TRAILER</span>
                </button>
                <button 
                  onClick={() => setInLogs(!inLogs)}
                  className="flex-1 border border-white/10 text-white font-mono text-xs font-bold py-3.5 px-6 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                >
                  {inLogs ? (
                    <>
                      <Check className="w-4 h-4 text-primary" />
                      <span>LOGGED</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>CINE-LOG</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Simulated Trailer Player Layout */
          <div className="flex flex-col items-center justify-center py-12 text-center select-none bg-black/50">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 animate-pulse relative">
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></span>
              <Volume2 className="w-7 h-7 text-black" />
            </div>
            
            <h3 className="font-sans text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
              PLAYING TRAILER FEED
            </h3>
            <p className="font-mono text-[10px] text-primary uppercase tracking-[0.25em] mb-8">
              SIMULATED {movie.title} REEL • SECURE DECRYPT
            </p>

            {/* Beautiful visual equalizer animation */}
            <div className="flex items-end justify-center gap-1.5 h-16 mb-8 w-44">
              {Array.from({ length: 15 }).map((_, i) => {
                const randomDelay = (i * 0.15).toFixed(2);
                const randomHeight = (Math.random() * 48 + 16).toFixed(0);
                return (
                  <div 
                    key={i} 
                    style={{ 
                      animationDelay: `${randomDelay}s`,
                      height: `${randomHeight}px`
                    }}
                    className="w-1 bg-primary animate-[pulse_1s_infinite_alternate]"
                  />
                );
              })}
            </div>

            <p className="font-sans text-xs text-on-surface-variant max-w-md mb-6 leading-relaxed">
              Experience the breathtaking soundscapes and architectural lighting of {movie.title} in selected high-definition screens this season.
            </p>

            <button 
              onClick={() => setIsPlaying(false)}
              className="border border-white/20 text-white font-mono text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-white hover:text-black transition-colors"
            >
              STOP REEL FEED
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
