import NFTCard from './NFTCard'

const NFTS = [
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
]

export default function Collection() {
  return (
    <section className="relative w-full bg-background py-16 sm:py-20 md:py-24">
      <div className="max-w-content mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.05]">
            Collection of
            <br />
            <span className="ml-12 sm:ml-24 lg:ml-32 inline-block">
              <span className="font-condiment normal-case text-neon">Space</span>{' '}
              <span className="font-grotesk">objects</span>
            </span>
          </h2>

          <button type="button" className="flex flex-col items-start group">
            <span className="flex items-baseline gap-3">
              <span className="font-grotesk uppercase text-cream text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-none">
                See
              </span>
              <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[0.95]">
                All
                <br />
                Creators
              </span>
            </span>
            <span className="bg-neon h-[6px] sm:h-[8px] lg:h-[10px] w-full mt-2 group-hover:opacity-80 transition-opacity" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFTS.map((nft) => (
            <NFTCard key={nft.videoUrl} videoUrl={nft.videoUrl} score={nft.score} />
          ))}
        </div>
      </div>
    </section>
  )
}
