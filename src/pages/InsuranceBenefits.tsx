import { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Phone, Mail, CheckCircle, CreditCard, Heart, HelpCircle, ClipboardCheck, Umbrella, CircleDollarSign, HeartPulse, Stethoscope, Home, ChevronLeft, ChevronRight, Sparkles, Plus } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../components/SEO';

const insurers = [
  { name: 'Aetna', detail: 'Including Aetna Better Health and Aetna Healthcare' },
  { name: 'Blue Cross Blue Shield (BCBS)', detail: 'PPO, HMO, & POS Plans Accepted' },
  { name: 'Cigna', detail: 'PPO, HMO, & Medicare Advantage' },
  { name: 'Humana', detail: 'PPO, HMO, & Choice Care' },
  { name: 'UnitedHealthcare (UHC)', detail: 'HMO, PPO, EPO, & Medicare' },
  { name: 'Medicare & Medicare Advantage', detail: 'All qualifying Part B & Supplemental' },
  { name: 'Tricare', detail: 'Military & Veterans Healthcare Coverage' },
];

const insuranceImages = [
  { src: '/insurance1.webp', alt: 'Aetna Insurance' },
  { src: '/insurance2.webp', alt: 'Blue Cross Blue Shield' },
  { src: '/insurance3.webp', alt: 'Cigna Insurance' },
  { src: '/insurance5.webp', alt: 'Humana Insurance' },
  { src: '/insurance6.webp', alt: 'UnitedHealthcare' },
  { src: '/insurance9.webp', alt: 'Galaxy Health Insurance' },
  { src: '/insurance14.webp', alt: 'First Health Network' },
  { src: '/insurance16.webp', alt: 'Coventry Health Care' },
  { src: '/insurance18.webp', alt: 'Medicare Coverage' },
  { src: '/insurance20.webp', alt: 'Tricare Insurance' },
  { src: '/insurance21.webp', alt: 'Additional Insurance Partner' },
];

const guidanceItems = [
  { 
    id: 0,
    icon: Umbrella, 
    title: 'Comprehensive Coverage', 
    desc: 'Represents the wide range of insurance plans accepted to ensure accessibility.', 
    color: 'from-blue-600 to-indigo-700',
    accentColor: '#2563eb'
  },
  { 
    id: 1,
    icon: ClipboardCheck, 
    title: 'Verification Process', 
    desc: 'Details the steps patients should take to confirm their insurance coverage.', 
    color: 'from-sky-500 to-teal-600',
    accentColor: '#0284c7'
  },
  { 
    id: 2,
    icon: CircleDollarSign, 
    title: 'Financial Assistance', 
    desc: 'Highlights the availability of payment plans and financial help for patients.', 
    color: 'from-teal-500 to-emerald-600',
    accentColor: '#0d9488'
  },
  { 
    id: 3,
    icon: HeartPulse, 
    title: 'Medicare Coverage', 
    desc: 'Describes the specific services covered under Medicare for pain management.', 
    color: 'from-emerald-500 to-teal-700',
    accentColor: '#10b981'
  },
  { 
    id: 4,
    icon: Stethoscope, 
    title: 'Holistic Approach', 
    desc: "Emphasizes the institute's comprehensive and effective pain management strategies.", 
    color: 'from-teal-600 to-[#0b192b]',
    accentColor: '#0f766e'
  },
];

