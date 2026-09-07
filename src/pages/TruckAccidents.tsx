import { useState } from 'react';
import { 
  Truck, PhoneCall, CheckCircle2, ShieldCheck, AlertTriangle, HelpCircle, 
  ChevronRight, Activity, Crosshair, FileText, Zap, Stethoscope, Award, 
  MapPin, Building2, UserCheck, AlertCircle, Scale, Clock, Sparkles, Home, User
} from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function TruckAccidents() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "How is treatment for truck accident injuries different?",
      a: "Truck accidents typically cause more severe injuries requiring specialized, intensive treatment and longer recovery periods. The massive weight differential creates catastrophic trauma that standard car accident protocols cannot address."
    },
    {
      q: "Will the trucking company's insurance cover my treatment?",
      a: "While their insurance may ultimately be responsible, a Letter of Protection ensures you get immediate treatment without waiting for insurance approval or liability determination."
    },
    {
      q: "How long do truck accident injury cases take?",
      a: "Due to the complexity and severity, truck accident cases often take 1-3 years or more to resolve, making immediate medical care crucial for your health and legal case."
    },
    {
      q: "Can you provide expert testimony for my case?",
      a: "Yes, Dr. Patel can provide expert medical testimony regarding your injuries, treatment, and long-term prognosis for truck accident litigation."
    },
    {
      q: "What if I felt fine after the accident but now have symptoms?",
      a: "This is common with truck accidents. Many serious injuries have delayed symptoms due to adrenaline and shock. Seek immediate evaluation regardless of when symptoms appear."
    },
    {
      q: "Do you handle cases involving federal trucking regulations?",
      a: "Yes, we understand federal trucking regulations and can document violations that may have contributed to your accident, supporting your legal case with comprehensive medical evidence."
    },
    {
      q: "What makes truck accident injuries so severe?",
      a: "The massive weight differential (up to 80,000 lbs vs. 3,000 lbs), multiple impact scenarios, and complex accident dynamics create catastrophic injuries rarely seen in standard car accidents."
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
            <span className="text-slate-200">18-Wheeler Truck Accidents</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center bg-teal-500/20 text-teal-300 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6 border border-teal-500/30">
                <Truck className="w-4 h-4 mr-2 text-teal-400" /> 18-Wheeler Accident Care in Dallas, TX
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
                Specialized Care for <span className="text-teal-400">Truck Accident Victims</span> in Dallas
              </h1>

              <p className="text-teal-100 text-base sm:text-lg font-medium mb-6 leading-relaxed">
                Immediate Medical Attention &nbsp;|&nbsp; Letter of Protection Accepted &nbsp;|&nbsp; Truck Accident Specialists
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                <strong className="text-white font-semibold">18-wheeler accidents</strong> are among the most devastating motor vehicle collisions due to the massive size and weight disparity between commercial trucks and passenger vehicles. At <strong className="text-white font-semibold">Spine &amp; Pain Institute of Texas</strong>, Dr. Pritesh Patel, DO understands the unique medical challenges that <strong className="text-white font-semibold">truck accident victims</strong> face in Dallas and North Texas.
              </p>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
                {[
                  "Emergency Appointments Available for Truck Accident Victims",
                  "Specialized treatment for catastrophic truck accident injuries",
                  "Expert testimony and comprehensive legal documentation",
                  "Letter of Protection accepted – no upfront payment required",
                  "24/7 emergency care coordination for severe truck trauma",
                  "Direct coordination with truck accident attorneys"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right CTA Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="inline-block bg-teal-50 text-teal-800 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-teal-200">
                  Critical Trauma Care
                </div>

                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-teal-600" /> Emergency Truck Accident Care
                </h2>

                <a 
                  href="tel:4693130040" 
                  className="inline-flex items-center text-2xl sm:text-3xl font-extrabold text-teal-600 hover:text-teal-700 transition-colors mb-4"
                >
                  <PhoneCall className="w-7 h-7 mr-3 shrink-0 text-teal-600" />
                  (469) 313-0040
                </a>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Call immediately for <strong className="text-slate-800">truck accident</strong> medical evaluation with Dr. Pritesh Patel.
                </p>

                <a 
                  href="#appointment-section" 
                  className="block w-full bg-[#0b192b] hover:bg-teal-600 text-white text-center py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md mb-4"
                >
                  Request Emergency Appointment
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Time is critical after an 18-wheeler accident. Don't wait.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Why 18-Wheeler Accidents Require Specialized Care ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              High Impact Collision Trauma
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Why <span className="text-teal-600">18 Wheeler Accidents</span> Require Specialized Care
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Commercial trucks can weigh up to 80,000 pounds—40 times heavier than passenger cars. This massive weight differential creates devastating injuries that require immediate, specialized treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-teal-100">
                  <Truck className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Massive Weight Differential</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Passenger cars: 2,000–4,000 pounds vs. Loaded 18-wheelers: Up to 80,000 pounds. Force of impact increases exponentially with weight.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-teal-100">
                  <AlertTriangle className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Complex Accident Dynamics</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Jackknife accidents, trailer swing and rollover, multi-vehicle pile-ups, and cargo spillage hazards create multiple trauma scenarios.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-teal-100">
                  <Zap className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Multiple Impact Scenarios</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Initial collision with truck cab, secondary impact with trailer, potential crushing under truck, and risk of being dragged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Catastrophic 18 Wheeler Accident Injuries We Treat ─── */}
      <section className="py-20 bg-white border-b border-slate-100" id="truck-injuries">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Expert Spine &amp; Orthopedic Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Catastrophic <span className="text-teal-600">18 Wheeler Accident Injuries</span> We Treat
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Truck accidents typically cause more severe, life-threatening injuries than standard car accidents. Our Dallas clinic specializes in treating the complex trauma associated with commercial vehicle collisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Spinal Injuries */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Spinal Trauma
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Severe Spinal Injuries</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Spinal cord damage and paralysis",
                    "Multiple vertebral fractures",
                    "Severe disc herniation and rupture",
                    "Spinal stenosis from compression",
                    "Complete spinal cord transection"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Traumatic Brain Injuries */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Head &amp; Brain
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Traumatic Brain Injuries</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Severe concussions",
                    "Intracranial bleeding",
                    "Cognitive impairment",
                    "Memory and concentration issues",
                    "Post-traumatic brain syndrome"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multiple Trauma */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Systemic Trauma
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Multiple Trauma Injuries</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Multiple bone fractures",
                    "Internal organ damage",
                    "Severe soft tissue injuries",
                    "Crush injuries and amputations",
                    "Life-threatening hemorrhaging"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Complex Neck & Back */}
            <div className="bg-[#0b192b] text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between border border-teal-500/30">
              <div>
                <span className="bg-teal-500 text-white font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 uppercase tracking-wider">
                  Cervical &amp; Lumbar
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Complex Neck &amp; Back</h3>
                <p className="text-teal-200 text-xs mb-4">Advanced spinal care for severe whiplash:</p>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {[
                    "Whiplash with neurological symptoms",
                    "Cervical spine fractures",
                    "Thoracic & lumbar compression",
                    "Facet joint disruption",
                    "Ligament and tendon ruptures"
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
                  Schedule Evaluation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Letter of Protection for Truck Accidents ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60" id="letter-of-protection">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-[#0b192b] rounded-3xl p-8 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-teal-500/20">
            <div className="max-w-3xl mb-12">
              <span className="inline-block bg-teal-500/20 text-teal-300 font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-teal-500/30">
                Financial Protection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                Letter of Protection for <span className="text-teal-400">Truck Accidents</span>
              </h2>
              <p className="text-teal-100 text-base sm:text-lg font-light leading-relaxed">
                Truck accident injuries often require extensive, expensive treatment. A Letter of Protection ensures you receive immediate comprehensive care without financial barriers while your legal case is pending.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold mb-6 text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-teal-400" /> Why LOP is Crucial for Truck Accidents
                </h3>
                <ul className="space-y-3.5 text-slate-200 text-xs sm:text-sm">
                  {[
                    "Injuries often require extensive multi-specialty treatment",
                    "Specialist procedures & diagnostics covered without upfront cost",
                    "Long-term rehabilitation and physical therapy programs",
                    "Relieves financial stress during legal negotiations",
                    "Medical treatment cannot wait for case resolution"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-white flex items-center gap-3">
                    <FileText className="w-6 h-6 text-teal-400" /> How We Facilitate LOP
                  </h3>
                  <ol className="space-y-3.5 text-slate-200 text-xs sm:text-sm">
                    {[
                      "Work directly with your personal injury attorney",
                      "Begin comprehensive treatment immediately without out-of-pocket fees",
                      "Provide detailed medical documentation & diagnostic records",
                      "Coordinate with legal team throughout entire care journey",
                      "Support case with expert medical testimony"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{idx + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/letter-of-protection"
                    className="block text-center bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors shadow-md"
                  >
                    Learn More About Letter of Protection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Serving North Texas Truck Accident Victims ─── */}
      <section className="py-20 bg-white border-b border-slate-100" id="service-area">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Service Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Serving North Texas <span className="text-teal-600">Truck Accident Victims</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Our clinic provides emergency truck accident care throughout the Dallas-Fort Worth metroplex, with immediate access from major trucking routes and highways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <MapPin className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Primary Service Area</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-xs sm:text-sm">
                Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, Farmers Branch, Addison
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <Truck className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Major Trucking Routes</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-xs sm:text-sm">
                I-35E, I-635 (LBJ), US-75 (Central Expressway), I-30, Loop 12, I-20, I-45
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <Building2 className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Response Counties</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-700 font-medium">
                <li>&bull; Dallas County</li>
                <li>&bull; Collin County</li>
                <li>&bull; Tarrant County</li>
                <li>&bull; Denton County</li>
                <li>&bull; Rockwall County</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60" id="truck-faq">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">Frequently Asked Questions About Truck Accident Care</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Common questions about 18-wheeler injury medical treatment in Dallas, TX.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
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
      <section className="py-20 bg-white border-t border-slate-200/60" id="appointment-section">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="bg-[#0b192b] text-white rounded-3xl shadow-2xl border border-teal-500/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[580px] flex items-center justify-center p-8 overflow-hidden bg-slate-900/50">
                <img 
                  src="https://texasspinepain.com/wp-content/uploads/2019/09/doctor-2.jpg" 
                  alt="Dr. Pritesh Patel - Emergency Truck Accident Care" 
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl relative z-10 border border-white/10 max-w-sm lg:max-w-none"
                />
                
                <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-teal-300" /> Dr. Pritesh Patel, DO
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="inline-block bg-teal-500/20 text-teal-300 font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-teal-500/30">
                    24/7 Response Care
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                    Emergency Truck Accident Evaluation
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Letter of Protection accepted &bull; No upfront costs &bull; Same-day scheduling
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="your-name" 
                        required
                        placeholder="John Doe"
                        className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white/10 text-white placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">Mobile Number</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        required
                        placeholder="(469) 313-0040"
                        className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white/10 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">Email ID</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white/10 text-white placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">Legal Status</label>
                      <select 
                        name="legal-status"
                        className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-[#0b192b] text-white font-medium"
                      >
                        <option value="represented">Have Attorney (Letter of Protection)</option>
                        <option value="seeking-representation">Seeking Attorney Representation</option>
                        <option value="insurance-claim">Insurance Claim Processing</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">Accident / Symptoms Details</label>
                    <textarea 
                      name="message" 
                      rows={3}
                      placeholder="Describe the 18-wheeler accident details or symptoms..."
                      className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white/10 text-white placeholder-slate-400 resize-y"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Truck className="w-4 h-4" /> Submit Emergency Evaluation Request
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
