import { SocialIconsPanel } from './SocialIcons'

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

export default function CTA() {
  return (
    <section className="relative w-full">
      <video className="block w-full h-auto" src={CTA_VIDEO} autoPlay loop muted playsInline />

      {/* Text content */}
      <div className="absolute inset-0">
        <div className="relative h-full max-w-content mx-auto">
          <div className="absolute top-[10%] right-0 lg:pr-[20%] lg:pl-[15%] text-right">
            <div className="relative inline-block">
              <span
                className="font-condiment normal-case text-neon absolute -top-6 sm:-top-10 md:-top-14 left-0 text-[17px] sm:text-[36px] md:text-[52px] lg:text-[68px]"
                style={{ mixBlendMode: 'exclusion' }}
              >
                Go beyond
              </span>
              <h2 className="font-grotesk uppercase text-cream text-[16px] sm:text-[28px] md:text-[42px] lg:text-[60px] leading-[1.1]">
                <span className="block mb-4 sm:mb-8 lg:mb-12">Join us.</span>
                <span className="block">Reveal what's hidden.</span>
                <span className="block">Define what's next.</span>
                <span className="block">Follow the signal.</span>
              </h2>
            </div>
          </div>

          <div className="absolute left-[8%] bottom-[12%] sm:bottom-[16%] lg:bottom-[20%]">
            <SocialIconsPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
