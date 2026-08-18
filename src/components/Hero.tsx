import { motion, useReducedMotion } from 'framer-motion'
import { BrainCircuit, Code2, FlaskConical, GraduationCap, Mail } from 'lucide-react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { contactInfo, siteConfig } from '../data/data'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const currentRole = siteConfig.roles[roleIndex]
    const speed = deleting ? 45 : 90

    const timer = window.setTimeout(() => {
      if (!deleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1))
        return
      }

      if (deleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1))
        return
      }

      if (!deleting) {
        window.setTimeout(() => setDeleting(true), 900)
      } else {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % siteConfig.roles.length)
      }
    }, speed)

    return () => window.clearTimeout(timer)
  }, [deleting, roleIndex, typedText])

  return (
    <section id="home" className="relative px-4 pb-18 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(42,123,155,0.22),_transparent_65%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Professional Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 min-h-8 text-lg font-medium text-[var(--color-text)] sm:text-xl">
            {typedText}
            <span className="ml-1 inline-block h-6 w-[2px] animate-caret bg-[var(--color-accent)] align-middle" />
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text)]">
            {siteConfig.professionalSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.cvPath}
              className="rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto"
        >
          <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
            <motion.div
              className="absolute inset-[-10px] rounded-full border border-[rgba(42,123,155,0.3)] bg-[rgba(42,123,155,0.08)] sm:inset-[-14px]"
              animate={
                prefersReducedMotion
                  ? { opacity: 0.9 }
                  : { rotate: [0, 5, 0], scale: [1, 1.02, 1], opacity: [0.82, 1, 0.82] }
              }
              transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
            />

            <span className="pointer-events-none absolute -left-4 top-4 h-4 w-4 rounded-full border border-[rgba(42,123,155,0.32)] sm:-left-5 sm:top-7 sm:h-5 sm:w-5" />
            <span className="pointer-events-none absolute -bottom-3 right-2 h-3 w-3 rounded-full border border-[rgba(27,58,107,0.3)] sm:h-4 sm:w-4" />
            <span className="pointer-events-none absolute -right-4 top-12 hidden h-3 w-3 rounded-full border border-[rgba(42,123,155,0.28)] sm:block" />

            <motion.div
              className="absolute -right-3 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.36)] bg-[var(--color-accent)] text-white shadow-[0_12px_24px_rgba(42,123,155,0.35)] sm:-right-4 sm:top-6 sm:h-11 sm:w-11"
              animate={prefersReducedMotion ? undefined : { y: [0, -7, 0, 4, 0] }}
              transition={{ duration: 6.8, ease: 'easeInOut', repeat: Infinity, delay: 0.1 }}
            >
              <BrainCircuit size={16} />
            </motion.div>

            <motion.div
              className="absolute -left-3 bottom-8 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.28)] bg-[var(--color-primary)] text-white shadow-[0_12px_24px_rgba(27,58,107,0.35)] sm:-left-5 sm:bottom-10 sm:h-11 sm:w-11"
              animate={prefersReducedMotion ? undefined : { y: [0, 5, 0, -6, 0] }}
              transition={{ duration: 7.4, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
            >
              <FlaskConical size={15} />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 right-10 z-20 hidden h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(42,123,155,0.9)] text-white shadow-[0_10px_22px_rgba(42,123,155,0.35)] sm:flex"
              animate={prefersReducedMotion ? undefined : { y: [0, -5, 0, 4, 0] }}
              transition={{ duration: 8.1, ease: 'easeInOut', repeat: Infinity, delay: 0.65 }}
            >
              <Code2 size={14} />
            </motion.div>

            <motion.div
              className="absolute -top-2 left-10 z-20 hidden h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(27,58,107,0.9)] text-white shadow-[0_10px_22px_rgba(27,58,107,0.35)] sm:flex"
              animate={prefersReducedMotion ? undefined : { y: [0, 4, 0, -5, 0] }}
              transition={{ duration: 7.9, ease: 'easeInOut', repeat: Infinity, delay: 0.95 }}
            >
              <GraduationCap size={14} />
            </motion.div>

            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-[rgba(15,33,63,0.15)] bg-[linear-gradient(145deg,#f8fbff,#edf4ff)] p-2 shadow-[0_20px_60px_rgba(20,34,57,0.2)]">
              <div className="h-full w-full overflow-hidden rounded-full border border-[rgba(27,58,107,0.12)] bg-white">
                {siteConfig.profileImage ? (
                  <img
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-5xl font-semibold tracking-wide text-[var(--color-heading)]">
                    {siteConfig.initials}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
