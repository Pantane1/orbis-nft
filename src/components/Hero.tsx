import { SocialIconsStack, SocialIconsRow } from './SocialIcons'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'

const NAV_LINKS = ['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact']

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden rounded-b-[32px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 max-w-content mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between pt-8 lg:pt-12">
          <span className="font-grotesk text-[16px] uppercase text-cream">Orbis.Nft</span>

          <nav className="liquid-glass hidden lg:block rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialIconsStack className="hidden lg:flex" />
        </header>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative max-w-[780px] lg:ml-32">
            <h1 className="font-grotesk uppercase text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] md:leading-[1]">
              Beyond earth
              <br />
              and ( its ) familiar boundaries
            </h1>
            <span
              className="font-condiment normal-case text-neon opacity-90 absolute -right-4 sm:right-0 top-1/3 -rotate-1 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Nft collection
            </span>
          </div>

          <SocialIconsRow className="lg:hidden mt-10" />
        </div>
      </div>
    </section>
  )
}
