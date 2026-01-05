export const GridBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
    <div className="absolute inset-0 opacity-20">
      <svg className="h-full w-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <ellipse cx="960" cy="540" rx="800" ry="400" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.2" />
        <ellipse cx="960" cy="540" rx="600" ry="300" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.15" />
        <ellipse cx="960" cy="540" rx="400" ry="200" fill="none" stroke="#FFD700" strokeWidth="0.3" opacity="0.1" />
      </svg>
    </div>
  </div>
)
