import React from 'react';
import { X, Clock, User, Share2, Bookmark, Check } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/95 flex justify-center overflow-y-auto pt-16 pb-12 px-4 scroll-smooth">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="bg-black border border-white/10 w-full max-w-4xl relative z-10 m-auto p-6 md:p-12 text-left noir-bloom leading-relaxed">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-primary hover:text-white transition-colors p-2"
          aria-label="Close article"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content Section */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-primary text-black font-semibold font-mono text-xs tracking-widest uppercase">
            {article.category}
          </span>
          
          <h1 className="font-sans text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
            {article.title}
          </h1>

          <p className="font-sans text-base md:text-lg text-secondary-fixed-dim border-l-2 border-primary pl-6 py-1 italic leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/5 font-mono text-[11px] text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-primary" />
              <span>BY {article.author.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>{article.duration || '10 Min Read'}</span>
            </div>
            <div className="ml-auto flex gap-3">
              <button 
                onClick={() => alert('Article feed endpoint copied to clipboard!')}
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => alert('Article added to saved terminals cache!')}
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                title="Bookmark Article"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] w-full overflow-hidden bg-[#1a1a1a] border border-white/5">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text Content Block */}
          <div className="font-sans text-sm md:text-base text-on-surface-variant space-y-6 pt-6 tracking-wide leading-relaxed">
            {article.content ? (
              article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>No content provided for this dossier record. Dynamic feed fetch failure.</p>
            )}
          </div>

          {/* Quick interactive note */}
          <div className="bg-[#121212] p-6 border-l-4 border-primary mt-12 text-left">
            <h4 className="font-sans font-extrabold text-white text-sm mb-2 uppercase tracking-tight">EDITORIAL STATEMENT</h4>
            <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
              This publication is distributed under the Cine21 Radical Cinema license of 2026. Reserving copyright for advanced editorial insights.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={onClose}
            className="border-2 border-white/20 text-white font-mono text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-primary hover:text-black transition-all duration-300"
          >
            DISMISS DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
}
