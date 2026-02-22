import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SOCIAL_ICON_MAP, fadeUp } from '../constants';

export default function Contact({ data }) {
  if (!data) return null;
  const { contactTitle, contactMessage, social = [] } = data;

  return (
    <section id="contact" className="section-primary contact-section">
      <div className="blob blob-contact" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</p>
          <h2 className="section-title">{contactTitle}</h2>
          <p className="contact-message">{contactMessage}</p>
        </motion.div>

        {/* Social link buttons */}
        <motion.div className="contact-socials"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }} variants={fadeUp} custom={1}>
          {social.map((s, i) => {
            const Icon = SOCIAL_ICON_MAP[s.name] ?? Mail;
            return (
              <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                aria-label={s.label} variants={fadeUp} custom={i}
                className="contact-social-btn"
                whileHover={{ y: -4, scale: 1.02 }}>
                <Icon size={17} />
                {s.label}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Primary email CTA */}
        <motion.div style={{ textAlign: 'center', marginTop: '40px' }}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }} variants={fadeUp} custom={2}>
          <a href="mailto:shahx317@umn.edu" className="btn btn-primary"
            style={{ display: 'inline-flex', fontSize: '15px', padding: '14px 32px' }}>
            <Mail size={17} /> Say Hello 👋
          </a>
        </motion.div>
      </div>
    </section>
  );
}