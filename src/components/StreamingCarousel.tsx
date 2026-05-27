import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Info } from 'lucide-react';
import { Movie } from '../types';
import { MOVIES } from '../data';

interface StreamingCarouselProps {
  onSelectMovie: (movie: Movie) => void;
}

export default function StreamingCarousel({ onSelectMovie }: StreamingCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 360;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getProviderClass = (provider: string) => {
    switch (provider) {
      case 'NETFLIX':
        return 'border-rose-600 text-rose-500 bg-rose-950/20';
      case 'TVING':
        return 'border-red-600 text-red-500 bg-red-950/20';
      case 'DISNEY+':
        return 'border-sky-500 text-sky-400 bg-sky-950/20';
      default:
        return 'border-primary text-primary bg-primary/10';
    }
  };

  // Only take NIGHT DRIFT, THE SILENT BAY, PROJECTOR X etc. for Streaming list
  const streamingMovies = MOVIES.filter(m => 
    m.id === 'night-drift' || m.id === 'the-silent-bay' || m.id === 'projector-x'
  );

  return (
    <section className="bg-[#0e0e0e] py-16 md:py-24 border-b border-white/5">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <div>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-primary">
              STREAMING NOW
            </h2>
            <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mt-2">
              CURATED FOR THE CINEPHILE EYE
            </p>
          </div>
          
          {/* Slider Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-300"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-300"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar scroll-smooth snap-x"
        >
          {streamingMovies.map((movie) => (
            <div 
              key={movie.id}
              className="min-w-[320px] md:min-w-[400px] flex-shrink-0 group cursor-pointer snap-start"
              onClick={() => onSelectMovie(movie)}
            >
              {/* Image Frame */}
              <div className="aspect-[16/9] bg-[#1a1a1a] relative overflow-hidden noir-bloom border border-white/5">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  src={movie.image} 
                  alt={movie.title}
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-transparent group-hover:to-transparent transition-all duration-500"></div>
                
                {/* Micro Actions Overlay */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <div className="w-9 h-9 bg-primary text-black flex items-center justify-center">
                    <Play className="w-4 h-4 fill-black text-black" />
                  </div>
                  <div className="w-9 h-9 bg-white text-black flex items-center justify-center">
                    <Info className="w-4 h-4" />
                  </div>
                </div>

                {/* Live Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2.5 py-0.5 text-[9px] font-mono border font-extrabold tracking-widest ${getProviderClass(movie.provider)}`}>
                    {movie.provider}
                  </span>
                </div>
              </div>

              {/* Movie Title & Label */}
              <h3 className="font-sans text-xl font-black mt-4 uppercase tracking-tighter group-hover:text-primary transition-colors">
                {movie.title}
              </h3>
              <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest mt-1">
                {movie.genre} | {movie.duration} MIN
              </p>
            </div>
          ))}

          {/* Additional discovery card to fill space beautifully */}
          <div className="min-w-[320px] md:min-w-[400px] flex-shrink-0 bg-[#121212] border border-dashed border-white/10 p-8 flex flex-col justify-between align-start snap-start hover:border-primary/50 transition-colors">
            <div>
              <span className="text-primary font-mono text-[10px] uppercase tracking-widest block mb-2">LIMITED ENTRY</span>
              <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight uppercase leading-none">
                CULTURE PASS<br />NOIR ARCHIVE
              </h3>
              <p className="font-mono text-xs text-on-surface-variant mt-3 leading-relaxed">
                Connect your account to access over 1,500 curated mid-century crime drama masterpieces.
              </p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                alert('Noir classic archive credentials are being generated for your session!');
              }}
              className="mt-6 border border-white/20 text-white hover:bg-primary hover:text-black py-3 px-6 font-mono text-xs tracking-widest uppercase transition-all"
            >
              REQUEST KEYS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
