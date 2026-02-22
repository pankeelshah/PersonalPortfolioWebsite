import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { fadeUp } from '../constants';

function TimelineItem({ icon: Icon, children, index }) {
  return (
    <motion.div
      className="timeline-item"
      initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp} custom={index}
    >
      {/* Icon + connecting line */}
      <div className="timeline-icon-col">
        <div className="timeline-icon">
          <Icon size={18} />
        </div>
        <div className="timeline-line" />
      </div>
      {/* Card */}
      <div style={{ paddingBottom: '8px' }}>{children}</div>
    </motion.div>
  );
}

function ExperienceCard({ title, subtitle, date, bullets = [], tech = [] }) {
  return (
    <div className="glass-card experience-card">
      <div className="experience-card-header">
        <h3 className="experience-company">{title}</h3>
        <span className="experience-date">{date}</span>
      </div>
      <p className="experience-title">{subtitle}</p>

      {bullets.length > 0 && (
        <ul className="experience-bullets">
          {bullets.map((b, i) => (
            <li key={i} className="experience-bullet">
              <span className="bullet-arrow">▸</span>
              {b}
            </li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="tag-row">
          {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
      )}
    </div>
  );
}

export default function Experience({ data }) {
  if (!data) return null;
  const { work = [], education = [] } = data;

  return (
    <section id="resume" className="section-primary">
      <div className="blob blob-experience" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Work */}
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="timeline-section">
          {work.map((job, i) => (
            <TimelineItem key={job.company} icon={Briefcase} index={i}>
              <ExperienceCard
                title={job.company}
                subtitle={job.title}
                date={job.years}
                bullets={job.bullets}
                tech={job.tech}
              />
            </TimelineItem>
          ))}
        </div>

        {/* Education */}
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="section-label">Learning</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        {education.map((edu, i) => (
          <TimelineItem key={edu.school} icon={GraduationCap} index={i}>
            <ExperienceCard
              title={edu.school}
              subtitle={edu.degree}
              date={edu.graduated}
              bullets={[edu.description]}
              tech={[]}
            />
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
