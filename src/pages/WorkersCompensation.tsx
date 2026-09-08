import { useState } from 'react';
import { 
  Briefcase, PhoneCall, CheckCircle2, ShieldCheck, Stethoscope, Clock, FileText, 
  ChevronRight, Activity, Crosshair, HelpCircle, Building2, MapPin, CreditCard,
  AlertCircle, FileCheck, Zap, UserCheck, Sparkles, Home, ArrowRight, CheckCircle
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { TiltWrapper } from '../components/TiltWrapper';

export function WorkersCompensation() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "How soon should I report my injury and seek treatment?",
      a: "Report and seek care within 24 hours of injury to protect your claim and health. Delays in reporting or treatment can jeopardize your workers' compensation benefits."
    },
    {
      q: "Do you handle both state and federal workers' comp cases?",
      a: "Yes—we handle state funds, private carriers, and FECA claims for federal employees. Our team has specialized experience with both systems."
    },
    {
      q: "What if my claim is denied?",
      a: "We provide comprehensive documentation and expert opinions to support appeals and can refer you to experienced workers' compensation attorneys when needed."
    },
    {
      q: "Can I choose my provider for workers' comp?",
      a: "Often, yes. We'll help you understand your rights and options under your specific workers' compensation coverage."
    },
    {
      q: "What is ECOMP and how do you help with it?",
      a: "ECOMP is the electronic system for federal employee workers' compensation claims. We assist with account setup, form completion, and electronic submission of all required documentation."
    },
    {
      q: "How long will my treatment take?",
      a: "Treatment length depends on your injury severity and how your body responds to care. We'll create a personalized treatment plan with estimated timelines and return-to-work goals."
    },
    {
      q: "Do you provide return-to-work evaluations?",
      a: "Yes. We conduct functional capacity evaluations, work conditioning programs, and provide detailed return-to-work recommendations including any necessary job accommodations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      
      {/* ─── Editorial Subpage Hero ─── */}
      <section className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/95 to-teal-950/40 z-0" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          
          {/* Breadcrumb Bar */}
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Workers' Compensation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center bg-teal-500/20 text-teal-300 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6 border border-teal-500/30">
                <Briefcase className="w-4 h-4 mr-2 text-teal-400" /> Workers' Compensation Clinic in Dallas, TX
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
                Specialized Workers' Compensation Care in <span className="text-teal-400">Dallas, Texas</span>
              </h1>

              <p className="text-teal-100 text-base sm:text-lg font-medium mb-6 leading-relaxed">
                Same-Day Appointments for On-the-Job Injuries &nbsp;|&nbsp; DOL &amp; FECA Claims Expertise &nbsp;|&nbsp; No Upfront Costs
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                At <strong className="text-white font-semibold">Spine &amp; Pain Institute of Texas</strong>, Dr. Pritesh Patel, DO and our dedicated team provide comprehensive medical care for workplace injuries across <strong className="text-white font-semibold">Dallas, Garland, Plano, Richardson, Irving, and the wider North Texas region</strong>. We specialize in both state workers' compensation and federal employee FECA claims.
              </p>

              {/* 6 Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
                {[
                  "Federal Employee FECA Claims (USPS, VA, TSA, SSA, DoD)",
                  "State & Private Workers' Compensation",
                  "ECOMP Electronic Filing Support",
                  "Same-Day & Emergency Appointments",
                  "Letters of Protection & No Out-of-Pocket Costs",
                  "Comprehensive Diagnostic & Interventional Care"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right CTA Box */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="inline-block bg-teal-50 text-teal-800 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-teal-200">
                  Immediate Support
                </div>

                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                  Call Now for Same-Day Care
                </h2>

                <a 
                  href="tel:4693130040" 
                  className="inline-flex items-center text-2xl sm:text-3xl font-extrabold text-teal-600 hover:text-teal-700 transition-colors mb-4"
                >
                  <PhoneCall className="w-7 h-7 mr-3 shrink-0 text-teal-600" />
                  (469) 313-0040
                </a>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Schedule your <strong className="text-slate-800">workers' compensation</strong> evaluation today with Dr. Pritesh Patel.
                </p>

                <a 
                  href="#appointment-section" 
                  className="block w-full bg-[#0b192b] hover:bg-teal-600 text-white text-center py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md mb-4"
                >
                  Request a Same-Day Appointment
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>No upfront costs with qualifying <strong className="text-slate-800">workers' compensation</strong> coverage.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Why Choose Our Clinic ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Clinical Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Why Choose Our Dallas <span className="text-teal-600">Workers' Compensation Clinic</span>?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Our clinic is dedicated to helping injured workers in Dallas and across North Texas recover safely and return to work as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FECA & DOL Expertise",
                desc: "Specialized experience with federal employee claims including ECOMP electronic filing and comprehensive documentation.",
                icon: <FileCheck className="w-7 h-7 text-teal-600" />
              },
              {
                title: "Same-Day Appointments",
                desc: "We reserve slots for urgent workplace injury evaluations so you can be seen immediately after your injury.",
                icon: <Clock className="w-7 h-7 text-teal-600" />
              },
              {
                title: "Comprehensive Care",
                desc: "From initial evaluation to return-to-work planning, we provide complete workers' compensation medical services.",
                icon: <Stethoscope className="w-7 h-7 text-teal-600" />
              },
              {
                title: "Electronic Filing Support",
                desc: "We handle ECOMP system navigation, form completion, and electronic submission for federal employees.",
                icon: <FileText className="w-7 h-7 text-teal-600" />
              },
              {
                title: "No Upfront Costs",
                desc: "Workers' compensation coverage typically covers all approved medical treatment with no out-of-pocket expenses.",
                icon: <ShieldCheck className="w-7 h-7 text-teal-600" />
              },
              {
                title: "North Texas Coverage",
                desc: "Serving workers from Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, and surrounding communities.",
                icon: <MapPin className="w-7 h-7 text-teal-600" />
              }
            ].map((feat, idx) => (
              <TiltWrapper key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between group h-full">
                <div>
                  <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-teal-100 icon-wrapper">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Types of Workplace Injuries We Treat ─── */}
      <section className="py-20 bg-white border-b border-slate-100" id="workplace-injuries">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Comprehensive Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Types of <span className="text-teal-600">Workplace Injuries</span> We Treat
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Whether you work in an office, warehouse, construction site, or federal facility, our team understands the unique injury patterns associated with different work environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Immediate Care
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Acute Traumatic Injuries</h3>
                <p className="text-slate-500 text-xs mb-4">Sudden workplace accidents that cause immediate injury:</p>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Lifting injuries & back strains",
                    "Slip-and-fall accidents",
                    "Machinery & equipment accidents",
                    "On-the-job vehicle collisions",
                    "Struck-by-object injuries",
                    "Falls from heights",
                    "Cuts and lacerations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Progressive Care
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Repetitive Strain Injuries</h3>
                <p className="text-slate-500 text-xs mb-4">Injuries that develop over time from repeated work activities:</p>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Carpal tunnel syndrome",
                    "Tennis elbow (lateral epicondylitis)",
                    "Rotator cuff injuries",
                    "Chronic neck pain from computer work",
                    "Lower back pain from standing/sitting",
                    "Trigger finger",
                    "Tendonitis and bursitis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="bg-amber-100 text-amber-900 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Exposures &amp; Conditions
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Occupational Diseases</h3>
                <p className="text-slate-500 text-xs mb-4">Health conditions caused by workplace exposures:</p>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Cumulative trauma disorders",
                    "Joint deterioration from repetitive tasks",
                    "Muscle fatigue syndromes",
                    "Postural dysfunction",
                    "Hearing loss from noise exposure",
                    "Respiratory conditions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0b192b] text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between border border-teal-500/30">
              <div>
                <span className="bg-teal-500 text-white font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  FECA Specialty
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Federal Employee Injuries</h3>
                <p className="text-teal-200 text-xs mb-4">Specialized care for federal workers under FECA:</p>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {[
                    "U.S. Postal Service injuries",
                    "VA employee workplace injuries",
                    "TSA agent injuries",
                    "Social Security Administration",
                    "Department of Defense civilian injuries",
                    "All other federal agency injuries"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href="#appointment-section" 
                  className="block text-center bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Request FECA Evaluation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Workers' Compensation Process Support ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60" id="wc-process">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Claims Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              <span className="text-teal-600">Workers' Compensation</span> Process Support
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Navigating claims documentation, system filings, and progress reports seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Block 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl inline-block mb-4 border border-teal-100">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-3">Form Completion &amp; Filing</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="font-bold text-teal-700">CA-1</span> (Traumatic injury)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-teal-700">CA-2</span> (Occupational disease)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-teal-700">CA-7</span> (Wage loss)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-teal-700">CA-16</span> (Treatment authorization)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-teal-700">CA-17</span> (Duty status reports)</li>
                <li className="flex items-start gap-2">State workers' comp forms</li>
                <li className="flex items-start gap-2">Private carrier documentation</li>
              </ul>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl inline-block mb-4 border border-teal-100">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-3">ECOMP System Assistance</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Electronic claim setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Medical record upload</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Claim status monitoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> System navigation support</li>
              </ul>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl inline-block mb-4 border border-teal-100">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-3">Comprehensive Reporting</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Initial injury assessments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Progress &amp; treatment notes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Functional capacity (FCE)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Return-to-work plans</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Impairment ratings</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Medical necessity notes</li>
              </ul>
            </div>

            {/* Block 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl inline-block mb-4 border border-teal-100">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-3">Claim Types We Handle</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Traumatic injuries</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Occupational diseases</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Recurrences of prior injuries</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Pre-existing aggravation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Survivor &amp; death claims</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Department of Labor (DOL) / FECA Expertise ─── */}
      <section className="py-20 bg-white border-b border-slate-100" id="feca-expertise">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-[#0b192b] rounded-3xl p-8 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-teal-500/20">
            <div className="max-w-3xl mb-12">
              <span className="inline-block bg-teal-500/20 text-teal-300 font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-teal-500/30">
                Federal Employee Claims
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                Department of Labor (DOL) / <span className="text-teal-400">FECA Expertise</span>
              </h2>
              <p className="text-teal-100 text-base sm:text-lg font-light leading-relaxed">
                We specialize in treating federal employees under the Federal Employees' Compensation Act (FECA) and provide comprehensive support throughout the claims process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Federal Agencies Served */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-white">
                  <Building2 className="w-7 h-7 text-teal-400" /> Federal Agencies We Serve
                </h3>
                <ul className="space-y-3 text-slate-200 font-medium text-xs sm:text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span><strong className="text-white">U.S. Postal Service</strong> (USPS)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span><strong className="text-white">Department of Veterans Affairs</strong> (VA)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span><strong className="text-white">TSA Agents</strong></span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span><strong className="text-white">Social Security Administration</strong></span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span><strong className="text-white">Department of Defense civilians</strong> (DoD)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span>Department of Homeland Security</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span>Department of Justice</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> <span>All other federal agencies</span></li>
                </ul>
              </div>

              {/* How We Help Federal Employees */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-white">
                  <ShieldCheck className="w-7 h-7 text-teal-400" /> How We Help Federal Employees
                </h3>
                <ul className="space-y-3.5 text-slate-200 text-xs sm:text-sm">
                  {[
                    "ECOMP account registration assistance",
                    "Electronic form filing",
                    "Detailed medical record coordination",
                    "FECA appeal support",
                    "Second opinion evaluations",
                    "Independent medical examinations",
                    "Vocational rehabilitation coordination"
                  ].map((helpItem, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <span>{helpItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Advanced Diagnostic & Treatment Services ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60" id="treatment">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Advanced Modalities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Advanced Diagnostic &amp; <span className="text-teal-600">Treatment Services</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              We customize your treatment plan based on your workplace injury, job requirements, and return-to-work goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1 */}
            <TiltWrapper className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 border border-teal-100 icon-wrapper">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Diagnostics</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["Digital X-rays & CT scans", "MRI referrals", "EMG / NCV nerve testing", "Biomechanical assessments", "Functional capacity (FCE)", "Work simulation testing"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </TiltWrapper>

            {/* Col 2 */}
            <TiltWrapper className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 border border-teal-100 icon-wrapper">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Non-Invasive Care</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["Physical & occupational therapy", "Chiropractic adjustments", "Pain management injections", "Regenerative medicine (PRP)", "Massage therapy", "Acupuncture"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </TiltWrapper>

            {/* Col 3 */}
            <TiltWrapper className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 border border-teal-100 icon-wrapper">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Return-to-Work</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["Work conditioning programs", "Job-specific training", "Light-duty planning", "Job accommodations", "Home exercise programs", "Ergonomic training"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </TiltWrapper>

            {/* Col 4 */}
            <TiltWrapper className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="bg-teal-50 text-teal-700 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-6 border border-teal-100 icon-wrapper">
                  <Crosshair className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Spine Injections</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {["Epidural steroid injections", "Facet joint blocks", "Trigger point injections", "Nerve blocks", "Joint injections", "Radiofrequency ablation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </TiltWrapper>
          </div>
        </div>
      </section>

      {/* ─── Why Early Treatment Matters ─── */}
      <section className="py-20 bg-[#0b192b] text-white" id="why-early-treatment">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-teal-300 font-bold text-xs uppercase tracking-widest block mb-2">
              Critical Timing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Why Early Treatment After a <span className="text-teal-400">Workplace Injury</span> Matters
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Prompt medical attention ensures faster functional recovery while securing all required claim documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center text-white">
                <Activity className="w-7 h-7 text-teal-400 mr-3" /> Medical Benefits
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-xs sm:text-sm">
                {[
                  "Prevent chronic pain & disability",
                  "Accelerate healing & reduce inflammation",
                  "Establish timely medical records",
                  "Identify complications early",
                  "Optimize recovery outcomes",
                  "Reduce time away from work"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center text-white">
                <ShieldCheck className="w-7 h-7 text-teal-400 mr-3" /> Legal Benefits
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-xs sm:text-sm">
                {[
                  "Strengthen workers' comp claims",
                  "Document injury-to-treatment timeline",
                  "Provide expert medical testimony if needed",
                  "Establish work-relatedness of injury",
                  "Support disability determinations",
                  "Protect your rights under workers' comp law"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Insurance & Serving North Texas ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60" id="insurance">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Accessibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Insurance, Coverage &amp; <span className="text-teal-600">Service Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <CreditCard className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Accepted Coverage</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <li>&bull; All Major Health Plans</li>
                <li>&bull; Workers' Comp Carriers</li>
                <li>&bull; FECA Federal Coverage</li>
                <li>&bull; Letters of Protection (LOP)</li>
                <li>&bull; Cash &amp; Flexible Payment Plans</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <MapPin className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Primary Service Areas</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, Frisco, Allen, McKinney, Lewisville, Grand Prairie, Duncanville.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <AlertCircle className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Major Highway Routes</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                Easily accessible via I-35E, I-635 (LBJ Freeway), US-75 (Central Expressway), and Loop 12.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 bg-white border-b border-slate-100" id="wc-faq">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Common questions about workers' compensation medical care and claims support in Dallas, TX.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center font-serif font-bold p-6 text-slate-900 hover:text-teal-600 transition-colors text-left text-base sm:text-lg"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${activeFaq === idx ? 'rotate-90 text-teal-600' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Appointment Form Section ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60" id="appointment-section">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 bg-[#0b192b] relative min-h-[380px] lg:min-h-[580px] flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src="https://texasspinepain.com/wp-content/uploads/2019/09/doctor-2.jpg" 
                  alt="Dr. Pritesh Patel - Workers Compensation Care" 
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl relative z-10 border border-white/10 max-w-sm lg:max-w-none"
                />
                
                <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-teal-300" /> Dr. Pritesh Patel, DO
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
                    Schedule Workers' Compensation Evaluation
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Same-day evaluation appointments for state &amp; federal FECA workplace injury claims
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="your-name" 
                        required
                        placeholder="John Doe"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Mobile Number</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        required
                        placeholder="(469) 313-0040"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email ID</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Claim Type</label>
                      <select 
                        name="claim-type"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50 text-slate-700 font-medium"
                      >
                        <option value="state-comp">State Workers' Compensation</option>
                        <option value="federal-feca">Federal Employee FECA Claim</option>
                        <option value="ecomp-assistance">ECOMP Filing Support Needed</option>
                        <option value="lop">Letter of Protection (LOP)</option>
                        <option value="other">Other Workplace Injury</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Injury / Symptoms Description</label>
                    <textarea 
                      name="message" 
                      rows={3}
                      placeholder="Describe your workplace injury, date of injury, or appointment request..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50 resize-y"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Briefcase className="w-4 h-4" /> Submit Claim Evaluation Request
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
