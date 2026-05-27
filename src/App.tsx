import React, { useState, useEffect } from 'react';
import { Share2, Bookmark, Flame, ArrowRight, ExternalLink, SlidersHorizontal, Eye, Globe } from 'lucide-react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import StreamingCarousel from './components/StreamingCarousel';
import ExpertRatings from './components/ExpertRatings';
import ScreeningSchedule from './components/ScreeningSchedule';
import Newsletter from './components/Newsletter';
import ArticleModal from './components/ArticleModal';
import MovieDetailModal from './components/MovieDetailModal';

import { Movie, Article } from './types';
import { MOVIES, ARTICLES } from './data';

export default function App() {
  const [currentTab, setCurrentTab] = useState('FILMS');
  const [edition, setEdition] = useState<'editorial' | 'cyberpunk'>('editorial');
  
  // Selected state for modals
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Simple bookmark indices
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isShared, setIsShared] = useState(false);

  // Parallax background offset
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const shareCollection = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 3000);
  };

  // Find standard articles
  const coverStory = ARTICLES.find(a => a.id === 'reconstructing-the-frame')!;
  const neonAwakening = ARTICLES.find(a => a.id === 'the-neon-awakening')!;
  const brutalismArticle = ARTICLES.find(a => a.id === 'symmetry-of-chaos')!;
  const voidWithinArticle = ARTICLES.find(a => a.id === 'the-void-within')!;

  return (
    <div className="bg-background text-on-background font-sans min-h-screen flex flex-col selection:bg-primary selection:text-black">
      
      {/* Header component */}
      <Header 
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          // If tab is schedule, reviews, etc., automatically switch or focus
          if (tab === 'SCHEDULE') setEdition('cyberpunk');
        }}
        edition={edition}
        setEdition={setEdition}
        onSelectMovie={setSelectedMovie}
        onSelectArticle={setSelectedArticle}
      />

      {/* Main Container */}
      <div className="flex-grow">
        
        {/* EDITORIAL EDITION (Layout representing Image 1) */}
        {edition === 'editorial' && (
          <div className="animate-[fade-in_0.4s_ease]">
            
            {/* Ticker marquee above cover */}
            <Ticker />

            {/* Hero Cover section */}
            <section className="relative w-full h-[85vh] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1s]"
                style={{ 
                  backgroundImage: `url('${coverStory.image}')`,
                  transform: `translateY(${scrollY * 0.35}px)`
                }}
                referrerPolicy="no-referrer"
              >
                {/* Dark Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Cover text */}
              <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-16 max-w-[1440px] mx-auto text-left">
                <div className="max-w-4xl space-y-6">
                  <span className="inline-block px-4 py-1 bg-primary text-black font-mono text-xs font-bold tracking-widest uppercase mb-2">
                    {coverStory.category}
                  </span>
                  
                  <h1 className="font-sans text-[9vw] md:text-7xl font-black leading-none uppercase text-white text-glow">
                    RECONSTRUCTING<br />THE FRAME
                  </h1>

                  <p className="font-sans text-base md:text-lg text-secondary-fixed-dim max-w-2xl border-l-2 border-primary pl-6 leading-relaxed italic">
                    {coverStory.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setSelectedArticle(coverStory)}
                      className="px-8 py-4 bg-primary text-black font-mono text-xs font-extrabold uppercase tracking-widest bloom-purple hover:bg-white hover:scale-105 transition-all duration-300"
                    >
                      READ ARTICLE
                    </button>
                    <button 
                      onClick={() => alert('Opening editorial photo collection gallery...')}
                      className="px-8 py-4 border-2 border-white text-white font-mono text-xs font-extrabold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                      VIEW GALLERY
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Streaming Carousel Section */}
            <StreamingCarousel onSelectMovie={setSelectedMovie} />

            {/* Expert Ratings Section */}
            <section id="reviews">
              <ExpertRatings onSelectMovie={setSelectedMovie} />
            </section>

            {/* Extra interactive element for Editorial layout: Saved logs indicator */}
            <section className="py-8 bg-black/50 border-t border-white/5">
              <div className="px-6 md:px-16 max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>PREMIERE NODE STATUS: ACTIVE 2026 UTC</span>
                </div>
                <div className="flex gap-4">
                  <span>CURATED REVIEWS: 4322 PIPES</span>
                  <span>|</span>
                  <span>ONLINE ARCHIVES: 24,000 NODES</span>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* CYBERPUNK EDITION (Layout representing Image 2) */}
        {edition === 'cyberpunk' && (
          <div className="animate-[fade-in_0.4s_ease]">
            
            {/* Marquee ticker */}
            <Ticker />

            {/* Inner Cyber-grid Wrapper */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex flex-col lg:flex-row gap-8">
              
              {/* Left Sidebar (vertical text indicators) */}
              <aside className="hidden lg:flex flex-col justify-between w-20 shrink-0 border-r border-white/10 pr-4 pt-4">
                <div className="vertical-text font-sans text-xl font-black text-white/10 select-none tracking-widest pb-12">
                  EDITION_NO_2026_CODENAME_NOIR
                </div>

                {/* Bookmark/Share buttons stack */}
                <div className="flex flex-col gap-3 items-center">
                  <button 
                    onClick={shareCollection}
                    className="w-10 h-10 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all"
                    title="Share Issue"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => toggleBookmark('cyberpunk-edition')}
                    className={`w-10 h-10 border border-primary/40 flex items-center justify-center transition-all ${
                      bookmarks.includes('cyberpunk-edition') 
                        ? 'bg-primary text-black' 
                        : 'text-primary hover:bg-primary hover:text-black'
                    }`}
                    title="Bookmark Issue"
                  >
                    <Bookmark className="w-5 h-5 fill-current" />
                  </button>
                  
                  {isShared && (
                    <span className="absolute left-24 bg-primary text-black text-[9px] font-mono p-1 font-bold z-20">
                      SAVED LINK TO CLOUDS!
                    </span>
                  )}
                </div>
              </aside>

              {/* Main Content Grid column */}
              <section className="flex-1 space-y-12">
                
                {/* Hero Cyber Cover */}
                <div className="relative h-[65vh] w-full overflow-hidden group border border-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${neonAwakening.image}')` }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glitch Overlay effect layer */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center glitch-layer opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                    style={{ backgroundImage: `url('${neonAwakening.image}')` }}
                    referrerPolicy="no-referrer"
                  />

                  {/* Fog overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Cover text aligned bottom-left */}
                  <div className="absolute bottom-12 left-6 md:left-12 max-w-2xl text-left">
                    <span className="bg-primary text-black px-3 py-1 font-mono text-[10px] uppercase tracking-widest mb-4 inline-block font-bold">
                      {neonAwakening.category}
                    </span>
                    <h1 className="font-sans text-4xl md:text-6xl font-black text-white leading-none mb-6">
                      THE NEON<br />AWAKENING
                    </h1>
                    <button 
                      onClick={() => setSelectedArticle(neonAwakening)}
                      className="bg-primary text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest bloom-purple hover:scale-105 transition-all"
                    >
                      Read Investigation
                    </button>
                  </div>
                </div>

                {/* Bento Article Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                  
                  {/* Large Front-cover Feature Card */}
                  <article className="lg:col-span-7 bg-[#121212] border border-white/10 p-6 flex flex-col gap-6 text-left group hover:border-primary/50 transition-colors">
                    <div className="aspect-video w-full overflow-hidden border border-white/5 bg-[#1a1a1a]">
                      <img 
                        src={brutalismArticle.image} 
                        alt={brutalismArticle.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:brightness-105 transition-all duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex gap-4 mb-3 font-mono text-[10px] text-primary font-bold">
                        <span className="uppercase">{brutalismArticle.category}</span>
                        <span className="text-on-surface-variant uppercase">{brutalismArticle.duration}</span>
                      </div>
                      <h3 
                        onClick={() => setSelectedArticle(brutalismArticle)}
                        className="font-sans text-xl md:text-2xl font-black text-white mb-3 uppercase leading-tight tracking-tight hover:text-primary cursor-pointer transition-colors"
                      >
                        SYMMETRY OF CHAOS: MODERN NOIR ARCHITECTURE
                      </h3>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                        {brutalismArticle.subtitle} Here, we decode contemporary structural brutalism and how industrial grey planes frame the anxiety of protagonists.
                      </p>
                    </div>
                  </article>

                  {/* Sidebar small featured items column */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Director Bong Joon Ho Column entry */}
                    <article className="bg-[#1c1b1b] border-l-4 border-primary p-6 hover:bg-[#121212] transition-colors text-left flex gap-4 items-center group">
                      <div className="w-20 h-20 shrink-0 overflow-hidden border border-white/10 bg-[#1a1a1a]">
                        <img 
                          src={voidWithinArticle.image} 
                          alt="Bong Joon Ho portrait view" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-primary font-mono text-[9px] uppercase tracking-widest font-extrabold block mb-1">
                          {voidWithinArticle.category}
                        </span>
                        <h4 
                          onClick={() => setSelectedArticle(voidWithinArticle)}
                          className="font-sans text-lg font-black text-white leading-tight uppercase hover:text-primary cursor-pointer transition-colors truncate"
                        >
                          THE VOID WITHIN
                        </h4>
                        <p className="text-[11px] font-mono text-on-surface-variant uppercase mt-1">BY BONG JOON HO</p>
                      </div>
                    </article>

                    {/* Cannes Radical list promo box */}
                    <div className="bg-primary/5 border border-primary/20 p-8 flex flex-col justify-between h-full text-left relative overflow-hidden group">
                      {/* Grid background element */}
                      <div className="absolute top-0 right-0 p-4 font-sans text-7xl font-black text-primary/5 select-none leading-none">
                        01
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-sans text-2xl font-black text-white uppercase tracking-tight leading-none">
                          CANNES 2024:<br />THE RADICAL LIST
                        </h4>
                        <p className="text-on-surface-variant font-mono text-xs leading-relaxed max-w-xs">
                          Breaking down the 24 revolutionary films competing for the prestigious Palme d’Or selection this season.
                        </p>
                        <button 
                          onClick={() => alert('Radical review sheets dossier download has been queued on your system node!')}
                          className="inline-flex items-center gap-1.5 text-primary font-mono text-xs uppercase hover:underline mt-2 font-bold"
                        >
                          <span>Explore List</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Screening Schedule Calendar Board */}
                <ScreeningSchedule />

              </section>

            </div>

          </div>
        )}

        {/* Newsletter Ingress Subscription section */}
        <Newsletter />

      </div>

      {/* Styled Film Noir Global Footer */}
      <footer className="w-full bg-[#0e0e0e] border-t border-white/10">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-12 w-full max-w-[1440px] mx-auto gap-8 text-left">
          
          <div className="flex flex-col gap-3">
            <span className="font-sans text-3xl font-black text-white uppercase tracking-tighter text-glow">
              CINE21
            </span>
            <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed">
              Radical film journalism for the obsessive cinephile. Exploring the dark, symmetric grid systems of modern cinema.
            </p>
          </div>

          <div className="flex flex-col items-end gap-6 w-full lg:w-auto">
            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] text-on-surface-variant">
              <a href="#" className="hover:text-primary transition-colors uppercase">PRIVACY POLICY</a>
              <a href="#" className="hover:text-primary transition-colors uppercase">TERMS OF SERVICE</a>
              <a href="#" className="hover:text-primary transition-colors uppercase">ADVERTISE</a>
              <a href="#" className="hover:text-primary transition-colors uppercase">CONTACT</a>
              <a href="#" className="hover:text-primary transition-colors uppercase">ARCHIVE</a>
            </div>
            
            <p className="font-mono text-[10px] text-on-surface-variant/40">
              © 2026 CINE21. THE NOIR COLLECTION. ALL POWER BOUND TO LOCAL NODE-2026.
            </p>
          </div>

        </div>
      </footer>

      {/* Renders Detail Drawer/Modals dynamically */}
      <ArticleModal 
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <MovieDetailModal 
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </div>
  );
}
