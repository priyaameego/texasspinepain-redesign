import { 
  Briefcase, PhoneCall, CheckCircle, ShieldCheck, Stethoscope, Clock, FileText, 
  ChevronRight, Activity, Crosshair, HelpCircle, Building2, MapPin, CreditCard,
  AlertCircle, FileCheck, Zap, UserCheck
} from 'lucide-react';

export function WorkersCompensation() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* ─── Hero Section ─── */}
      <section className="bg-gradient-to-br from-[#1e4682] via-[#163566] to-[#0f2447] py-16 lg:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img 
           src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
           alt="Workers Compensation Care" 
           className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20 text-xs sm:text-sm uppercase tracking-wider">
             <Briefcase className="w-4 h-4 mr-2 text-[#17a2b8]" /> Workers' Compensation Clinic in Dallas, TX
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                Specialized Workers' Compensation Care in <span className="text-[#17a2b8]">Dallas, Texas</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 font-medium mb-6 leading-relaxed">
                Same-Day Appointments for On-the-Job Injuries &nbsp;|&nbsp; DOL &amp; FECA Claims Expertise &nbsp;|&nbsp; No Upfront Costs
              </p>

              <p className="text-base text-gray-200 mb-8 leading-relaxed font-light">
                At <strong className="text-white font-semibold">Spine &amp; Pain Institute of Texas</strong>, Dr. Pritesh Patel, DO and our dedicated team provide comprehensive medical care for workplace injuries across <strong className="text-white font-semibold">Dallas, Garland, Plano, Richardson, Irving, and the wider North Texas region</strong>. We specialize in both state workers' compensation and federal employee FECA claims.
              </p>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm sm:text-base font-medium">
                {[
                  "Federal Employee FECA Claims (Postal, VA, TSA, Social Security, DoD)",
                  "State & Private Workers' Compensation",
                  "ECOMP Electronic Filing Support",
                  "Same-Day & Emergency Appointments",
                  "Letters of Protection & No Out-of-Pocket Costs",
                  "Comprehensive diagnostic and treatment services"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0 mt-0.5" />
                    <span className="text-gray-100 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right CTA Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#17a2b8]/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="inline-block bg-[#17a2b8]/10 text-[#17a2b8] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Immediate Support
                </div>
                
                <h2 className="text-2xl font-bold text-[#1e4682] mb-3">
                  Call Now for Same-Day Care
                </h2>
                
                <a 
                  href="tel:4693130040" 
                  className="inline-flex items-center text-2xl sm:text-3xl font-extrabold text-[#17a2b8] hover:text-[#1e4682] transition-colors mb-4"
                >
                  <PhoneCall className="w-7 h-7 mr-3 shrink-0" />
                  (469) 313-0040
                </a>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Schedule your <strong className="text-gray-800">workers' compensation</strong> evaluation today.
                </p>

                <a 
                  href="#appointment" 
                  className="block w-full bg-[#1e4682] hover:bg-[#163566] text-white text-center py-4 rounded-xl font-bold text-base transition-colors shadow-lg mb-4 hover:shadow-xl"
                >
                  Request a Same-Day Appointment
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-[#17a2b8] shrink-0" />
                  <span>No upfront costs with qualifying <strong className="text-gray-700">workers' compensation</strong> coverage.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Our Clinic ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Dallas <span className="text-[#1e4682]">Workers' Compensation Clinic</span>?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our clinic is dedicated to helping injured workers in Dallas and across North Texas recover safely and return to work as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 title: "FECA & DOL Expertise",
                 desc: "Specialized experience with federal employee claims including ECOMP electronic filing and comprehensive documentation.",
                 icon: <FileCheck className="w-8 h-8 text-[#17a2b8]" />,
                 borderColor: "border-[#17a2b8]"
               },
               {
                 title: "Same-Day Appointments",
                 desc: "We reserve slots for urgent workplace injury evaluations so you can be seen immediately after your injury.",
                 icon: <Clock className="w-8 h-8 text-[#1e4682]" />,
                 borderColor: "border-[#1e4682]"
               },
               {
                 title: "Comprehensive Care",
                 desc: "From initial evaluation to return-to-work planning, we provide complete workers' compensation medical services.",
                 icon: <Stethoscope className="w-8 h-8 text-[#17a2b8]" />,
                 borderColor: "border-[#17a2b8]"
               },
               {
                 title: "Electronic Filing Support",
                 desc: "We handle ECOMP system navigation, form completion, and electronic submission for federal employees.",
                 icon: <FileText className="w-8 h-8 text-[#1e4682]" />,
                 borderColor: "border-[#1e4682]"
               },
               {
                 title: "No Upfront Costs",
                 desc: "Workers' compensation coverage typically covers all approved medical treatment with no out-of-pocket expenses.",
                 icon: <ShieldCheck className="w-8 h-8 text-[#17a2b8]" />,
                 borderColor: "border-[#17a2b8]"
               },
               {
                 title: "North Texas Coverage",
                 desc: "Serving workers from Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, and surrounding communities.",
                 icon: <MapPin className="w-8 h-8 text-[#1e4682]" />,
                 borderColor: "border-[#1e4682]"
               }
             ].map((feature, idx) => (
               <div key={idx} className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 ${feature.borderColor} border border-gray-100 flex flex-col justify-between group`}>
                  <div>
                    <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ─── Types of Workplace Injuries We Treat ─── */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100" id="workplace-injuries">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Types of <span className="text-[#1e4682]">Workplace Injuries</span> We Treat
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you work in an office, warehouse, construction site, or federal facility, our team understands the unique injury patterns associated with different work environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Acute Traumatic */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-red-50 text-red-600 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">
                  Immediate Care
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-2">Acute Traumatic Injuries</h3>
                <p className="text-gray-500 text-xs mb-4">Sudden workplace accidents that cause immediate injury:</p>
                
                <ul className="space-y-2.5 text-sm text-gray-700">
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
                      <ChevronRight className="w-4 h-4 text-[#17a2b8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Repetitive Strain */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">
                  Progressive Care
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-2">Repetitive Strain Injuries</h3>
                <p className="text-gray-500 text-xs mb-4">Injuries that develop over time from repeated work activities:</p>
                
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Carpal tunnel syndrome",
                    "Tennis elbow (lateral epicondylitis)",
                    "Rotator cuff injuries",
                    "Chronic neck pain from computer work",
                    "Lower back pain from prolonged standing/sitting",
                    "Trigger finger",
                    "Tendonitis and bursitis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#17a2b8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Occupational Diseases */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-amber-50 text-amber-700 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">
                  Exposure & Conditions
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-2">Occupational Diseases</h3>
                <p className="text-gray-500 text-xs mb-4">Health conditions caused by workplace exposures or conditions:</p>
                
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Cumulative trauma disorders",
                    "Joint deterioration from repetitive tasks",
                    "Muscle fatigue syndromes",
                    "Postural dysfunction",
                    "Hearing loss from noise exposure",
                    "Respiratory conditions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#17a2b8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4: Federal Employee Injuries */}
            <div className="bg-[#1e4682] text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="bg-[#17a2b8] text-white font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">
                  FECA Specialty
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Federal Employee Injuries</h3>
                <p className="text-blue-100 text-xs mb-4">Specialized care for federal workers under FECA:</p>
                
                <ul className="space-y-2.5 text-sm text-blue-50">
                  {[
                    "U.S. Postal Service injuries",
                    "VA employee workplace injuries",
                    "TSA agent injuries",
                    "Social Security Administration injuries",
                    "Department of Defense civilian injuries",
                    "All other federal agency injuries"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#17a2b8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href="#appointment" 
                  className="block text-center bg-[#17a2b8] hover:bg-[#138496] text-white py-2.5 rounded-lg text-xs font-bold transition-colors"
                >
                  Request FECA Evaluation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Workers' Compensation Process Support ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="wc-process">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#1e4682]">Workers' Compensation</span> Process Support
            </h2>
            <p className="text-gray-600 text-lg">
              Navigating claims documentation, system filings, and progress reports seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Block 1: Form Completion */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-blue-50 text-[#1e4682] p-3 rounded-lg inline-block mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Form Completion &amp; Filing</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e4682]">CA-1</span> (Traumatic injury)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e4682]">CA-2</span> (Occupational disease)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e4682]">CA-7</span> (Wage loss)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e4682]">CA-16</span> (Treatment authorization)</li>
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e4682]">CA-17</span> (Duty status reports)</li>
                <li className="flex items-start gap-2">State workers' comp forms</li>
                <li className="flex items-start gap-2">Private carrier documentation</li>
              </ul>
            </div>

            {/* Block 2: ECOMP System */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-teal-50 text-[#17a2b8] p-3 rounded-lg inline-block mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">ECOMP System Assistance</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Electronic claim setup &amp; submission</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Medical documentation upload</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Claim status monitoring</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> System navigation support</li>
              </ul>
            </div>

            {/* Block 3: Comprehensive Reporting */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-blue-50 text-[#1e4682] p-3 rounded-lg inline-block mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Comprehensive Reporting</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Initial injury assessments</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Progress &amp; treatment notes</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Functional capacity evaluations (FCE)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Return-to-work recommendations</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Impairment ratings</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Medical necessity documentation</li>
              </ul>
            </div>

            {/* Block 4: Claim Types */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-teal-50 text-[#17a2b8] p-3 rounded-lg inline-block mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Claim Types We Handle</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Traumatic injuries</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Occupational diseases</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Recurrences of prior work injuries</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Aggravation of pre-existing conditions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> Death benefits (survivor claims)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Department of Labor (DOL) / FECA Expertise ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="feca-expertise">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-[#1e4682] to-[#163566] rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-12">
              <div className="inline-block bg-[#17a2b8] text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Federal Employee Claims
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Department of Labor (DOL) / <span className="text-[#17a2b8]">FECA Expertise</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed font-light">
                We specialize in treating federal employees under the Federal Employees' Compensation Act (FECA) and provide comprehensive support throughout the claims process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Federal Agencies Served */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                  <Building2 className="w-7 h-7 text-[#17a2b8]" /> Federal Agencies We Serve
                </h3>
                <ul className="space-y-3 text-blue-50 font-medium text-sm sm:text-base">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span><strong className="text-white font-bold">U.S. Postal Service</strong> (USPS)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span><strong className="text-white font-bold">Department of Veterans Affairs</strong> (VA)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span><strong className="text-white font-bold">TSA Agents</strong></span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span><strong className="text-white font-bold">Social Security Administration</strong></span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span><strong className="text-white font-bold">Department of Defense civilians</strong> (DoD)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span>Department of Homeland Security</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span>Department of Justice</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" /> <span>All other federal agencies</span></li>
                </ul>
              </div>

              {/* How We Help Federal Employees */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                  <ShieldCheck className="w-7 h-7 text-[#17a2b8]" /> How We Help Federal Employees
                </h3>
                <ul className="space-y-3.5 text-blue-50 text-sm sm:text-base">
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
                      <ChevronRight className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
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
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="treatment">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Advanced Diagnostic &amp; <span className="text-[#1e4682]">Treatment Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We customize your treatment plan based on your workplace injury, job requirements, and return-to-work goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Diagnostics */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#17a2b8] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnostics</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Digital X-rays & CT scans", "MRI referrals", "EMG / NCV for nerve evaluation", "Biomechanical & ergonomic assessments", "Functional capacity evaluations", "Work simulation testing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Col 2: Non-Invasive Treatments */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#1e4682] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Non-Invasive Treatments</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Physical & occupational therapy", "Chiropractic adjustments", "Pain management injections", "Regenerative medicine (PRP, stem cell)", "Massage therapy", "Acupuncture"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#1e4682] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Col 3: Rehabilitation & Return-to-Work */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#17a2b8] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rehabilitation &amp; Return-to-Work</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Work conditioning programs", "Job-specific training", "Light-duty planning", "Job accommodations", "Home exercise programs", "Ergonomic training"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Col 4: Specialized Injections */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#1e4682] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Specialized Injections</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Epidural steroid injections", "Facet joint blocks", "Trigger point injections", "Nerve blocks", "Joint injections", "Radiofrequency ablation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#1e4682] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Early Treatment Matters ─── */}
      <section className="py-20 bg-[#1e4682] text-white" id="why-early-treatment">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-bold mb-4">
               Why Early Treatment After a <span className="text-[#17a2b8]">Workplace Injury</span> Matters
             </h2>
             <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light">
               Prompt medical attention ensures faster functional recovery while securing all required claim documentation.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Activity className="w-7 h-7 text-[#17a2b8] mr-3" /> Medical Benefits
                </h3>
                <ul className="space-y-3.5 text-blue-50 text-base">
                  {[
                    "Prevent chronic pain & disability",
                    "Accelerate healing & reduce inflammation",
                    "Establish timely medical records",
                    "Identify complications early",
                    "Optimize recovery outcomes",
                    "Reduce time away from work"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
             
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <ShieldCheck className="w-7 h-7 text-[#17a2b8] mr-3" /> Legal Benefits
                </h3>
                <ul className="space-y-3.5 text-blue-50 text-base">
                  {[
                    "Strengthen workers' comp claims",
                    "Document injury-to-treatment timeline",
                    "Provide expert medical testimony if needed",
                    "Establish work-relatedness of injury",
                    "Support disability determinations",
                    "Protect your rights under workers' comp law"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* ─── Insurance & Payment Options ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="insurance">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Insurance &amp; <span className="text-[#1e4682]">Payment Options</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our goal is to make <strong className="text-gray-800">workers' compensation injury treatment</strong> as accessible as possible for injured workers across Dallas and North Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-[#17a2b8]" />
                <h3 className="text-2xl font-bold text-gray-800">We Accept:</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-base">
                {[
                  "All Major Health Plans",
                  "Workers' Compensation Carriers (state funds, self-insured, TPAs)",
                  "Federal Employees' Compensation Act (FECA)",
                  "Letters of Protection Accepted",
                  "Cash & Payment Plans Available"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-[#1e4682]" />
                <h3 className="text-2xl font-bold text-gray-800">Workers' Compensation Coverage</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Most workers' compensation claims cover:</p>
              <ul className="space-y-3 text-gray-700 text-base">
                {[
                  "All medically necessary treatment",
                  "Diagnostic testing and imaging",
                  "Prescription medications",
                  "Physical therapy and rehabilitation",
                  "Durable medical equipment",
                  "Mileage reimbursement for medical appointments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-[#1e4682] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Serving North Texas Communities ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="service-area">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Serving <span className="text-[#1e4682]">North Texas Communities</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our clinic is centrally located in Dallas with convenient access from major highways, making it easy for <strong className="text-gray-800">workers' compensation</strong> patients across North Texas to receive care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <MapPin className="w-8 h-8 text-[#17a2b8] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Primary Areas</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Building2 className="w-8 h-8 text-[#1e4682] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Suburbs</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Frisco, Allen, McKinney, Lewisville, Grand Prairie, Duncanville
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <AlertCircle className="w-8 h-8 text-[#17a2b8] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Location Highlights</h3>
              <p className="text-gray-600 mb-2 font-medium">Easily accessible via:</p>
              <ul className="space-y-1 text-sm text-gray-700 font-semibold">
                <li>&bull; I-35E</li>
                <li>&bull; I-635 (LBJ Freeway)</li>
                <li>&bull; US-75 (Central Expressway)</li>
                <li>&bull; Loop 12</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Schedule CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-[#1e4682] to-[#163566] text-white" id="wc-appointment-form">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Schedule Your Same-Day <span className="text-[#17a2b8]">Workers' Compensation</span> Evaluation
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed font-light">
            If you've been injured at work in Dallas or North Texas, don't wait. Early evaluation protects your health and strengthens your workers' compensation claim.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:4693130040" 
              className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg w-full sm:w-auto"
            >
              Call (469) 313-0040 Now
            </a>
            <a 
              href="#appointment" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors w-full sm:w-auto"
            >
              Request Appointment Online
            </a>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="wc-faq">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
             <p className="text-gray-600 text-lg">
               Common questions about workers' compensation medical care and claims support in Dallas, TX.
             </p>
           </div>

           <div className="space-y-4">
              {[
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
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-gray-800 hover:text-[#1e4682] transition-colors">
                    <span className="flex items-center text-lg"><HelpCircle className="w-5 h-5 text-[#17a2b8] mr-3 shrink-0" /> {faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-1 group-open:animate-fadeIn p-6 pt-0 leading-relaxed border-t border-gray-100 text-base">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
