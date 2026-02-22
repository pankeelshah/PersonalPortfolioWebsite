import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { fadeUp } from '../constants';

export default function About({ data }) {
   if (!data) return null;

   const { image, bio, bio2, bio3, resumedownload, skills = [] } = data;
   const profilepic = image ? `images/${image}` : null;

   return (
      <section id="about" className="section-surface">
         <div className="blob blob-about" />

         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="about-grid">
               {/* ── Left: Avatar + skills ── */}
               <motion.div
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp} custom={0}
               >
                  {/* Avatar with gradient ring */}
                  <div className="avatar-wrapper">
                     <div className="avatar-ring" />
                     <div className="avatar-img-box">
                        {profilepic && (
                           <img
                              className="profile-pic"
                              src={profilepic}
                              alt="Pankeel Shah"
                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                           />
                        )}
                        {/* Initials shown if no image */}
                        {!profilepic && (
                           <div className="avatar-initials">
                              <span className="gradient-text">PS</span>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* Tech Stack */}
                  <p className="skills-label">Tech Stack</p>
                  <div className="skills-grid">
                     {skills.map(skill => (
                        <span key={skill.name} className="skill-badge">
                           <span className="skill-dot" style={{ background: skill.color }} />
                           {skill.name}
                        </span>
                     ))}
                  </div>
               </motion.div>

               {/* ── Right: Bio ── */}
               <motion.div
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp} custom={1}
               >
                  <p className="section-label">Get to Know Me</p>
                  <h2 className="section-title">About Me</h2>

                  <p className="about-intro">{bio}</p>
                  <p className="about-body">{bio2}</p>
                  <p className="about-body" style={{ marginBottom: '36px' }}>{bio3}</p>

                  <a href={resumedownload} target="_blank" rel="noopener noreferrer"
                     className="btn btn-primary" style={{ display: 'inline-flex' }}>
                     <Download size={16} />
                     Download Resume
                  </a>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
