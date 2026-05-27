import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid cinematic nodes email register.');
      return;
    }
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="my-16 md:my-24 px-6 md:px-16 max-w-[1440px] mx-auto">
      <div className="bg-[#121212] border border-white/10 p-8 md:p-12 relative overflow-hidden">
        
        {/* Glow Decorator */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-left">
            <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
              JOIN THE INNER CIRCLE
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant mt-2 max-w-lg leading-relaxed">
              Get exclusive director logs, festival passes, local premiere invitations, and weekly noir news delivered straight to your terminal inbox.
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col md:flex-row gap-4 shrink-0">
              <input 
                className="bg-[#1a1a1a] border-0 border-b-2 border-white/20 focus:border-primary focus:ring-0 text-white font-mono text-xs tracking-widest px-6 py-4 w-full md:w-80 outline-none" 
                placeholder="ENTER YOUR EMAIL" 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-primary text-black font-mono text-xs px-10 py-4 uppercase tracking-widest font-extrabold bloom-purple hover:bg-white transition-all duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-4 bg-primary/10 border border-primary/30 p-5 w-full md:w-auto">
              <CheckCircle2 className="w-6 h-6 text-primary animate-bounce" />
              <div className="text-left font-mono text-xs">
                <p className="text-primary font-bold uppercase tracking-wider">NODE INGRESS COMPLETED</p>
                <p className="text-on-surface-variant mt-0.5">Welcome to Cine21's weekly print pipeline.</p>
              </div>
              <button 
                onClick={() => setSubscribed(false)}
                className="text-white hover:text-primary underline text-xs font-mono ml-4 uppercase"
              >
                RESET
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
