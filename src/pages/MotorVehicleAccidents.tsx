import { useState } from 'react';
import { 
  Car, PhoneCall, CheckCircle2, ShieldCheck, Stethoscope, Briefcase, 
  Activity, Zap, Clock, MapPin, AlertCircle, FileText, Scale, ChevronDown, 
  ArrowRight, Home, Phone, Mail, Building2, Truck,
  HelpCircle, Check
} from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function MotorVehicleAccidents() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How soon should I see a doctor after a car accident?",
      a: "You should see a doctor immediately, even if you feel fine. Many serious injuries from motor vehicle accidents have delayed symptoms, and early documentation is crucial for both your health and legal case."
    },
    {
      q: "What if I don't have health insurance?",
      a: "We accept Letters of Protection (LOP) from personal injury attorneys, allowing you to receive treatment with no upfront payment. We also offer flexible payment plans for uninsured patients."
    },
    {
      q: "Will my treatment be covered if the other driver was at fault?",
      a: "In most cases, yes. The at-fault driver's liability insurance may be responsible for your medical expenses. We can coordinate with your attorney and accept a Letter of Protection while your case is pending."
    },
    {
      q: "How long will my treatment take?",
      a: "Treatment length depends on the type and severity of your injuries and how your body responds to care. After your initial evaluation, we’ll create a personalized treatment plan and estimated timeline."
    },
    {
      q: "Can you help me find a personal injury attorney?",
      a: "Yes. We maintain relationships with experienced Dallas personal injury attorneys and can provide referrals to legal partners who regularly handle motor vehicle accident cases."
    },
    {
      q: "Do you provide expert testimony for legal cases?",
      a: "Yes. Dr. Patel can provide expert medical testimony, review medical records, and offer professional opinions regarding your injuries and treatment related to the motor vehicle accident."
    },
    {
      q: "What if my accident happened while I was working?",
      a: "Work-related vehicle accidents may be covered under workers compensation. Our clinic handles both workers’ comp and personal injury cases and can help you navigate your options."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 sm:pt-28 bg-white text-gray-800 antialiased">
      
      {/* ─── Breadcrumb Banner (matching site theme) ─── */}
      <div className="bg-[#f8fbff] py-10 sm:py-14 px-4 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Motor Vehicle Accidents
          </h1>
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-[#1e4682] bg-white w-max px-4 py-2 rounded-md shadow-sm border border-gray-100">
            <Link to="/" className="hover:text-primary-600 transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1.5 text-[#17a2b8]" />
              <span>Home</span>
            </Link>
            <span className="mx-2 text-gray-400">»</span>
            <Link to="/services" className="hover:text-primary-600 transition-colors">Services</Link>
            <span className="mx-2 text-gray-400">»</span>
            <span className="font-semibold text-gray-600">Motor Vehicle Accidents</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gradient-to-b from-white via-[#f4f9fd] to-white py-12 md:py-20 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          {/* Eyebrow & Main Title */}
          <div className="max-w-4xl mb-8">
            <div className="inline-flex items-center gap-2 bg-[#eef7fa] text-[#17a2b8] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase border border-[#d4ecf6] mb-4">
              <Car className="w-4 h-4 text-[#17a2b8]" />
              <span>Auto Accident Injury Clinic in Dallas, TX</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Expert Auto Accident Injury Treatment in <span className="text-[#1e4682]">Dallas, Texas</span>
            </h1>

            {/* Subheading Badges / Highlights */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-gray-700">
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-50 text-[#1e4682] font-semibold border border-blue-100">
                Same-Day Emergency Appointments Available
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-teal-50 text-[#17a2b8] font-semibold border border-teal-100">
                Letter of Protection Accepted
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 font-semibold border border-gray-200">
                No Upfront Costs
              </span>
            </div>
          </div>

          {/* Hero Content Grid: Left Text + Right CTA Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                After a <strong className="font-semibold text-gray-900">motor vehicle accident</strong> in Dallas, getting immediate medical attention isn't just important—it's crucial for your health and legal protection. At <strong className="font-semibold text-[#1e4682]">Spine &amp; Pain Institute of Texas</strong>, Dr. Pritesh Patel, DO, and our specialized team provide comprehensive <strong className="font-semibold text-gray-900">auto accident injury treatment</strong> for patients throughout <strong className="font-semibold text-gray-900">Dallas, Plano, Richardson, Garland, Irving, and North Texas</strong>.
              </p>

              {/* Highlights List */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4682] mb-4">
                  Why Accident Victims Trust Our Care
                </h2>
                <ul className="space-y-3">
                  {[
                    "Same-day and emergency appointments for accident victims",
                    "Comprehensive diagnostics: X-ray, MRI referrals, EMG testing",
                    "Advanced pain management and rehabilitation treatments",
                    "Direct coordination with personal injury attorneys",
                    <span><strong className="font-semibold text-gray-900">Letter of Protection</strong> accepted – no upfront payment required</span>,
                    "All major insurance, PIP, and workers compensation accepted"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                      <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: CTA Box */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#17a2b8]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#17a2b8]/10 rounded-full blur-2xl -z-0"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-2">
                    <Clock className="w-4 h-4" /> Urgent Care Available
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Call Now for Same-Day Care
                  </h2>
                  <div className="my-4">
                    <a 
                      href="tel:+14693130040" 
                      className="inline-flex items-center text-2xl sm:text-3xl font-extrabold text-[#1e4682] hover:text-[#17a2b8] transition-colors"
                    >
                      <PhoneCall className="w-6 h-6 mr-3 text-[#17a2b8]" />
                      (469) 313-0040
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    Get immediate medical evaluation after your <strong className="text-gray-900">car accident</strong> in Dallas.
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="#appointment" 
                      className="block w-full text-center bg-[#17a2b8] hover:bg-[#138496] text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                    >
                      Request a Same-Day Appointment
                    </a>
                    <a 
                      href="tel:+14693130040" 
                      className="block w-full text-center bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg border border-gray-200 transition-colors text-sm sm:text-base"
                    >
                      Call (469) 313-0040
                    </a>
                  </div>

                  <p className="text-xs text-gray-500 mt-5 text-center leading-normal">
                    No upfront costs with qualifying <strong className="text-gray-700">Letter of Protection (LOP)</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Why Choose Our Dallas Auto Accident Clinic? ─── */}
      <section className="py-16 md:py-24 bg-[#f8fbff] border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Dallas <span className="text-[#1e4682]">Auto Accident Clinic</span>?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our clinic is dedicated to helping victims of <strong className="text-gray-800">motor vehicle accidents</strong> in Dallas and across North Texas recover safely and return to daily life as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Activity,
                color: "text-[#17a2b8]",
                bg: "bg-[#eef7fa]",
                border: "border-t-4 border-[#17a2b8]",
                title: "Same-Day & Emergency Care",
                desc: <>We reserve slots for urgent <strong className="text-gray-800">car accident injury</strong> evaluations so you can be seen as soon as possible.</>
              },
              {
                icon: Stethoscope,
                color: "text-[#1e4682]",
                bg: "bg-blue-50",
                border: "border-t-4 border-[#1e4682]",
                title: "Comprehensive Diagnostics",
                desc: "On-site X-rays, MRI and CT referrals, EMG/NCV testing, and detailed physical and neurological exams."
              },
              {
                icon: Zap,
                color: "text-[#17a2b8]",
                bg: "bg-[#eef7fa]",
                border: "border-t-4 border-[#17a2b8]",
                title: "Advanced Pain Management",
                desc: "From injections to regenerative medicine, we personalize your treatment plan to your injuries and goals."
              },
              {
                icon: Briefcase,
                color: "text-[#1e4682]",
                bg: "bg-blue-50",
                border: "border-t-4 border-[#1e4682]",
                title: "Attorney Coordination",
                desc: <>We work directly with <strong className="text-gray-800">personal injury attorneys</strong> and accept <strong className="text-gray-800">Letters of Protection</strong>.</>
              },
              {
                icon: ShieldCheck,
                color: "text-[#17a2b8]",
                bg: "bg-[#eef7fa]",
                border: "border-t-4 border-[#17a2b8]",
                title: "No Upfront Costs",
                desc: <>For qualifying personal injury cases, we provide care under a <strong className="text-gray-800">Letter of Protection</strong> with no upfront payment.</>
              },
              {
                icon: MapPin,
                color: "text-[#1e4682]",
                bg: "bg-blue-50",
                border: "border-t-4 border-[#1e4682]",
                title: "North Texas Coverage",
                desc: "Serving patients from Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, Farmers Branch, Addison, and beyond."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow ${item.border} border-x border-b border-gray-100`}
              >
                <div className={`w-12 h-12 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Types of Motor Vehicle Accidents We Treat ─── */}
      <section id="mva-types" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-3">
              <Car className="w-4 h-4" /> Collision Types
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of <span className="text-[#1e4682]">Motor Vehicle Accidents</span> We Treat
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Dallas sees thousands of <strong className="text-gray-800">motor vehicle collisions</strong> each year. Whether your crash happened on I-35, I-635, US-75, or a city street, our team understands the unique injury patterns associated with different types of accidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Car Accidents in Dallas */}
            <div className="bg-gradient-to-br from-white to-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Car Accidents in Dallas
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                We treat injuries from all types of <strong className="text-gray-800">car accidents</strong>, including:
              </p>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Rear-end collisions – common in heavy Dallas traffic",
                  "Side-impact (T-bone) crashes – frequent at busy intersections",
                  "Head-on collisions – often cause severe, multi-system trauma",
                  "Multi-vehicle pile-ups – common on Dallas highways",
                  "Hit-and-run accidents – thorough documentation to support your legal case"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-2 mr-2.5 shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Motorcycle Accidents */}
            <div className="bg-gradient-to-br from-white to-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#17a2b8] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Motorcycle Accidents
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Motorcyclists are especially vulnerable in a <strong className="text-gray-800">motor vehicle accident</strong>. We treat:
              </p>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Road rash and skin injuries",
                  "Broken bones and fractures",
                  "Traumatic brain injuries",
                  "Spinal cord injuries",
                  "Internal injuries and organ trauma"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-2 mr-2.5 shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Truck & 18-Wheeler Accidents */}
            <div className="bg-gradient-to-br from-white to-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Truck &amp; 18-Wheeler Accidents
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Commercial truck and 18-wheeler collisions often result in devastating injuries. Our clinic is equipped to manage:
              </p>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Multi-trauma injuries",
                  "Spinal compression fractures",
                  "Severe soft tissue damage",
                  "Complex, long-term rehabilitation needs"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-2 mr-2.5 shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Pedestrian & Bicycle Accidents */}
            <div className="bg-gradient-to-br from-white to-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#17a2b8] flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Pedestrian &amp; Bicycle Accidents
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Pedestrians and cyclists struck by a car often suffer:
              </p>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Orthopedic injuries and fractures",
                  "Head and brain trauma",
                  "Multiple fractures and dislocations",
                  "Extensive soft tissue injuries"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-2 mr-2.5 shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Common Auto Accident Injuries We Treat ─── */}
      <section id="mva-injuries" className="py-16 md:py-24 bg-[#f8fbff] border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1e4682] mb-3">
              <Stethoscope className="w-4 h-4" /> Diagnostic &amp; Treatment Scope
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Auto Accident Injuries We Treat
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Even a “minor” <strong className="text-gray-800">motor vehicle accident</strong> can cause significant injuries. Our Dallas <strong className="text-gray-800">auto accident injury clinic</strong> evaluates and treats a wide range of trauma-related conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Neck & Spine */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Neck &amp; Spine Injuries
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Whiplash and cervical strain",
                  "Herniated discs with radiating pain",
                  "Spinal compression fractures",
                  "Facet joint injuries",
                  "Cervical radiculopathy (arm pain and numbness)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back Injuries */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#17a2b8] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Back Injuries
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Lumbar strains and sprains",
                  "Disc herniation and bulging discs",
                  "Compression fractures",
                  "Sacroiliac joint dysfunction",
                  "Muscle spasms and chronic tension"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Tissue Injuries */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Soft Tissue Injuries
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Muscle strains and tears",
                  "Ligament sprains",
                  "Contusions and bruising",
                  "Myofascial pain syndrome",
                  "Trigger points and painful muscle knots"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neurological Injuries */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#17a2b8] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Neurological Injuries
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Concussions and mild traumatic brain injury",
                  "Post-concussion syndrome",
                  "Nerve compression and entrapment",
                  "Peripheral neuropathy",
                  "Cognitive and memory difficulties"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Joint & Extremity Injuries */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-gray-200 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Joint &amp; Extremity Injuries
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Shoulder impingement and rotator cuff tears",
                  "Knee injuries (MCL, ACL, meniscus)",
                  "Wrist and hand trauma",
                  "Hip and pelvis injuries",
                  "Ankle and foot injuries"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Same-day prompt card to complete grid */}
            <div className="bg-gradient-to-br from-[#1e4682] to-[#163566] text-white rounded-xl p-6 sm:p-7 shadow-md flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <span className="inline-block text-xs uppercase font-bold tracking-wider text-teal-300 mb-2">Immediate Evaluation</span>
                <h3 className="text-xl font-bold mb-3">Injured in an Accident?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Don't wait for symptoms to worsen. Early medical evaluation is critical for recovery and legal documentation.
                </p>
              </div>
              <a 
                href="#appointment" 
                className="inline-flex items-center justify-center w-full bg-[#17a2b8] hover:bg-[#138496] text-white py-3 rounded-lg font-bold transition-colors text-sm"
              >
                Schedule Evaluation <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── What to Do Immediately After a Car Accident in Dallas ─── */}
      <section id="after-accident" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-3">
              <Clock className="w-4 h-4" /> Step-by-Step Response
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Do Immediately After a Car Accident in Dallas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Step 1: At the Accident Scene */}
            <div className="bg-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-9 h-9 rounded-full bg-[#17a2b8] text-white font-bold flex items-center justify-center text-base">
                  1
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  At the Accident Scene
                </h3>
              </div>

              <ol className="space-y-4 text-gray-700 text-sm sm:text-base">
                {[
                  { bold: "Ensure safety first", text: "Move to a safe area if possible and turn on hazard lights." },
                  { bold: "Call 911", text: "Report the accident and request medical assistance if anyone is injured." },
                  { bold: "Document everything", text: "Take photos of vehicles, injuries, and road conditions." },
                  { bold: "Gather information", text: "Exchange driver’s license, insurance, and contact details." },
                  { bold: "Do not admit fault", text: "Stick to the facts when speaking with police." },
                  { bold: "Seek medical attention", text: "Even if you feel “fine” at the scene." }
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="font-bold text-[#17a2b8] mr-3 mt-0.5 shrink-0">{idx + 1}.</span>
                    <div>
                      <strong className="font-semibold text-gray-900">{step.bold}</strong> – {step.text}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Step 2: Within 24 Hours */}
            <div className="bg-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-[#1e4682] text-white font-bold flex items-center justify-center text-base">
                    2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Within 24 Hours
                  </h3>
                </div>

                <ol className="space-y-4 text-gray-700 text-sm sm:text-base mb-8">
                  {[
                    { bold: "Call our Dallas clinic", text: "for a same-day injury evaluation." },
                    { bold: "Contact a personal injury attorney", text: "to protect your legal rights." },
                    { bold: "Notify your insurance company", text: "and report the accident." },
                    { bold: "Keep detailed records", text: "of symptoms, missed work, and expenses." },
                    { bold: "Follow through with treatment", text: "– do not delay medically-necessary care." }
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="font-bold text-[#1e4682] mr-3 mt-0.5 shrink-0">{idx + 1}.</span>
                      <div>
                        <strong className="font-semibold text-gray-900">{step.bold}</strong> {step.text}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Note Callout */}
              <div className="bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-200/70 text-amber-900 text-xs sm:text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    Many serious <strong className="font-semibold">auto accident injuries</strong> have delayed symptoms. Adrenaline and shock can mask pain for hours or days. Early medical evaluation is crucial for both your health and your legal case.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── Comprehensive Diagnostic Services ─── */}
      <section id="diagnostics" className="py-16 md:py-24 bg-[#f8fbff] border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1e4682] mb-3">
              <Stethoscope className="w-4 h-4" /> State-of-the-art Testing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Diagnostic Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Advanced Imaging & Testing */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Advanced Imaging &amp; Testing
                </h3>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Digital X-rays – immediate, on-site imaging",
                  "MRI referrals – detailed soft tissue evaluation",
                  "CT scan coordination – when fractures are suspected",
                  "EMG/NCV testing – assessment of nerve damage",
                  "Functional movement screening – biomechanical analysis"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized Evaluations */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#17a2b8] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Specialized Evaluations
                </h3>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Neurological examinations – brain and nerve function",
                  "Orthopedic assessments – joints and bone injuries",
                  "Cognitive testing – concussion and brain injury screening",
                  "Range of motion analysis – functional limitations",
                  "Pain assessment scales – documenting pain and impact on daily life"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Advanced Treatment Options for Motor Vehicle Accident Injuries ─── */}
      <section id="treatment" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-3">
              <Zap className="w-4 h-4" /> Customized Healing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Treatment Options for <span className="text-[#1e4682]">Motor Vehicle Accident</span> Injuries
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We customize your treatment plan based on your injuries, goals, and lifestyle. Our approach combines interventional pain management, rehabilitation, and regenerative techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pain Management Therapies */}
            <div className="bg-[#fbfdff] rounded-xl p-6 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-colors">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">
                Pain Management Therapies
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                {[
                  "Epidural steroid injections",
                  "Facet joint blocks",
                  "Trigger point injections",
                  "Nerve blocks",
                  "Radiofrequency ablation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-1.5 mr-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rehabilitation Services */}
            <div className="bg-[#fbfdff] rounded-xl p-6 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-colors">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">
                Rehabilitation Services
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                {[
                  "Physical therapy",
                  "Chiropractic care",
                  "Occupational therapy",
                  "Massage therapy",
                  "Customized exercise therapy programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-1.5 mr-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regenerative Medicine */}
            <div className="bg-[#fbfdff] rounded-xl p-6 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-colors">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">
                Regenerative Medicine
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                {[
                  "Platelet-rich plasma (PRP)",
                  "Stem cell therapy",
                  "Prolotherapy",
                  "Hyaluronic acid injections"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-1.5 mr-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized Techniques */}
            <div className="bg-[#fbfdff] rounded-xl p-6 border border-gray-200 shadow-sm hover:border-[#17a2b8]/50 transition-colors">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">
                Specialized Techniques
              </h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                {[
                  "Graston Technique",
                  "Dry needling",
                  "Kinesiology taping",
                  "Therapeutic ultrasound",
                  "Electrical stimulation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-1.5 mr-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Letter of Protection (LOP) for Motor Vehicle Accident Cases ─── */}
      <section id="letter-of-protection" className="py-16 md:py-24 bg-[#f8fbff] border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-3">
              <FileText className="w-4 h-4" /> Legal &amp; Financial Protection
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Letter of Protection (LOP) for <span className="text-[#1e4682]">Motor Vehicle Accident</span> Cases
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A <strong className="font-semibold text-gray-900">Letter of Protection (LOP)</strong> is a legal agreement between your personal injury attorney and our medical practice that guarantees payment for your treatment from your future settlement. This allows you to receive the <strong className="font-semibold text-gray-900">motor vehicle accident injury care</strong> you need without worrying about immediate medical bills.
            </p>
          </div>

          {/* Two-Column: What it means & How process works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* What a Letter of Protection Means for You */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ShieldCheck className="w-6 h-6 text-[#17a2b8] mr-2.5" />
                What a Letter of Protection Means for You
              </h3>
              <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
                {[
                  "No upfront payment required",
                  "Immediate access to comprehensive care",
                  "Treatment continues throughout your legal case",
                  "Medical bills paid directly from settlement funds"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3 mt-0.5 shrink-0 border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Our LOP Process Works */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-[#1e4682] mr-2.5" />
                How Our LOP Process Works
              </h3>
              <ol className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Your attorney sends us a Letter of Protection.",
                  "We schedule a same-day or next-day appointment.",
                  "Comprehensive evaluation and ongoing treatment begin.",
                  "We provide detailed medical documentation for your case.",
                  "Payment is made from your settlement once your case resolves."
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#1e4682] font-bold flex items-center justify-center mr-3 text-xs shrink-0 mt-0.5 border border-blue-100">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          {/* Benefits for Accident Victims */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Benefits for Accident Victims
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
              {[
                "Focus on healing, not medical bills.",
                "Access to specialized treatments usually covered in personal injury cases.",
                "Comprehensive documentation to support your claim.",
                "Expert testimony available when needed.",
                "Seamless coordination between your medical team and legal team."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] mr-2.5 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ─── Working with Personal Injury Attorneys ─── */}
      <section id="attorney-collaboration" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1e4682] mb-3">
              <Scale className="w-4 h-4" /> Legal Partnership
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Working with Personal Injury Attorneys
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We partner closely with <strong className="text-gray-800">Dallas personal injury attorneys</strong> to support patients injured in <strong className="text-gray-800">motor vehicle accidents</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* For Your Legal Team */}
            <div className="bg-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  For Your Legal Team
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {[
                  "Detailed medical documentation and reports",
                  "Expert medical testimony and depositions",
                  "Timely communication and case updates",
                  "Comprehensive diagnostic evaluations",
                  "Long-term prognosis and impairment ratings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Accident Victims */}
            <div className="bg-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#17a2b8] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  For Accident Victims
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {[
                  "Attorney referrals to trusted legal partners when needed",
                  "Seamless coordination between medical and legal care",
                  "Support and education throughout the legal process",
                  "Protection of your rights and interests"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#17a2b8] mt-1 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Medical Documentation for Legal Cases */}
          <div className="bg-blue-50/60 rounded-2xl p-6 sm:p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-[#1e4682] mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2.5 text-[#17a2b8]" />
              Medical Documentation for Legal Cases
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm sm:text-base">
              {[
                "Initial injury assessments and diagnoses",
                "Detailed treatment plans and progress notes",
                "Diagnostic test results and imaging reports",
                "Functional capacity evaluations",
                "Expert medical opinions and prognosis"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e4682] mt-2 mr-2.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ─── Why Immediate Treatment After a Motor Vehicle Accident Is Critical ─── */}
      <section id="why-immediate-treatment" className="py-16 md:py-24 bg-[#f8fbff] border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-3">
              <AlertCircle className="w-4 h-4" /> Timely Intervention
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Immediate Treatment After a <span className="text-[#1e4682]">Motor Vehicle Accident</span> Is Critical
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Medical Reasons */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Medical Reasons
                </h3>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Prevent minor injuries from becoming chronic conditions.",
                  "Reduce inflammation and tissue damage early.",
                  "Restore function faster with timely intervention.",
                  "Identify hidden injuries that may not show symptoms immediately."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-1 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Reasons */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e4682] flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Legal Reasons
                </h3>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm sm:text-base">
                {[
                  "Create an official medical record linking injuries to your accident.",
                  "Strengthen your legal case by showing you took your injuries seriously.",
                  "Establish a clear timeline of symptoms and treatment.",
                  "Provide expert medical opinions that support your claim."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#1e4682] mt-1 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Insurance & Payment Options ─── */}
      <section id="insurance" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1e4682] mb-3">
              <ShieldCheck className="w-4 h-4" /> Clear Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insurance &amp; Payment Options
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our goal is to make <strong className="text-gray-800">motor vehicle accident injury treatment</strong> as accessible as possible for patients across Dallas and North Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* We Accept */}
            <div className="bg-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-[#17a2b8] mr-2.5" />
                We Accept:
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {[
                  "All major health insurance plans",
                  "Personal Injury Protection (PIP) coverage",
                  "Medical Payments (MedPay) coverage",
                  "Workers compensation (for work-related vehicle accidents)",
                  "Letters of Protection from attorneys",
                  "Cash payments and flexible payment plans"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-2 mr-2.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No-Fault & At-Fault Insurance in Texas */}
            <div className="bg-[#fbfdff] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                No-Fault &amp; At-Fault Insurance in Texas
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Texas is an <strong className="text-gray-800">at-fault state</strong>, but your PIP coverage may provide immediate benefits regardless of who caused the crash:
              </p>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {[
                  "Coverage for medical expenses up to policy limits",
                  "Replacement of lost wages",
                  "Reimbursement for essential services",
                  "No need to determine fault before using your PIP benefits"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#1e4682] mt-1 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Serving All of North Texas ─── */}
      <section id="service-area" className="py-16 md:py-24 bg-[#f8fbff] border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a2b8] mb-3">
              <MapPin className="w-4 h-4" /> Regional Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of North Texas
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our clinic is centrally located in Dallas with convenient access from major highways, making it easy for <strong className="text-gray-800">motor vehicle accident</strong> patients across North Texas to receive care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Communities */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1e4682] mb-2 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-[#17a2b8]" />
                  Primary Service Area
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, Farmers Branch, Addison
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-[#1e4682] mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-[#17a2b8]" />
                  Additional Communities
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Allen, Frisco, McKinney, Lewisville, Flower Mound, Grapevine, Bedford, Euless, Hurst, Grand Prairie, Lancaster, DeSoto, Duncanville
                </p>
              </div>
            </div>

            {/* Major Highways */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="w-5 h-5 mr-2 text-[#1e4682]" />
                Easy Access from Major Highways
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {[
                  "I-35E (Stemmons Freeway)",
                  "I-635 (LBJ Freeway)",
                  "US-75 (Central Expressway)",
                  "I-30 (Tom Landry Freeway)",
                  "Loop 12 (Walton Walker Boulevard)"
                ].map((hw, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#17a2b8] mr-3 shrink-0"></span>
                    <span className="font-medium text-gray-800">{hw}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Schedule Your Same-Day Motor Vehicle Accident Evaluation ─── */}
      <section id="mva-appointment-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          <div className="bg-gradient-to-br from-[#1e4682] to-[#122e5a] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#17a2b8]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-teal-200 mb-6 border border-white/15">
                <Clock className="w-4 h-4" /> Immediate Evaluations
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Schedule Your Same-Day <span className="text-[#38c1da]">Motor Vehicle Accident</span> Evaluation
              </h2>

              <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed font-light">
                If you've been injured in a <strong className="font-semibold text-white">car, truck, motorcycle, or pedestrian accident</strong> in Dallas or North Texas, don’t wait. Early evaluation protects your health and strengthens your legal case.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+14693130040" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1e4682] font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 mr-2.5 text-[#17a2b8]" />
                  Call (469) 313-0040 Now
                </a>

                <a 
                  href="#appointment" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#17a2b8] hover:bg-[#138496] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg border border-teal-400/30 transition-transform hover:-translate-y-0.5"
                >
                  Request Appointment Online
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-blue-100 font-light">
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-teal-300" /> Letter of Protection Accepted
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-teal-300" /> No Upfront Out-of-Pocket Cost
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-teal-300" /> Same-Day Urgent Slots
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Frequently Asked Questions About Motor Vehicle Accident Care ─── */}
      <section id="mva-faq" className="py-16 md:py-24 bg-[#f8fbff] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1e4682] mb-3">
              <HelpCircle className="w-4 h-4 text-[#17a2b8]" /> Patient Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About <span className="text-[#1e4682]">Motor Vehicle Accident</span> Care
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-xl transition-all border ${
                    isOpen 
                      ? 'border-[#1e4682] shadow-md overflow-hidden' 
                      : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)} 
                    className={`w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors ${
                      isOpen ? 'bg-[#1e4682] text-white font-semibold' : 'bg-white text-gray-900 font-bold'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-teal-300' : 'text-[#17a2b8]'}`} />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom FAQ Help Box */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              Have questions about your specific accident or insurance coverage?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
              <a href="tel:+14693130040" className="inline-flex items-center text-[#1e4682] hover:underline">
                <Phone className="w-4 h-4 mr-1.5 text-[#17a2b8]" /> 469-313-0040
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:info@texasspinepain.com" className="inline-flex items-center text-[#1e4682] hover:underline">
                <Mail className="w-4 h-4 mr-1.5 text-[#17a2b8]" /> info@texasspinepain.com
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
