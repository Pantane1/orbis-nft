const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'

const DESCRIPTION =
  'A digital object fixed beyond time and place. An exploration of distance, form, and silence in space'

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 max-w-content mx-auto h-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 md:py-24 flex flex-col justify-between min-h-screen">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="relative">
            <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.05]">
              Hello!
              <br />
              I'm orbis
            </h2>
            <span
              className="font-condiment normal-case text-neon absolute bottom-0 right-0 translate-y-1/2 rotate-2 text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px]"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Orbis
            </span>
          </div>

          <p className="font-mono uppercase text-cream text-[14px] sm:text-[16px] max-w-[266px]">
            {DESCRIPTION}
          </p>
        </div>

        {/* Bottom row - decorative near-invisible text */}
        <div className="flex flex-row justify-between mt-20">
          <div className="flex flex-col gap-4">
            <p className="font-mono uppercase text-cream opacity-10 text-[14px] sm:text-[16px] max-w-[266px] max-lg:text-[#010828]">
              {DESCRIPTION}
            </p>
            <p className="font-mono uppercase text-cream opacity-10 text-[14px] sm:text-[16px] max-w-[266px] max-lg:text-[#010828]">
              {DESCRIPTION}
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <p className="font-mono uppercase text-cream opacity-10 text-[14px] sm:text-[16px] max-w-[266px]">
              {DESCRIPTION}
            </p>
            <p className="font-mono uppercase text-cream opacity-10 text-[14px] sm:text-[16px] max-w-[266px]">
              {DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
