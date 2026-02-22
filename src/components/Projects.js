import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeUp } from '../constants';

export default function Projects({ data }) {
  if (!data) return null;
  const { projects = [], projectsTitle } = data;

  return (
    <section id="portfolio" className="section-surface">
      <div className="blob blob-projects" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">{projectsTitle || "Things I've Built"}</h2>
        </motion.div>

        <div id="portfolio-wrapper" className="projects-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url} target="_blank" rel="noopener noreferrer"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp} custom={i}
              className="portfolio-item"
              whileHover={{ y: -5 }}
            >
              {/* Thumbnail */}
              <div className="item-wrap">
                <img
                  alt={project.title}
                  src={`images/portfolio/${project.image}`}
                  className="project-img"
                />
                <div className="overlay">
                  <ExternalLink size={30} color="#fff" />
                </div>
              </div>

              {/* Info */}
              <div className="portfolio-item-meta">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-desc">{project.category}</p>
                {project.tech?.length > 0 && (
                  <div className="tag-row">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
