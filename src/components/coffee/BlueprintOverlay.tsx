import { CoffeeProfile } from '../../data/coffeeProfiles';

export default function BlueprintOverlay({ profile }: { profile: CoffeeProfile }) {
  return (
    <div className="relative w-full min-h-[300vh]">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,26,48,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,26,48,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* SVG drawing layer */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <line
          className="blueprint-line-length"
          x1="10" y1="20" x2="90" y2="20"
          stroke="#111a30" strokeWidth="0.3"
          strokeDasharray="1000" strokeDashoffset="1000"
        />
        <path
          className="blueprint-line-wingspan"
          d="M10 40 L40 50 M60 50 L90 40"
          stroke="#111a30" strokeWidth="0.3" fill="none"
          strokeDasharray="1000" strokeDashoffset="1000"
        />
        <circle
          className="blueprint-circle"
          cx="50" cy="70" r="15"
          stroke="#111a30" strokeWidth="0.3" fill="none"
          strokeDasharray="1000" strokeDashoffset="1000"
        />
      </svg>

      {/* The HTML info boxes */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center text-center p-8 bp-facts">
        <h2 className="font-playfair text-6xl md:text-[100px] leading-[0.85] mb-4 text-royal-red">THE ANATOMY</h2>
        <p className="font-lora text-xl md:text-2xl font-medium text-royal-navy/80">Technical specifications of {profile.name}</p>
      </div>

      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-start p-10 md:p-24 bp-origin">
        <h2 className="font-playfair text-5xl md:text-[80px] leading-[0.85] mb-4 text-royal-navy">Origin & Species</h2>
        <p className="font-lora text-xl md:text-2xl font-medium text-royal-navy/70 mb-8 tracking-widest">
          {profile.origin} / {profile.species}
        </p>
      </div>

      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-end p-10 md:p-24 bp-regions text-right">
        <h2 className="font-playfair text-5xl md:text-[80px] leading-[0.85] mb-4 text-royal-navy">Growing Regions</h2>
        <p className="font-lora text-xl md:text-2xl font-medium text-royal-navy/70 max-w-sm tracking-widest">
          {profile.regions.join(', ')}
        </p>
      </div>
      
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-start p-10 md:p-24 bp-cup">
        <h2 className="font-playfair text-5xl md:text-[80px] leading-[0.85] mb-6 text-royal-navy">Cup Character</h2>
        <ul className="font-lora text-xl md:text-2xl font-medium text-royal-navy/80 list-none tracking-widest">
          {profile.cupProfile.map((note, idx) => (
            <li key={idx} className="mb-4 uppercase">— {note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
