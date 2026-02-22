import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIAL_ICON_MAP } from '../constants';
import { Mail } from 'lucide-react';

export default function Footer({ data }) {
  const socials = data?.social ?? [];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Branding */}
        <div>
          <span className="gradient-text footer-logo">PS</span>
          <span className="footer-copy">© {year} Pankeel Shah</span>
        </div>

        {/* Social icons */}
        <ul className="social-links footer-socials">
          {socials.map(s => {
            const Icon = SOCIAL_ICON_MAP[s.name] ?? Mail;
            return (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label} className="footer-social-icon">
                  <Icon size={15} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Back to top */}
        <div id="go-top">
          <a href="#home" title="Back to Top" className="btn btn-outline btn-back-top">
            <ArrowUp size={15} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}