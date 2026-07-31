import { Mail, Twitter, Github } from 'lucide-react'

interface SocialIconsProps {
  className?: string
}

/** Vertical stack of square liquid-glass icon buttons, used in the hero (desktop + mobile). */
export function SocialIconsStack({ className = '' }: SocialIconsProps) {
  const icons = [Mail, Twitter, Github]
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {icons.map((Icon, i) => (
        <button
          key={i}
          type="button"
          aria-label="social link"
          className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
        >
          <Icon className="w-5 h-5 text-cream" />
        </button>
      ))}
    </div>
  )
}

interface SocialIconsRowProps {
  className?: string
}

/** Mobile variant: same 3 buttons, centered horizontally. */
export function SocialIconsRow({ className = '' }: SocialIconsRowProps) {
  const icons = [Mail, Twitter, Github]
  return (
    <div className={`flex flex-row gap-3 justify-center ${className}`}>
      {icons.map((Icon, i) => (
        <button
          key={i}
          type="button"
          aria-label="social link"
          className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
        >
          <Icon className="w-5 h-5 text-cream" />
        </button>
      ))}
    </div>
  )
}

/**
 * Vertical liquid-glass panel of 3 full-width icon rows, used bottom-left of the CTA section.
 * Uses responsive viewport/rem widths per the design spec.
 */
export function SocialIconsPanel() {
  const icons = [Mail, Twitter, Github]
  return (
    <div className="liquid-glass flex flex-col rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1.25rem] overflow-hidden">
      {icons.map((Icon, i) => (
        <button
          key={i}
          type="button"
          aria-label="social link"
          className={`w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[3.5rem] md:h-[3rem] lg:h-[4rem] flex items-center justify-center hover:bg-white/10 transition-colors duration-300 ${
            i !== icons.length - 1 ? 'border-b border-white/10' : ''
          }`}
        >
          <Icon className="w-5 h-5 text-cream" />
        </button>
      ))}
    </div>
  )
}
