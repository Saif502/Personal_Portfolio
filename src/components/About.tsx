import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, School } from 'lucide-react'
import { aboutText, quickFacts } from '../data/data'
import { SectionShell } from './SectionShell'

const factIcons = [MapPin, Mail, Phone, School]

export function About() {
  return (
    <SectionShell id="about" title="About" subtitle="Background, focus, and career direction.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-6 text-base leading-8 text-[var(--color-text)] shadow-sm"
        >
          {aboutText}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4"
        >
          {quickFacts.map((fact, index) => {
            const Icon = factIcons[index] ?? School
            return (
              <motion.div
                key={fact.label}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--surface)] p-4"
              >
                <Icon className="mt-0.5 text-[var(--color-accent)]" size={18} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-heading)]">{fact.value}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionShell>
  )
}
