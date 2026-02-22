import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { NAV_LINKS, TYPEWRITER_TITLES, HERO_STATS, SOCIAL_ICON_MAP } from '../constants';

export default function Header({ data }) {
   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
   const [titleIndex, setTitleIndex] = useState(0);
   const [displayed, setDisplayed] = useState('');
   const [typing, setTyping] = useState(true);

   // ── Sticky nav shadow ──────────────────────────────────────────
   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   // ── Typewriter effect ──────────────────────────────────────────
   useEffect(() => {
      const full = TYPEWRITER_TITLES[titleIndex];
      let t;
      if (typing) {
         t = displayed.length < full.length
            ? setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 75)
            : setTimeout(() => setTyping(false), 2000);
      } else {
         t = displayed.length > 0
            ? setTimeout(() => setDisplayed(s => s.slice(0, -1)), 40)
            : (() => { setTitleIndex(i => (i + 1) % TYPEWRITER_TITLES.length); setTyping(true); })();
      }
      return () => clearTimeout(t);
   }, [displayed, typing, titleIndex]);

   const name = data?.name ?? 'Pankeel Shah';
   const description = data?.description ?? '';
   const resumeDownload = data?.resumedownload ?? '#';
   const socials = data?.social ?? [];

   return (
      <>
         {/* ── Navigation ───────────────────────────────────────────── */}
         <nav id="nav-wrap" style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            height: '68px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 clamp(20px, 4vw, 48px)',
            transition: 'background 0.3s, border-color 0.3s',
            background: scrolled ? 'rgba(11,13,26,0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
         }}>
            <a href="#home" className="gradient-text"
               style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em' }}>
               PS
            </a>

            {/* Desktop nav */}
            <ul className="nav-desktop-list" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
               {NAV_LINKS.map(link => (
                  <li key={link.href}>
                     <a href={link.href} className="nav-link">{link.label}</a>
                  </li>
               ))}
               <li>
                  <a href={resumeDownload} target="_blank" rel="noopener noreferrer"
                     className="btn btn-outline" style={{ padding: '8px 18px', fontSize: '13px' }}>
                     <Download size={14} /> Resume
                  </a>
               </li>
            </ul>

            {/* Hamburger */}
            <button className="mobile-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
               style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}>
               {[0, 1, 2].map(i => (
                  <span key={i} style={{
                     display: 'block', width: '22px', height: '2px',
                     background: 'var(--text-primary)', borderRadius: '2px',
                  }} />
               ))}
            </button>
         </nav>

         {/* Mobile menu */}
         {menuOpen && (
            <div className="mobile-menu">
               {NAV_LINKS.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                     style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-muted)' }}>
                     {link.label}
                  </a>
               ))}
               <a href={resumeDownload} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  <Download size={14} /> Resume
               </a>
            </div>
         )}

         {/* ── Hero ─────────────────────────────────────────────────── */}
         <header id="home" className="hero">
            <div className="blob blob-hero-1" />
            <div className="blob blob-hero-2" />
            <div className="hero-grid" aria-hidden="true" />

            <div className="container hero-content">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
               >
                  {/* Availability badge */}
                  <div className="availability-badge">
                     <span className="badge-dot" />
                     <span>Available for new opportunities</span>
                  </div>

                  {/* Name */}
                  <h1 className="hero-name responsive-headline">
                     Hi, I'm{' '}
                     <span className="gradient-text">{name.split(' ')[0]}</span>
                     {' '}<span>{name.split(' ').slice(1).join(' ')}</span>
                  </h1>

                  {/* Typewriter */}
                  <div className="hero-typewriter">
                     <span>{displayed}</span>
                     <span className="cursor" />
                  </div>

                  {/* Tagline */}
                  <p className="hero-tagline">{description}</p>

                  {/* CTAs */}
                  <div className="hero-ctas">
                     <a href="#portfolio" className="btn btn-primary">
                        View My Work <ArrowRight size={16} />
                     </a>
                     <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <Download size={16} /> Download Resume
                     </a>
                  </div>

                  {/* Social icons */}
                  <div className="hero-socials">
                     {socials.map(s => {
                        const Icon = SOCIAL_ICON_MAP[s.name] ?? SOCIAL_ICON_MAP.gmail;
                        return (
                           <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                              aria-label={s.label} className="social-icon-btn">
                              <Icon size={17} />
                           </a>
                        );
                     })}
                  </div>

                  {/* Stats */}
                  <div className="hero-stats">
                     {HERO_STATS.map((stat, i) => (
                        <motion.div key={stat.label} className="hero-stat"
                           initial={{ opacity: 0, y: 12 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}>
                           <div className="gradient-text hero-stat-value">{stat.value}</div>
                           <div className="hero-stat-label">{stat.label}</div>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* Scroll hint */}
            <a href="#about" className="scroll-hint">
               <span>Scroll</span>
               <span>↓</span>
            </a>
         </header>
      </>
   );
}