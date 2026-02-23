/**
 * constants.js — Shared data and config for the portfolio.
 * Edit your personal info, stats, nav links, and social links here.
 */

import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

// ─── Navigation ────────────────────────────────────────────────
export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#resume' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
];

// ─── Hero typewriter titles ─────────────────────────────────────
export const TYPEWRITER_TITLES = [
    'Software Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'Builder of Things',
];

// ─── Hero stats row ─────────────────────────────────────────────
export const HERO_STATS = [
    { value: '5+', label: 'Years Experience' },
    { value: 'B.S.', label: 'Computer Science' },
    { value: 'Distributed', label: 'Systems' },
    { value: 'End-to-End', label: 'Engineering' },
];

// ─── Social icon map ────────────────────────────────────────────
export const SOCIAL_ICON_MAP = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    gmail: Mail,
};

// ─── Framer Motion reusable variants ───────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.4, 0, 0.2, 1],
        },
    }),
};
