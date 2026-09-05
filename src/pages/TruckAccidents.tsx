import { 
  Truck, PhoneCall, CheckCircle, ShieldCheck, AlertTriangle, HelpCircle, 
  ChevronRight, Activity, Crosshair, FileText, Zap, Stethoscope, Award, 
  MapPin, Building2, UserCheck, AlertCircle, Scale, Clock
} from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function TruckAccidents() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* ─── Emergency Hero Banner ─── */}
      <section className="bg-gradient-to-br from-[#1e4682] via-[#163566] to-[#0f2447] py-16 lg:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop"
          alt="18-Wheeler Truck Accident Care"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl">
          <div className="inline-flex items-center bg-red-500/90 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold mb-6 border border-red-300/40 text-xs sm:text-sm uppercase tracking-wider shadow-md">
            <AlertTriangle className="w-4 h-4 mr-2" /> 18-Wheeler Accident Treatment – Dallas, TX
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                Specialized Care for <span className="text-red-400">Truck Accident Victims</span> in Dallas
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 font-medium mb-6 leading-relaxed">
                Immediate Medical Attention &nbsp;|&nbsp; Letter of Protection Accepted &nbsp;|&nbsp; Truck Accident Specialists
              </p>

              <p className="text-base text-gray-200 mb-8 leading-relaxed font-light">
                <strong className="text-white font-semibold">18-wheeler accidents</strong> are among the most devastating motor vehicle collisions due to the massive size and weight disparity between commercial trucks and passenger vehicles. At <strong className="text-white font-semibold">Spine &amp; Pain Institute of Texas</strong>, Dr. Pritesh Patel, DO understands the unique medical challenges that <strong className="text-white font-semibold">truck accident victims</strong> face in Dallas and North Texas.
              </p>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm sm:text-base font-medium">
                {[
                  "🚨 Emergency Appointments Available for Truck Accident Victims",
                  "Specialized treatment for catastrophic truck accident injuries",
                  "Expert testimony and comprehensive legal documentation",
                  "Letter of Protection accepted – no upfront payment required",
                  "24/7 emergency care for severe truck accident trauma",
                  "Coordination with truck accident attorneys"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <CheckCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-gray-100 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right CTA Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="inline-block bg-red-50 text-red-600 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-red-100">
                  Critical Trauma Care
                </div>

                <h2 className="text-2xl font-bold text-[#1e4682] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Emergency Truck Accident Care
                </h2>

                <a
                  href="tel:4693130040"
                  className="inline-flex items-center text-2xl sm:text-3xl font-extrabold text-red-600 hover:text-[#1e4682] transition-colors mb-4"
                >
                  <PhoneCall className="w-7 h-7 mr-3 shrink-0" />
                  (469) 313-0040
                </a>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Call immediately for <strong className="text-gray-800">truck accident</strong> medical evaluation.
                </p>

                <a
                  href="#appointment"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold text-base transition-colors shadow-lg mb-4 hover:shadow-xl"
                >
                  Emergency Appointment
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Clock className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Time is critical after an 18-wheeler accident. Don't wait.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why 18-Wheeler Accidents Require Specialized Care ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why <span className="text-[#1e4682]">18 Wheeler Accidents</span> Require Specialized Medical Care
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Commercial trucks can weigh up to 80,000 pounds—40 times heavier than passenger cars. This massive weight differential creates devastating injuries that require immediate, specialized treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-500 border-x border-b border-gray-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Massive Weight Differential</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Passenger cars: 2,000–4,000 pounds vs. Loaded 18-wheelers: Up to 80,000 pounds. Force of impact increases exponentially with weight.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#17a2b8] border-x border-b border-gray-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <AlertTriangle className="w-8 h-8 text-[#17a2b8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Complex Accident Dynamics</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jackknife accidents, trailer swing and rollover, multi-vehicle pile-ups, and cargo spillage hazards create multiple trauma scenarios.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#1e4682] border-x border-b border-gray-200 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div>
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Zap className="w-8 h-8 text-[#1e4682]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Multiple Impact Scenarios</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Initial collision with truck cab, secondary impact with trailer, potential crushing under truck, and risk of being dragged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Catastrophic 18 Wheeler Accident Injuries We Treat ─── */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100" id="truck-injuries">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Catastrophic <span className="text-[#1e4682]">18 Wheeler Accident Injuries</span> We Treat
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Truck accidents typically cause more severe, life-threatening injuries than standard car accidents. Our Dallas clinic specializes in treating the complex trauma associated with commercial vehicle collisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Spinal Injuries */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4">
                  Spinal Trauma
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-4">Severe Spinal Injuries</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Spinal cord damage and paralysis",
                    "Multiple vertebral fractures",
                    "Severe disc herniation and rupture",
                    "Spinal stenosis from compression",
                    "Complete spinal cord transection"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Traumatic Brain Injuries */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-blue-100 text-[#1e4682] font-bold px-3 py-1 rounded-full text-xs inline-block mb-4">
                  Head &amp; Brain
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-4">Traumatic Brain Injuries</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Severe concussions",
                    "Intracranial bleeding",
                    "Cognitive impairment",
                    "Memory and concentration issues",
                    "Post-traumatic brain syndrome"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#17a2b8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multiple Trauma Injuries */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4">
                  Systemic Trauma
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-4">Multiple Trauma Injuries</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Multiple bone fractures",
                    "Internal organ damage",
                    "Severe soft tissue injuries",
                    "Crush injuries and amputations",
                    "Life-threatening hemorrhaging"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Complex Neck & Back */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="bg-teal-100 text-[#17a2b8] font-bold px-3 py-1 rounded-full text-xs inline-block mb-4">
                  Cervical &amp; Lumbar
                </div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-4">Complex Neck &amp; Back Injuries</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Severe whiplash with neurological symptoms",
                    "Cervical spine fractures",
                    "Thoracic and lumbar compression fractures",
                    "Facet joint disruption",
                    "Ligament and tendon ruptures"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#17a2b8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Critical Actions After an 18-Wheeler Accident ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="after-truck-accident">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Critical Actions After an <span className="text-[#1e4682]">18 Wheeler Accident</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Steps to protect your health, document the scene, and safeguard your legal claim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* At the Scene */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-md border-t-4 border-t-[#17a2b8]">
              <h3 className="text-2xl font-bold text-[#1e4682] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#17a2b8] text-white flex items-center justify-center text-sm font-bold">1</span>
                At the Scene (If Physically Able)
              </h3>
              <ol className="space-y-4 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Ensure Safety First</strong> – Move away from traffic, watch for fuel spills or fire hazards</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Call Emergency Services</strong> – 911 for police and medical response, request ambulance even if you feel "okay"</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Document Everything</strong> – Photos of truck, trailer, your vehicle, and injuries</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Get Truck Information</strong> – Commercial license, trucking company name, DOT numbers</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Preserve Evidence</strong> – Don't move vehicles, photograph skid marks and debris</div>
                </li>
              </ol>
            </div>

            {/* Within 24 Hours */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-md border-t-4 border-t-red-500">
              <h3 className="text-2xl font-bold text-[#1e4682] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                Within 24 Hours
              </h3>
              <ol className="space-y-4 text-gray-700 text-sm sm:text-base mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Seek Immediate Medical Attention</strong> – Many truck accident injuries have delayed symptoms</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Contact Legal Representation</strong> – Truck accidents involve complex liability issues</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Call Our Emergency Line</strong> – (469) 313-0040 for immediate medical evaluation</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Document Symptoms</strong> – Keep detailed records of pain and limitations</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div><strong className="text-gray-900 font-bold">Preserve Medical Evidence</strong> – Early documentation is crucial for legal cases</div>
                </li>
              </ol>

              <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-xs text-red-700 leading-relaxed font-medium">
                <strong className="text-red-800 font-bold">Critical:</strong> Adrenaline can mask severe injuries for hours or days. Some injuries worsen without prompt treatment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Common Causes of 18 Wheeler Accidents ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="truck-accident-causes">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Common Causes of <span className="text-[#1e4682]">18 Wheeler Accidents</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Identifying causation factors is vital for establishing liability and supporting your legal claim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Driver-Related */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">Driver-Related Factors</h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li><strong className="text-gray-900">Driver Fatigue:</strong> Hours of Service violations, inadequate rest periods</li>
                <li><strong className="text-gray-900">Distracted Driving:</strong> Cell phone use, GPS navigation, CB radio distractions</li>
                <li><strong className="text-gray-900">Impaired Driving:</strong> Alcohol, drugs, prescription medications</li>
                <li><strong className="text-gray-900">Reckless Driving:</strong> Excessive speeding, following too closely</li>
              </ul>
            </div>

            {/* Mechanical & Maintenance */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">Mechanical &amp; Maintenance</h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li><strong className="text-gray-900">Brake Failures:</strong> Inadequate maintenance, overheated brake systems</li>
                <li><strong className="text-gray-900">Tire Problems:</strong> Blowouts, inadequate tread depth, improper pressure</li>
                <li><strong className="text-gray-900">Equipment Malfunctions:</strong> Steering failures, transmission problems</li>
                <li><strong className="text-gray-900">Coupling Defects:</strong> Trailer separation, hitch failures</li>
              </ul>
            </div>

            {/* Loading & Cargo */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">Loading &amp; Cargo Issues</h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li><strong className="text-gray-900">Overloading:</strong> Exceeding weight limits, improper distribution</li>
                <li><strong className="text-gray-900">Unsecured Cargo:</strong> Shifting loads during transport</li>
                <li><strong className="text-gray-900">Hazardous Materials:</strong> Improper handling of dangerous cargo</li>
                <li><strong className="text-gray-900">Loading Violations:</strong> Failure to follow federal regulations</li>
              </ul>
            </div>

            {/* Federal Regulations */}
            <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-[#1e4682] mb-4 pb-2 border-b border-gray-200">Federal Regulation Violations</h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li><strong className="text-gray-900">Hours of Service:</strong> Exceeding maximum driving time limits</li>
                <li><strong className="text-gray-900">Driver Qualifications:</strong> Inadequate licensing or training</li>
                <li><strong className="text-gray-900">Vehicle Inspections:</strong> Failure to maintain proper records</li>
                <li><strong className="text-gray-900">Drug &amp; Alcohol Testing:</strong> Non-compliance with testing requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Specialized Treatment ─── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100" id="treatment">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Specialized Treatment for <span className="text-[#1e4682]">Truck Accident Injuries</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Truck accident injuries require intensive, multidisciplinary treatment approaches. Our comprehensive care addresses both immediate trauma and long-term rehabilitation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Emergency Assessment */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-red-600 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency Assessment</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Full trauma assessment", "Neurological examination", "Spinal imaging (X-ray, CT, MRI)", "Cognitive function testing", "Emergency stabilization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500 shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Pain Management */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#1e4682] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pain Management</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Epidural steroid injections", "Facet joint blocks", "Nerve blocks and ablations", "Trigger point injections", "Regenerative medicine therapies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#1e4682] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Rehabilitation Services */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#17a2b8] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rehabilitation Services</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Physical therapy for mobility restoration", "Occupational therapy for daily living", "Cognitive rehabilitation for brain injuries", "Speech therapy coordination", "Psychological trauma support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#17a2b8] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Long-Term Care Planning */}
            <div className="bg-white p-7 rounded-xl shadow-md border border-gray-200 flex flex-col">
              <div className="bg-[#1e4682] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Long-Term Care Planning</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 flex-grow">
                {["Functional capacity evaluations", "Permanent impairment assessment", "Adaptive equipment needs", "Quality of life evaluation", "Future medical needs planning"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#1e4682] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Legal Coordination for Truck Accident Cases ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="legal-coordination">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Legal Coordination for <span className="text-[#1e4682]">Truck Accident Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Seamless medical documentation and expert testimony for complex commercial trucking litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Liability & Compliance */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-3">Complex Liability Issues</h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li>Truck driver negligence</li>
                  <li>Trucking company responsibility</li>
                  <li>Vehicle manufacturer defects</li>
                  <li>Maintenance company liability</li>
                  <li>Cargo loading company fault</li>
                  <li>Multiple insurance carriers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-3">Federal Regulation Compliance</h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li>Hours of Service violations</li>
                  <li>Drug and alcohol testing</li>
                  <li>Vehicle inspection requirements</li>
                  <li>Driver qualification standards</li>
                </ul>
              </div>
            </div>

            {/* Documentation & Testimony */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-3">Comprehensive Medical Documentation</h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li>Detailed injury assessments</li>
                  <li>Treatment plans and progress notes</li>
                  <li>Diagnostic imaging results</li>
                  <li>Expert medical opinions</li>
                  <li>Long-term prognosis reports</li>
                  <li>Future medical needs assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1e4682] mb-3">Expert Testimony Services</h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li>Medical causation opinions</li>
                  <li>Injury severity documentation</li>
                  <li>Treatment necessity justification</li>
                  <li>Permanent impairment ratings</li>
                  <li>Life care planning support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Letter of Protection for Truck Accidents ─── */}
      <section className="py-20 bg-gradient-to-r from-[#1e4682] to-[#163566] text-white" id="letter-of-protection">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#17a2b8] text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Financial Protection
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Letter of Protection for <span className="text-[#17a2b8]">Truck Accidents</span>
            </h2>
            <p className="text-blue-100 text-lg font-light leading-relaxed">
              Truck accident injuries often require extensive, expensive treatment. A Letter of Protection ensures you receive immediate comprehensive care without financial barriers while your legal case is pending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#17a2b8]" /> Why LOP is Crucial for Truck Accidents
              </h3>
              <ul className="space-y-3.5 text-blue-50 text-base">
                {[
                  "Injuries often require extensive treatment",
                  "Multiple specialties may be needed",
                  "Long-term rehabilitation is common",
                  "Costs can be overwhelming",
                  "Treatment cannot wait for case resolution"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#17a2b8]" /> How We Facilitate LOP
                </h3>
                <ol className="space-y-3.5 text-blue-50 text-base">
                  {[
                    "Work directly with your attorney",
                    "Begin comprehensive treatment immediately",
                    "Provide detailed medical documentation",
                    "Coordinate with legal team throughout care",
                    "Support case with expert testimony"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="bg-[#17a2b8] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  to="/letter-of-protection"
                  className="block text-center bg-[#17a2b8] hover:bg-[#138496] text-white py-3 rounded-xl font-bold transition-colors text-sm shadow-md"
                >
                  Learn More About Letter of Protection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Serving North Texas Truck Accident Victims ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="service-area">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Serving North Texas <span className="text-[#1e4682]">Truck Accident Victims</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our clinic provides emergency truck accident care throughout the Dallas-Fort Worth metroplex, with immediate access from major trucking routes and highways.
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
              <Truck className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Major Trucking Routes</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">
                I-35E, I-635 (LBJ), US-75 (Central Expressway), I-30, Loop 12, I-20, I-45
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Building2 className="w-8 h-8 text-[#1e4682] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Response Areas</h3>
              <ul className="space-y-1 text-xs text-gray-700 font-medium">
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

      {/* ─── Emergency CTA Banner ─── */}
      <section className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-[#1e4682] text-white" id="truck-appointment-form">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 flex items-center justify-center gap-3">
            🚨 Emergency <span className="text-red-200">Truck Accident</span> Care
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-10 leading-relaxed font-light">
            Time is critical after an 18-wheeler accident. Don't wait – call immediately for medical evaluation even if you feel okay. Many serious injuries from truck accidents have delayed symptoms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4693130040"
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg w-full sm:w-auto"
            >
              Call (469) 313-0040 Now
            </a>
            <a
              href="#appointment"
              className="bg-black/20 hover:bg-black/30 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors w-full sm:w-auto"
            >
              Emergency Appointment
            </a>
          </div>
          <p className="text-xs text-red-200 mt-6 font-medium uppercase tracking-wider">
            Letter of Protection Accepted &nbsp;|&nbsp; Attorney Partnerships &nbsp;|&nbsp; 24/7 Emergency Care
          </p>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="truck-faq">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions About Truck Accident Care</h2>
             <p className="text-gray-600 text-lg">
               Common questions about 18-wheeler injury medical treatment in Dallas, TX.
             </p>
           </div>

           <div className="space-y-4">
              {[
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
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-gray-800 hover:text-[#1e4682] transition-colors">
                    <span className="flex items-center text-lg"><HelpCircle className="w-5 h-5 text-red-500 mr-3 shrink-0" /> {faq.q}</span>
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
