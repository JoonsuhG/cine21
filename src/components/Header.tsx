import React, { useState } from 'react';
import { Search, User, X, Film, Sparkles } from 'lucide-react';
import { Movie, Article } from '../types';
import { MOVIES, ARTICLES } from '../data';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  edition: 'editorial' | 'cyberpunk';
  setEdition: (edition: 'editorial' | 'cyberpunk') => void;
  onSelectMovie: (movie: Movie) => void;
  onSelectArticle: (article: Article) => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  edition,
  setEdition,
  onSelectMovie,
  onSelectArticle
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const filteredMovies = searchQuery
    ? MOVIES.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.genre.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredArticles = searchQuery
    ? ARTICLES.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleLinkClick = (tab: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 mx-auto max-w-[1440px]">
        {/* Brand Logo with Neon Pulse */}
        <div 
          onClick={() => setCurrentTab('FILMS')}
          className="font-sans text-2xl md:text-3xl font-extrabold text-primary tracking-tighter uppercase cursor-pointer select-none text-glow hover:opacity-95 transition-opacity"
        >
          CINE21
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#films"
            onClick={(e) => handleLinkClick('FILMS', e)}
            className={`font-mono text-sm uppercase tracking-widest transition-colors duration-300 pb-1 ${
              currentTab === 'FILMS'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            FILMS
          </a>
          <a
            href="#reviews"
            onClick={(e) => handleLinkClick('REVIEWS', e)}
            className={`font-mono text-sm uppercase tracking-widest transition-colors duration-300 pb-1 ${
              currentTab === 'REVIEWS'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            REVIEWS
          </a>
          <a
            href="#schedule"
            onClick={(e) => handleLinkClick('SCHEDULE', e)}
            className={`font-mono text-sm uppercase tracking-widest transition-colors duration-300 pb-1 ${
              currentTab === 'SCHEDULE'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            SCHEDULE
          </a>
          <a
            href="#directors"
            onClick={(e) => handleLinkClick('DIRECTORS', e)}
            className={`font-mono text-sm uppercase tracking-widest transition-colors duration-300 pb-1 ${
              currentTab === 'DIRECTORS'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            DIRECTORS
          </a>
        </div>

        {/* Edition Switcher & Control Panel */}
        <div className="flex items-center gap-4">
          {/* Theme Edition Switcher Slider */}
          <div className="flex items-center bg-[#121212] border border-white/10 p-1">
            <button
              onClick={() => setEdition('editorial')}
              className={`px-3 py-1 font-mono text-[11px] tracking-wider uppercase transition-all ${
                edition === 'editorial'
                  ? 'bg-primary text-black font-semibold'
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              EDITORIAL
            </button>
            <button
              onClick={() => setEdition('cyberpunk')}
              className={`px-3 py-1 font-mono text-[11px] tracking-wider uppercase transition-all ${
                edition === 'cyberpunk'
                  ? 'bg-[#1a1a1a] text-primary border border-primary/40 font-semibold'
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              CYBERPUNK
            </button>
          </div>

          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-primary hover:text-white transition-colors p-1"
            aria-label="Search catalog"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Profile Button */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-primary hover:text-white transition-colors p-1"
              aria-label="User Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsProfileOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 bg-black border border-white/10 p-5 z-40 text-left noir-bloom">
                  <div className="border-b border-white/10 pb-3 mb-3">
                    <p className="font-sans font-bold text-white text-sm">CINEPHILE MEMBER</p>
                    <p className="font-mono text-xs text-primary mt-1">77jxxx@gmail.com</p>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>SAVED COVER STORIES:</span>
                      <span className="text-white">3 ARTICLES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>REVIEWS SUBMITTED:</span>
                      <span className="text-white">12 ENTRIES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BOOKED TICKETS:</span>
                      <span className="text-primary font-bold">1 LIVE</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setIsProfileOpen(false);
                      alert('Exclusive ticket passes & badge keys are synced with this local node.');
                    }}
                    className="w-full mt-4 bg-primary text-black font-semibold uppercase tracking-wider py-2 font-mono text-xs hover:bg-white transition-colors"
                  >
                    ACCESS TICKETS
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Search Panel Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center">
          <div className="w-full max-w-4xl px-6 md:px-0 pt-20">
            <div className="flex justify-between items-center border-b border-primary/40 pb-4">
              <input
                type="text"
                autoFocus
                placeholder="TYPE FILM TITLE, GENRE, OR DIRECTOR..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white border-0 outline-none w-full text-xl md:text-3xl font-sans tracking-wider placeholder-white/30 font-bold focus:ring-0"
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-primary hover:text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Live Search Results */}
            <div className="mt-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar space-y-8">
              {searchQuery === '' ? (
                <div className="text-center py-12 text-on-surface-variant">
                  <p className="font-mono text-sm uppercase tracking-widest">Awaiting system query input ...</p>
                  <div className="flex justify-center gap-3 mt-4 text-xs font-mono text-primary/60">
                    <span className="px-2 py-1 bg-white/5 border border-white/10">#NOIR</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10">#THRILLER</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10">#BONG JOON HO</span>
                  </div>
                </div>
              ) : (
                <>
                  {filteredMovies.length === 0 && filteredArticles.length === 0 && (
                    <div className="text-center py-12 text-on-surface-variant">
                      <p className="font-mono text-sm uppercase tracking-widest">NO DOCKED RECORDS MATCHING: "{searchQuery}"</p>
                    </div>
                  )}

                  {/* Movies matches */}
                  {filteredMovies.length > 0 && (
                    <div>
                      <h4 className="font-mono text-xs text-primary uppercase tracking-widest border-b border-white/10 pb-2 mb-4">FILM MATCHES</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredMovies.map(movie => (
                          <div 
                            key={movie.id}
                            onClick={() => {
                              onSelectMovie(movie);
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="bg-white/5 border border-white/10 p-4 flex gap-4 cursor-pointer hover:border-primary/60 transition-colors"
                          >
                            <img src={movie.image} alt={movie.title} className="w-20 h-12 object-cover grayscale brightness-90 hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                            <div>
                              <p className="font-sans font-extrabold text-sm text-white tracking-widest">{movie.title}</p>
                              <p className="font-mono text-[10px] text-primary mt-1 uppercase">{movie.provider} • {movie.genre} • {movie.duration} MIN</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Articles matches */}
                  {filteredArticles.length > 0 && (
                    <div>
                      <h4 className="font-mono text-xs text-primary uppercase tracking-widest border-b border-white/10 pb-2 mb-4">ARTICLE RECORDS</h4>
                      <div className="space-y-3">
                        {filteredArticles.map(art => (
                          <div 
                            key={art.id}
                            onClick={() => {
                              onSelectArticle(art);
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="p-4 bg-white/5 border border-white/10 hover:border-primary/60 cursor-pointer flex justify-between items-center transition-all"
                          >
                            <div>
                              <span className="font-mono text-[9px] bg-primary text-black px-2 py-0.5 font-bold uppercase tracking-widest mr-2">{art.category}</span>
                              <span className="font-sans text-white text-sm font-semibold tracking-wide">{art.title}</span>
                              <p className="font-mono text-xs text-on-surface-variant mt-1">{art.subtitle.slice(0, 100)}...</p>
                            </div>
                            <span className="font-mono text-xs text-primary uppercase shrink-0">READ</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
