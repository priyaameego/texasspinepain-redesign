import { 
  FileText, PhoneCall, CheckCircle, ShieldCheck, Clock, ChevronRight, HelpCircle, 
  Car, Briefcase, Scale, AlertCircle, Building2, MapPin, Activity, Stethoscope, Crosshair,
  UserCheck, Zap, FileCheck, Award
} from 'lucide-react';

export function LetterOfProtection() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* ─── Hero Section ─── */}
      <section className="bg-gradient-to-br from-[#0b192b] via-[#163566] to-[#0f2447] py-16 lg:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img 
           src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" 
           alt="Letter of Protection Services" 
           className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20 text-xs sm:text-sm uppercase tracking-wider">
             <FileText className="w-4 h-4 mr-2 text-[#17a2b8]" /> Letter of Protection (LOP) Services – Dallas, TX
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                Get Immediate Medical Treatment <span className="text-[#17a2b8]">Without Upfront Costs</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 font-medium mb-6 leading-relaxed">
                LOP Coordination &nbsp;|&nbsp; Attorney Partnerships &nbsp;|&nbsp; No Financial Barriers to Care
              </p>

              <p className="text-base text-gray-200 mb-8 leading-relaxed font-light">
                A <strong className="text-white font-semibold">Letter of Protection (LOP)</strong> is a legally binding agreement that allows accident and injury victims to receive necessary medical treatment immediately without paying upfront costs. At <strong className="text-white font-semibold">Spine &amp; Pain Institute of Texas</strong>, Dr. Pritesh Patel, DO and our team work seamlessly with attorneys to ensure you get the medical care you need when you need it most.
              </p>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm sm:text-base font-medium">
                {[
                  "🏥 Same-Day Treatment Available with Valid LOP",
                  "No upfront payment required from patients",
                  "Immediate access to comprehensive medical care",
                  "Experienced LOP coordination team",
                  "Strong attorney partnership network",
                  "Expert medical testimony and documentation"
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
                  Immediate LOP Setup
                </div>
                
                <h2 className="text-2xl font-bold text-[#0b192b] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#17a2b8]" /> LOP Coordination Specialists
                </h2>
                
                <a 
                  href="tel:4693130040" 
                  className="inline-flex items-center text-2xl sm:text-3xl font-extrabold text-[#17a2b8] hover:text-[#0b192b] transition-colors mb-4"
                >
                  <PhoneCall className="w-7 h-7 mr-3 shrink-0" />
                  (469) 313-0040
                </a>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Call for <strong className="text-gray-800">Letter of Protection</strong> setup and coordination.
                </p>

                <a 
                  href="#appointment" 
                  className="block w-full bg-[#0b192b] hover:bg-[#163566] text-white text-center py-4 rounded-xl font-bold text-base transition-colors shadow-lg mb-4 hover:shadow-xl"
                >
                  Start LOP Process
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Clock className="w-4 h-4 text-[#17a2b8] shrink-0" />
                  <span>Dedicated LOP coordinators available for immediate setup.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How Letters of Protection Work ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="lop-works">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              How <span className="text-[#0b192b]">Letters of Protection</span> Work
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Letter of Protection process is designed to remove financial barriers to medical care while your legal case is pending. Here's our simple 4-step process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Attorney Issues LOP",
                desc: "Your personal injury attorney drafts the Letter of Protection, guaranteeing payment from future settlement and establishing a legally binding commitment.",
                icon: <Scale className="w-7 h-7 text-[#17a2b8]" />
              },
              {
                step: "Step 2",
                title: "We Accept and Begin Treatment",
                desc: "Our team reviews and accepts the LOP, medical treatment begins immediately with no upfront payment required from the patient.",
                icon: <FileCheck className="w-7 h-7 text-[#0b192b]" />
              },
              {
                step: "Step 3",
                title: "Ongoing Medical Care",
                desc: "Continue treatment throughout legal case with regular progress documentation and coordination with your attorney's office.",
                icon: <Stethoscope className="w-7 h-7 text-[#17a2b8]" />
              },
              {
                step: "Step 4",
                title: "Settlement Payment",
                desc: "Medical bills are paid directly from settlement, attorney ensures provider payment, and patient receives remaining settlement funds.",
                icon: <Award className="w-7 h-7 text-[#0b192b]" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#17a2b8]/10 to-transparent text-[#17a2b8] font-black text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  {item.step}
                </div>
                <div>
                  <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits of Letter of Protection ─── */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100" id="lop-benefits">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Benefits of <span className="text-[#0b192b]">Letter of Protection</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Empowering patients with immediate medical care while protecting legal and financial interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* For Accident Victims */}
            <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#17a2b8] text-white p-3 rounded-xl">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b192b]">For Accident Victims</h3>
              </div>

              <ul className="space-y-5 text-gray-700 text-base">
                {[
                  { title: "Immediate Access to Care", desc: "No waiting for insurance approval, treatment begins same day" },
                  { title: "Financial Protection", desc: "No upfront medical costs, no payment until case resolves" },
                  { title: "Enhanced Legal Case", desc: "Comprehensive medical documentation and expert testimony" },
                  { title: "Peace of Mind", desc: "Attorney handles payment arrangements, reduced administrative burden" },
                  { title: "Quality Care", desc: "Access to specialized treatments without cost constraints" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 font-bold block mb-0.5">{item.title}:</strong>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Attorneys */}
            <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#0b192b] text-white p-3 rounded-xl">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b192b]">For Attorneys</h3>
              </div>

              <ul className="space-y-5 text-gray-700 text-base">
                {[
                  { title: "Stronger Case Development", desc: "Immediate medical documentation and comprehensive treatment records" },
                  { title: "Client Care Enhancement", desc: "Remove financial barriers, improve client satisfaction" },
                  { title: "Expert Documentation", desc: "Detailed medical records and expert testimony availability" },
                  { title: "Damage Quantification", desc: "Professional assessment of injury severity and future needs" },
                  { title: "Seamless Coordination", desc: "Direct communication and regular case updates" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <CheckCircle className="w-5 h-5 text-[#0b192b] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 font-bold block mb-0.5">{item.title}:</strong>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Types of Cases Where LOP is Used ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="case-types">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Types of Cases Where <span className="text-[#0b192b]">LOP is Used</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We work with legal teams across a wide spectrum of personal injury and liability litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1: Motor Vehicle */}
            <div className="bg-white p-7 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-blue-50 text-[#0b192b] p-3 rounded-xl inline-block mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Motor Vehicle Accidents</h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  {["Car accidents and collisions", "Motorcycle accidents", "Truck and 18-wheeler accidents", "Pedestrian and bicycle accidents", "Uber/Lyft rideshare accidents"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 2: Personal Injury */}
            <div className="bg-white p-7 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-teal-50 text-[#17a2b8] p-3 rounded-xl inline-block mb-4">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Injury Cases</h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  {["Slip and fall accidents", "Premises liability injuries", "Dog bite incidents", "Product liability cases", "Medical malpractice injuries"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 3: Workers Comp */}
            <div className="bg-white p-7 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-blue-50 text-[#0b192b] p-3 rounded-xl inline-block mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Workers Compensation</h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  {["Workplace injuries", "Construction accidents", "Industrial injuries", "Repetitive strain injuries", "Occupational diseases"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 4: Other Liability */}
            <div className="bg-white p-7 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-teal-50 text-[#17a2b8] p-3 rounded-xl inline-block mb-4">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Other Liability Cases</h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  {["Defective product injuries", "Nursing home negligence", "Sports and recreation injuries", "Assault and violence cases", "Professional negligence"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Medical Services Covered ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="covered-services">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Medical Services Covered Under <span className="text-[#0b192b]">Letter of Protection</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive treatment approach ensures all medically necessary services are available under your Letter of Protection arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Diagnostic Services */}
            <div className="bg-gray-50 p-7 rounded-xl border border-gray-200 flex flex-col">
              <div className="bg-[#17a2b8] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnostic Services</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["X-rays and imaging studies", "MRI and CT scan coordination", "Laboratory testing", "Electromyography (EMG)", "Functional assessments"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Pain Management */}
            <div className="bg-gray-50 p-7 rounded-xl border border-gray-200 flex flex-col">
              <div className="bg-[#0b192b] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pain Management</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Epidural steroid injections", "Facet joint blocks", "Trigger point injections", "Nerve blocks and ablations", "Radiofrequency treatments"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0b192b] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Rehabilitation Services */}
            <div className="bg-gray-50 p-7 rounded-xl border border-gray-200 flex flex-col">
              <div className="bg-[#17a2b8] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rehabilitation Services</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Physical therapy", "Occupational therapy", "Chiropractic care", "Massage therapy", "Exercise therapy programs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Specialized Procedures */}
            <div className="bg-gray-50 p-7 rounded-xl border border-gray-200 flex flex-col">
              <div className="bg-[#0b192b] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Specialized Procedures</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Regenerative medicine", "Platelet-rich plasma (PRP)", "Stem cell therapy", "Minimally invasive procedures", "Surgical consultations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0b192b] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Working with Attorney Partners ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="attorney-partnership">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Working with <span className="text-[#0b192b]">Attorney Partners</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Dedicated communication, expert testimony, and transparent case reporting for legal professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Col 1: Attorney Partnership Network */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0b192b] mb-4">Our Attorney Partnership Network</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Personal injury attorneys", "Workers compensation lawyers", "Medical malpractice attorneys", "Product liability specialists", "Civil litigation attorneys"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Col 2: Seamless Coordination */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0b192b] mb-4">Seamless Coordination</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Direct attorney communication", "Prompt LOP processing", "Regular case updates", "Medical record provision", "Expert testimony availability"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Col 3: Legal Documentation Support */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0b192b] mb-4">Legal Documentation Support</h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li><strong className="text-gray-800 text-sm">Medical Record Services:</strong> Detailed treatment documentation &amp; diagnostic results.</li>
                <li><strong className="text-gray-800 text-sm">Expert Testimony:</strong> Case file review, medical opinions, deposition and trial testimony.</li>
                <li><strong className="text-gray-800 text-sm">Regular Updates:</strong> Treatment progress, diagnostic findings, prognosis assessments.</li>
                <li><strong className="text-gray-800 text-sm">Case Communication:</strong> Direct coordination with legal teams throughout treatment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOP vs. Traditional Payment Methods ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="payment-comparison">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#0b192b]">LOP vs. Traditional Payment</span> Methods
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Understanding the advantages of Letter of Protection compared to traditional payment methods helps you make informed decisions about your medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LOP Advantages */}
            <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-200 shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" /> Letter of Protection Advantages
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  { title: "Immediate Treatment", desc: "No delays waiting for approval" },
                  { title: "No Upfront Costs", desc: "Zero out-of-pocket expenses" },
                  { title: "No Insurance Approval", desc: "Treatment based on medical necessity" },
                  { title: "Comprehensive Care", desc: "Access to all needed treatments" },
                  { title: "Legal Documentation", desc: "Optimized for legal cases" },
                  { title: "Payment at Settlement", desc: "No financial stress during recovery" }
                ].map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 font-bold">{adv.title}: </strong>
                      <span className="text-gray-600 text-sm">{adv.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Limitations */}
            <div className="bg-rose-50/50 p-8 rounded-2xl border border-rose-200 shadow-sm">
              <h3 className="text-2xl font-bold text-rose-800 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-rose-600" /> Traditional Insurance Limitations
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  { title: "Treatment Delays", desc: "Waiting for insurance approval" },
                  { title: "Copays/Deductibles", desc: "Ongoing out-of-pocket costs" },
                  { title: "Coverage Limits", desc: "Restricted treatment options" },
                  { title: "Prior Authorization", desc: "Delays for specialized care" },
                  { title: "Network Restrictions", desc: "Limited provider choices" },
                  { title: "Immediate Payment", desc: "Financial burden during recovery" }
                ].map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-rose-100">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                    <div>
                      <strong className="text-gray-900 font-bold">{lim.title}: </strong>
                      <span className="text-gray-600 text-sm">{lim.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Getting Started with LOP ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="getting-started">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Getting Started with <span className="text-[#0b192b]">Letter of Protection</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Simple criteria and fast turnaround times to initiate your care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Requirements */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0b192b] mb-4">Requirements for LOP Acceptance</h3>
              
              <h4 className="font-bold text-gray-800 text-sm mb-2">Attorney Requirements:</h4>
              <ul className="space-y-1.5 text-xs text-gray-600 mb-4 list-disc ml-4 marker:text-[#17a2b8]">
                <li>Licensed personal injury attorney</li>
                <li>Valid malpractice insurance</li>
                <li>Established legal practice</li>
                <li>Case merit evaluation</li>
              </ul>

              <h4 className="font-bold text-gray-800 text-sm mb-2">Patient Requirements:</h4>
              <ul className="space-y-1.5 text-xs text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                <li>Valid legal case with injury claim</li>
                <li>Medical necessity for treatment</li>
                <li>Compliance with treatment plan</li>
                <li>Cooperation with legal process</li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0b192b] mb-4">LOP Application Process</h3>
              <ol className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="bg-[#17a2b8] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <div><strong className="text-gray-900">Attorney Contact:</strong> Attorney calls our LOP coordinator, case details discussed.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="bg-[#17a2b8] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <div><strong className="text-gray-900">Document Review:</strong> LOP document received and reviewed, terms verified.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="bg-[#17a2b8] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <div><strong className="text-gray-900">Patient Scheduling:</strong> Patient contacts office, evaluation scheduled.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="bg-[#17a2b8] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">4</span>
                  <div><strong className="text-gray-900">Treatment Begins:</strong> Same-day appointments available, treatment plan developed.</div>
                </li>
              </ol>
            </div>

            {/* Processing Times */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0b192b] mb-4">LOP Processing Times</h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-semibold text-gray-800">Routine Setup:</span>
                  <span className="font-bold text-[#17a2b8]">Same business day</span>
                </li>
                <li className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-semibold text-gray-800">Emergency Cases:</span>
                  <span className="font-bold text-[#17a2b8]">Within 2 hours</span>
                </li>
                <li className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-semibold text-gray-800">Complex Cases:</span>
                  <span className="font-bold text-[#17a2b8]">Within 24 hours</span>
                </li>
                <li className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-semibold text-gray-800">Weekend/Holiday:</span>
                  <span className="font-bold text-[#17a2b8]">Emergency line available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Serving North Texas with LOP Services ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="service-area">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Serving North Texas with <span className="text-[#0b192b]">LOP Services</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Letter of Protection coordination team serves attorneys and clients throughout the Dallas-Fort Worth metroplex with immediate response and comprehensive care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <MapPin className="w-8 h-8 text-[#17a2b8] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Primary Service Area</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">
                Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, Farmers Branch, Addison
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Building2 className="w-8 h-8 text-[#0b192b] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Additional Communities</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">
                Allen, Frisco, McKinney, Lewisville, Flower Mound, Grapevine, Bedford, Euless, Hurst, Grand Prairie
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Clock className="w-8 h-8 text-[#17a2b8] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">LOP Coordination Hours</h3>
              <ul className="space-y-1 text-xs text-gray-700 font-medium">
                <li className="flex justify-between"><span>Monday – Friday:</span> <span className="font-bold text-gray-900">7:00 AM – 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span className="font-bold text-gray-900">8:00 AM – 4:00 PM</span></li>
                <li className="flex justify-between"><span>Emergency coordination:</span> <span className="font-bold text-[#17a2b8]">24/7</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 bg-gradient-to-r from-[#0b192b] to-[#163566] text-white" id="lop-coordination">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            🏥 <span className="text-[#17a2b8]">Letter of Protection</span> Coordination
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed font-light">
            A Letter of Protection ensures you get the medical care you need when you need it most. Don't let financial concerns delay your recovery – contact us today to discuss LOP options for your case.
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
              Start LOP Process
            </a>
          </div>
          <p className="text-xs text-blue-200 mt-6 font-medium uppercase tracking-wider">
            Letter of Protection Accepted &nbsp;|&nbsp; Attorney Partnerships &nbsp;|&nbsp; Same-Day Treatment
          </p>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="lop-faq">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions About Letter of Protection</h2>
             <p className="text-gray-600 text-lg">
               Common questions regarding Letter of Protection medical care in Dallas, TX.
             </p>
           </div>

           <div className="space-y-4">
              {[
                {
                  q: "Is a Letter of Protection legally binding?",
                  a: "Yes, when properly executed, an LOP is a legally enforceable contract between the attorney and medical provider, guaranteeing payment from the settlement proceeds."
                },
                {
                  q: "What treatments are covered under LOP?",
                  a: "All medically necessary treatments related to your injury are covered, including diagnostics, therapy, pain management, and specialized procedures as outlined in the LOP agreement."
                },
                {
                  q: "What if my attorney changes during treatment?",
                  a: "The LOP typically transfers to the new attorney, but we'll work with both parties to ensure continuity of care and proper documentation transfer."
                },
                {
                  q: "Can I receive emergency treatment under LOP?",
                  a: "Yes, we provide same-day and emergency appointments for LOP patients. Our coordination team is available 24/7 for urgent medical needs."
                },
                {
                  q: "What if my settlement doesn't cover all medical bills?",
                  a: "This is rare with properly managed cases, but we'll work with you on reasonable payment arrangements if needed. Most LOP cases resolve successfully."
                },
                {
                  q: "How long does LOP coverage last?",
                  a: "Coverage continues until the legal case resolves or terms are modified by mutual agreement between the attorney, patient, and medical provider."
                },
                {
                  q: "Do I pay taxes on settlement money used for medical bills?",
                  a: "Generally no, medical expenses paid from personal injury settlements are not taxable, but consult with your tax advisor for specific guidance."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-gray-800 hover:text-[#0b192b] transition-colors">
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
