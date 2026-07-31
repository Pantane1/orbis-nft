import { ChevronRight } from 'lucide-react'

interface NFTCardProps {
  videoUrl: string
  score: string
}

export default function NFTCard({ videoUrl, score }: NFTCardProps) {
  return (
    <div className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors duration-300">
      <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="liquid-glass absolute bottom-3 left-3 right-3 rounded-[20px] px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-mono uppercase text-cream/70 text-[11px]">Rarity score:</p>
            <p className="font-mono text-cream text-[16px]">{score}</p>
          </div>
          <button
            type="button"
            aria-label="view nft"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight className="w-5 h-5 text-cream" />
          </button>
        </div>
      </div>
    </div>
  )
}