export function InsuranceBenefits() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeGuidance, setActiveGuidance] = useState(2); // Default to center "Financial Assistance"
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const activeItem = guidanceItems[activeGuidance];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <SEO 
        title="Insurance & Billing Dallas | Accepted Health Plans"
        description="We accept Medicare, BCBS, Aetna, Cigna, UnitedHealthcare, and more. Transparent billing and insurance verification at Spine & Pain Institute of Texas."
        canonical="/insurance-benefits"
      />

      {/* Editorial Subpage 3D Animated Hero Header */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        
        {/* Animated Ambient Glow & Grid Backdrop */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/95 to-teal-950/40 transition-transform duration-300"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Insurance Benefits</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Accessible In-Network Healthcare</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4 leading-tight">
            Insurance Benefits at Spine &amp; Pain Institute of Texas
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            We work with major insurance providers and Medicare to make expert, double board-certified spine care accessible to everyone in Dallas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#appointment" 
              className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify My Insurance</span>
            </a>

            <a 
              href="tel:4693130040" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider backdrop-blur-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-300" /> 
              <span>Call (469) 313-0040</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── LUXURY INTERACTIVE 3D RADIAL SEMI-CIRCLE DIAGRAM SECTION ─── */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/70 relative overflow-hidden">
        
        {/* Ambient Radial Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">
              Spine &amp; Pain Institute of Texas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              Insurance Benefits and Guidance
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              At Spine &amp; Pain Institute of Texas, we understand that managing your pain should not be complicated by concerns about insurance coverage. We strive to make quality spine and interventional care as seamless and accessible as possible.
            </p>
          </div>

          {/* 3D Semi-Circular Radial Interactive Composition */}
          <div className="max-w-5xl mx-auto">
            
            {/* 5 Surrounding Feature Cards & Semi-Circle Arc Wheel Container */}
            <div className="flex flex-col items-center">
              
              {/* SVG 3D Semi-Circular Arc Wheel */}
              <div className="relative w-full max-w-2xl h-[280px] sm:h-[340px] flex items-end justify-center my-4">
                
                {/* SVG Semi-Circle Arch Wedges */}
                <svg viewBox="0 0 400 220" className="w-full h-full drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="arcGrad0" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e3a8a" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="arcGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="arcGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#2dd4bf" />
                    </linearGradient>
                    <linearGradient id="arcGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                    <linearGradient id="arcGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0f766e" />
                      <stop offset="100%" stopColor="#0b192b" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 5 Semi-Circle Arc Segments */}
                  {/* Outer Radius 180, Inner Radius 90, Center (200, 200) */}
                  {/* Segment 0: 180° to 144° */}
                  <path
                    d="M 20 200 A 180 180 0 0 1 54.2 94.2 L 127.1 147.1 A 90 90 0 0 0 110 200 Z"
                    fill="url(#arcGrad0)"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className={`cursor-pointer transition-all duration-300 hover:opacity-90 ${activeGuidance === 0 ? 'filter drop-shadow-lg scale-105' : 'opacity-85'}`}
                    onClick={() => setActiveGuidance(0)}
                    onMouseEnter={() => setActiveGuidance(0)}
                  />
                  
                  {/* Segment 1: 144° to 108° */}
                  <path
                    d="M 54.2 94.2 A 180 180 0 0 1 144.4 28.9 L 172.2 114.4 A 90 90 0 0 0 127.1 147.1 Z"
                    fill="url(#arcGrad1)"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className={`cursor-pointer transition-all duration-300 hover:opacity-90 ${activeGuidance === 1 ? 'filter drop-shadow-lg scale-105' : 'opacity-85'}`}
                    onClick={() => setActiveGuidance(1)}
                    onMouseEnter={() => setActiveGuidance(1)}
                  />

                  {/* Segment 2: 108° to 72° (Top Center) */}
                  <path
                    d="M 144.4 28.9 A 180 180 0 0 1 255.6 28.9 L 227.8 114.4 A 90 90 0 0 0 172.2 114.4 Z"
                    fill="url(#arcGrad2)"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className={`cursor-pointer transition-all duration-300 hover:opacity-90 ${activeGuidance === 2 ? 'filter drop-shadow-lg scale-105' : 'opacity-85'}`}
                    onClick={() => setActiveGuidance(2)}
                    onMouseEnter={() => setActiveGuidance(2)}
                  />

                  {/* Segment 3: 72° to 36° */}
                  <path
                    d="M 255.6 28.9 A 180 180 0 0 1 345.8 94.2 L 272.9 147.1 A 90 90 0 0 0 227.8 114.4 Z"
                    fill="url(#arcGrad3)"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className={`cursor-pointer transition-all duration-300 hover:opacity-90 ${activeGuidance === 3 ? 'filter drop-shadow-lg scale-105' : 'opacity-85'}`}
                    onClick={() => setActiveGuidance(3)}
                    onMouseEnter={() => setActiveGuidance(3)}
                  />

                  {/* Segment 4: 36° to 0° */}
                  <path
                    d="M 345.8 94.2 A 180 180 0 0 1 380 200 L 290 200 A 90 90 0 0 0 272.9 147.1 Z"
                    fill="url(#arcGrad4)"
                    stroke="#ffffff"
                    strokeWidth="3"
                    className={`cursor-pointer transition-all duration-300 hover:opacity-90 ${activeGuidance === 4 ? 'filter drop-shadow-lg scale-105' : 'opacity-85'}`}
                    onClick={() => setActiveGuidance(4)}
                    onMouseEnter={() => setActiveGuidance(4)}
                  />

                  {/* Icon Overlays on Wedges */}
                  <g className="pointer-events-none text-white fill-white">
                    {/* Segment 0 Icon - Umbrella */}
                    <circle cx="75" cy="150" r="14" fill="rgba(255,255,255,0.2)" />
                    {/* Segment 1 Icon - Clipboard */}
                    <circle cx="130" cy="92" r="14" fill="rgba(255,255,255,0.2)" />
                    {/* Segment 2 Icon - Dollar */}
                    <circle cx="200" cy="70" r="14" fill="rgba(255,255,255,0.25)" />
                    {/* Segment 3 Icon - Heart */}
                    <circle cx="270" cy="92" r="14" fill="rgba(255,255,255,0.2)" />
                    {/* Segment 4 Icon - Stethoscope */}
                    <circle cx="325" cy="150" r="14" fill="rgba(255,255,255,0.2)" />
                  </g>
                </svg>

                {/* Central Glowing 3D Medical Cross Node */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 z-20 flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl border-4 border-teal-500 flex items-center justify-center relative p-3">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-500 to-[#0b192b] flex items-center justify-center shadow-inner text-white">
                      <activeItem.icon className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300" />
                    </div>
                  </div>
                </div>

              </div>

              {/* 5 Guidance Selector Pills / Grid for Easy Desktop & Mobile Interaction */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mt-14">
                {guidanceItems.map((item, idx) => {
                  const IconComp = item.icon;
                  const isActive = activeGuidance === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveGuidance(idx)}
                      onMouseEnter={() => setActiveGuidance(idx)}
                      className={`rounded-2xl p-5 text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? 'bg-white border-teal-500 shadow-xl shadow-teal-500/10 scale-105 z-10'
                          : 'bg-white/60 hover:bg-white border-slate-200 shadow-sm opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color}`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
                          0{idx + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-slate-900 text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Selection Display Banner */}
              <div className="w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl mt-8 flex flex-col sm:flex-row items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeItem.color} text-white flex items-center justify-center shrink-0 shadow-lg`}>
                  <activeItem.icon className="w-8 h-8" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-teal-600 text-xs font-bold uppercase tracking-widest block mb-1">
                    Guidance Detail 0{activeGuidance + 1} of 05
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-2xl mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {activeItem.desc}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─── 2. ACCEPTED INSURANCE PLANS GRID ─── */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/70 relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">
              In-Network Providers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              Accepted Insurance Plans
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We accept most major insurance plans to ensure that our patients receive the care they need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {insurers.map((ins, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/80 rounded-2xl p-6 shadow-md hover:shadow-xl border border-slate-200 hover:border-teal-500/50 transition-all duration-300 group cursor-default hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#0b192b] group-hover:bg-teal-600 text-teal-300 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-lg mb-1 group-hover:text-teal-600 transition-colors">
                      {ins.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium leading-normal">
                      {ins.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 text-center shadow-sm max-w-3xl mx-auto">
            <p className="text-slate-600 text-sm font-medium">
              <strong>Please note that</strong> this list is not exhaustive. We recommend contacting our office at <a href="tel:4693130040" className="text-teal-600 font-bold hover:underline">(469) 313-0040</a> to verify if we accept your specific insurance plan.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. VERIFYING COVERAGE & OUT-OF-POCKET COSTS ─── */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/70">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Verifying Your Coverage Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6">
                Verifying Your Coverage
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                To ensure a smooth experience, we advise patients to:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Contact your insurance provider directly to verify your coverage for pain management services.',
                  'Inquire about any co-payments, co-insurance, or deductibles that may apply.',
                  'Check if our clinic is in-network with your plan.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 pt-4">
                Our staff is also available to assist you with insurance-related questions and can help verify your benefits before your appointment.
              </p>
            </div>

            {/* Out-of-Pocket & Medicare Coverage Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0b192b] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                <CreditCard className="w-7 h-7 text-teal-300" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6">
                Out-of-Pocket Costs
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                Any applicable out-of-pocket costs, such as co-payments or deductibles, are due at the time of service. We accept various payment methods for your convenience.
              </p>

              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 pt-2">
                Medicare Coverage for Pain Management
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                For our Medicare patients, it's important to note that Medicare Part B covers many pain management services, including:
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Chronic pain management and treatment services',
                  'Physical therapy',
                  'Occupational therapy',
                  'Chiropractic services (limited coverage)',
                  'Acupuncture for chronic low back pain (limited coverage)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 pt-4">
                Medicare patients typically pay 20% of the Medicare-approved amount for these services after meeting their Part B deductible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. COMPREHENSIVE CARE & CONTACT CARDS ─── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {[
              { 
                icon: Heart, 
                title: 'Comprehensive Care Approach', 
                desc: 'At Spine & Pain Institute of Texas, we believe in a comprehensive approach to pain management. While some advanced treatments may not be fully covered by insurance, we work diligently to provide effective care that can reduce your overall healthcare costs in the long run.' 
              },
              { 
                icon: HelpCircle, 
                title: 'Financial Assistance', 
                desc: "We understand that managing chronic pain can be a financial burden. If you're experiencing financial difficulties, please speak with our staff about potential payment plans or financial assistance options." 
              },
              { 
                icon: ShieldCheck, 
                title: 'Stay Informed', 
                desc: 'Insurance policies and coverage can change. We encourage our patients to stay informed about their insurance benefits and to communicate with us about any changes in their coverage.' 
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-[#0b192b] text-teal-300 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.desc}</p>
              </div>
            ))}

            {/* Direct Contact CTA Card */}
            <div className="bg-[#0b192b] text-white rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-teal-500/20 text-teal-300 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-teal-500/30">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-white">Contact Us for Insurance Information</h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                  If you have any questions about insurance coverage for our pain management services in Dallas, please don't hesitate to contact our office. Our knowledgeable staff is here to help you navigate your insurance benefits so you can focus on what's most important — your health and well-being.
                </p>
              </div>
              <div>
                <a 
                  href="tel:4693130040" 
                  className="bg-teal-500 hover:bg-teal-400 block text-center px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors mb-3 shadow-lg shadow-teal-500/25"
                >
                  Call (469) 313-0040
                </a>
                <p className="text-slate-400 text-xs text-center">Your path to pain relief starts here.</p>
              </div>
            </div>

          </div>

          {/* ─── 5. INTERACTIVE 3D INSURERS CAROUSEL & MARQUEE ─── */}
          <div className="border-t border-slate-200/80 pt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-1">
                  Trusted Partners
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Accepted Insurance Networks &amp; Providers
                </h3>
              </div>

              {/* Slider Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0b192b] hover:text-white transition-all shadow-md hover:scale-105"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0b192b] hover:text-white transition-all shadow-md hover:scale-105"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Container with Smooth Scroll & Hover Elevation */}
            <div
              ref={sliderRef}
              className="flex items-center gap-8 overflow-x-auto scroll-smooth py-6 px-6 no-scrollbar bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-md"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {insuranceImages.map((img, index) => (
                <div 
                  key={index}
                  className="shrink-0 h-16 sm:h-20 w-44 sm:w-52 flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
