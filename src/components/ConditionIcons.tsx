import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  active?: boolean;
}

// 1. Pain Management: Patient on medical bed/table with medical treatment graphic
export function PainManagementIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#2dd4bf";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Medical treatment bed / couch */}
      <path d="M15 65H85V70H15V65Z" fill={mainColor} />
      <path d="M22 70V80H17V70H22ZM83 70V80H78V70H83Z" fill={mainColor} />
      {/* Bed incline/headrest */}
      <path d="M15 65L28 45H38L25 65H15Z" fill={mainColor} opacity="0.8" />
      {/* Patient silhouette reclining */}
      <circle cx="28" cy="38" r="7" fill={mainColor} />
      <path d="M28 46C34 46 45 53 58 55H78V62H28V46Z" fill={mainColor} />
      <path d="M74 55L82 60V65H72L65 58H74Z" fill={mainColor} />
      {/* Pain treatment / pulse wave above lumbar */}
      <path d="M42 35C45 32 48 32 50 35C52 38 55 38 58 35" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="27" r="3" fill={accentColor} />
      <path d="M45 25L50 20L55 25" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 2. Back Pain: Upper body silhouette from back with highlighted spine vertebrae and pain rays
export function BackPainIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Head & Neck */}
      <circle cx="50" cy="18" r="8" fill={mainColor} />
      <path d="M46 25H54V30H46V25Z" fill={mainColor} />
      {/* Shoulders & Back Torso */}
      <path d="M25 35C30 30 40 30 50 30C60 30 70 30 75 35L70 65C70 70 60 75 50 75C40 75 30 70 30 65L25 35Z" fill={mainColor} />
      {/* Hands on waist silhouette */}
      <path d="M25 35L18 45L22 55L28 50" fill={mainColor} />
      <path d="M75 35L82 45L78 55L72 50" fill={mainColor} />
      {/* Spine line with vertebrae */}
      <line x1="50" y1="32" x2="50" y2="72" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="3" strokeDasharray="3 2" />
      {/* Vertebrae nodes */}
      <circle cx="50" cy="38" r="2.5" fill={active ? "#17a2b8" : "#2dd4bf"} />
      <circle cx="50" cy="46" r="2.5" fill={active ? "#17a2b8" : "#2dd4bf"} />
      <circle cx="50" cy="54" r="2.5" fill={active ? "#17a2b8" : "#2dd4bf"} />
      <circle cx="50" cy="62" r="2.5" fill={active ? "#17a2b8" : "#2dd4bf"} />
      {/* Radiating pain sparks on sides of spine */}
      <path d="M38 42L32 40M37 50L30 50M38 58L32 60" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M62 42L68 40M63 50L70 50M62 58L68 60" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 3. Lower Back Pain: Torso with hands on lower back and lower lumbar pain radiating
export function LowerBackPainIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Head */}
      <circle cx="50" cy="16" r="8" fill={mainColor} />
      {/* Neck & Shoulders */}
      <path d="M46 23H54V28H46V23Z" fill={mainColor} />
      <path d="M28 32C35 28 45 28 50 28C55 28 65 28 72 32L68 60H32L28 32Z" fill={mainColor} />
      {/* Arms bending back around waist to touch lower back */}
      <path d="M28 32L20 46L32 54L38 48" fill={mainColor} />
      <path d="M72 32L80 46L68 54L62 48" fill={mainColor} />
      {/* Lower back lumbar highlight */}
      <circle cx="50" cy="52" r="7" fill={accentColor} opacity="0.9" />
      {/* Radiating red/accent pain lines */}
      <path d="M40 44L34 40M38 58L32 62M60 44L66 40M62 58L68 62" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 40V34M50 64V70" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 4. Neck Pain: Side profile head & neck silhouette with pain radiating at back of neck
export function NeckPainIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Head profile facing left */}
      <path d="M55 15C42 15 35 24 35 34C35 38 37 42 37 45C35 46 32 47 33 50C34 52 38 52 40 54C42 56 42 60 48 62C52 63 56 63 58 63" fill={mainColor} />
      {/* Neck & Shoulder silhouette */}
      <path d="M58 63L65 65L75 75V82H38V76L46 63L58 63Z" fill={mainColor} />
      <path d="M55 15C65 15 72 23 72 35V52L65 65H58L58 48C58 40 58 30 55 15Z" fill={mainColor} />
      {/* Neck pain target & radiating waves at back of neck */}
      <circle cx="63" cy="46" r="4" fill={accentColor} />
      <path d="M72 40C76 43 78 48 76 53" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M78 35C84 40 86 50 82 58" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M53 46H58" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" />
    </svg>
  );
}

// 5. Headaches: Front head silhouette with radiating pain waves around forehead & scalp
export function HeadachesIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Head front silhouette */}
      <path d="M32 45C32 30 40 22 50 22C60 22 68 30 68 45C68 55 64 63 60 67C56 71 54 75 54 78H46C46 75 44 71 40 67C36 63 32 55 32 45Z" fill={mainColor} />
      {/* Neck & Collar */}
      <path d="M44 78H56V88H44V78Z" fill={mainColor} />
      {/* Expression / face details (subtle negative space) */}
      <path d="M40 48C42 46 45 46 47 48" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      <path d="M53 48C55 46 58 46 60 48" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      <path d="M46 60C48 62 52 62 54 60" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      {/* Radiating headache spark arcs around head */}
      <path d="M24 28C28 22 34 18 42 16" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M76 28C72 22 66 18 58 16" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 42C20 35 22 30 26 24" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 42C80 35 78 30 74 24" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 10L50 4L52 10" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 6. Sciatica: Body posture leaning forward with sciatic nerve line down lower back and leg
