import { motion } from 'framer-motion'
import { achievementItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function Achievements() {
  return (
    <SectionShell
      id="achievements"
      title="Programming & Achievements"
      subtitle="Performance highlights from competitive programming and contests."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievementItems.map((achievement, index) => (
          <motion.article
            key={achievement.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 text-center shadow-sm"
          >
            <p className="text-3xl font-semibold tracking-tight text-[var(--color-heading)]">{achievement.value}</p>
            <p className="mt-2 text-sm font-medium text-[var(--color-text)]">{achievement.label}</p>
            {achievement.link ? (
              <a
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-[var(--color-accent)]"
              >
                View Profile
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