export function SciaticaIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Head */}
      <circle cx="42" cy="18" r="7" fill={mainColor} />
      {/* Torso leaning slightly right */}
      <path d="M40 24L52 32L46 54L34 50L40 24Z" fill={mainColor} />
      {/* Arms touching lumbar */}
      <path d="M38 27L28 35L36 44" fill={mainColor} />
      {/* Hips & Legs */}
      <path d="M34 50L46 54L42 82H34L34 50Z" fill={mainColor} />
      <path d="M46 54L56 50L58 82H50L46 54Z" fill={mainColor} opacity="0.8" />
      {/* Feet on ground */}
      <path d="M30 82H44V86H30V82ZM48 82H62V86H48V82Z" fill={mainColor} />
      <line x1="20" y1="86" x2="80" y2="86" stroke={active ? "#17a2b8" : "#cbd5e1"} strokeWidth="2" />
      {/* Sciatic nerve pathway line (from lower back down leg) */}
      <path d="M48 42C48 48 42 58 40 76" stroke={accentColor} strokeWidth="3" strokeDasharray="3 2" strokeLinecap="round" />
      {/* Pain spark nodes */}
      <circle cx="48" cy="42" r="3" fill={accentColor} />
      <circle cx="44" cy="56" r="2.5" fill={accentColor} />
      <circle cx="40" cy="72" r="2.5" fill={accentColor} />
    </svg>
  );
}

// 7. Neuropathy: Foot silhouette with nerve pain sparks around toes and sole
export function NeuropathyIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Lower leg & ankle */}
      <path d="M35 15H48L46 45L62 48C70 50 78 52 82 58C85 62 82 68 76 70C68 72 52 72 38 72C28 72 22 66 22 55V45L35 15Z" fill={mainColor} />
      {/* Arch & Toes detail */}
      <path d="M76 70C82 69 86 64 84 59C82 55 76 52 68 50" fill={mainColor} />
      {/* Radiating nerve pain sparks around foot & toes */}
      <path d="M84 48L90 42M88 58L95 56M82 66L88 72" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M68 76L72 82M52 76L52 83M36 76L32 82" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="85" cy="50" r="2" fill={accentColor} />
      <circle cx="70" cy="74" r="2" fill={accentColor} />
      <circle cx="50" cy="74" r="2" fill={accentColor} />
    </svg>
  );
}

// 8. Leg Pain: Leg silhouette (thigh, knee, calf) with pain sparks on calf/shin
export function LegPainIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Thigh to Foot silhouette */}
      <path d="M42 12H58L56 38C58 44 58 50 54 58L52 78L62 82V88H34V82L42 78L44 58C42 50 40 44 42 38L42 12Z" fill={mainColor} />
      {/* Knee highlight line */}
      <path d="M44 44C48 42 52 42 55 44" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      {/* Radiating leg pain sparks at calf / shin area */}
      <path d="M34 56L26 54M33 66L24 68M35 74L28 78" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 56L68 54M61 66L70 68M59 74L66 78" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 9. Face Pain: Face profile/front with trigeminal/facial nerve pain sparks on cheek/jaw
export function FacePainIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Head silhouette */}
      <path d="M32 42C32 28 40 20 50 20C60 20 68 28 68 42C68 54 64 62 60 66C56 70 54 74 54 78H46C46 74 44 70 40 66C36 62 32 54 32 42Z" fill={mainColor} />
      {/* Neck */}
      <path d="M45 78H55V88H45V78Z" fill={mainColor} />
      {/* Facial features */}
      <path d="M40 44C42 42 45 42 47 44" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      <path d="M53 44C55 42 58 42 60 44" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      <path d="M50 45V54L53 56" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 62C48 64 52 64 55 62" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" strokeLinecap="round" />
      {/* Radiating face pain sparks over cheek & jaw */}
      <path d="M64 48L72 46M66 58L74 60M60 66L66 72" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="64" cy="52" r="3" fill={accentColor} />
      <path d="M64 52L72 52" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
}

// 10. Knee Pain: Leg bending with joint knee cap and pain sparks around knee
export function KneePainIcon({ className = "w-16 h-16", active = false, ...props }: IconProps) {
  const mainColor = active ? "#FFFFFF" : "#bae6fd";
  const accentColor = active ? "#E0F2FE" : "#fb7185";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Thigh down to Knee bending to Shin */}
      <path d="M35 15H50L58 45L48 80H34L42 48L35 15Z" fill={mainColor} />
      {/* Calf & Foot extension */}
      <path d="M58 45L68 78H54L48 48L58 45Z" fill={mainColor} opacity="0.9" />
      {/* Patella / Knee Joint line */}
      <circle cx="50" cy="45" r="5" stroke={active ? "#17a2b8" : "#2dd4bf"} strokeWidth="2" fill="none" />
      {/* Radiating pain sparks around knee joint */}
      <path d="M38 42L30 38M36 50L28 52M44 34L42 26" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 38L68 34M62 48L70 52M56 35L60 28" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="40" r="2" fill={accentColor} />
      <circle cx="62" cy="44" r="2" fill={accentColor} />
    </svg>
  );
}

