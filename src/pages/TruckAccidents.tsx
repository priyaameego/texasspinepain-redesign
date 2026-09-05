import { Truck, PhoneCall, CheckCircle, ShieldCheck, AlertTriangle, HelpCircle, ChevronRight, Activity, Crosshair, FileText, Zap } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function TruckAccidents() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* Emergency Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop"
          alt="Truck Accident"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <div className="inline-flex items-center bg-red-500/90 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold mb-6 border border-red-300/40">
            <AlertTriangle className="w-5 h-5 mr-2" /> Emergency Truck Accident Care
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">18-Wheeler & Truck Accident Injury Treatment</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Specialized medical care for catastrophic truck accident injuries in Dallas. Letter of Protection accepted. 24/7 emergency response available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#appointment" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
              Emergency Appointment
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
              <PhoneCall className="w-5 h-5 mr-2" /> 469-313-0040
            </a>
          </div>
        </div>
      </section>

      {/* Why Truck Accidents Are Different */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why 18-Wheeler Accidents Require Specialized Medical Care</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Commercial trucks can weigh up to 80,000 pounds — 40 times heavier than passenger cars. This massive weight differential creates devastating injuries that require immediate, specialized treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-red-500">
              <Truck className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Massive Weight Differential</h3>
              <p className="text-gray-600 leading-relaxed">
                Passenger cars: 2,000–4,000 pounds vs. Loaded 18-wheelers: Up to 80,000 pounds. Force of impact increases exponentially with weight.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#17a2b8]">
              <AlertTriangle className="w-10 h-10 text-[#17a2b8] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complex Accident Dynamics</h3>
              <p className="text-gray-600 leading-relaxed">
                Jackknife accidents, trailer swing and rollover, multi-vehicle pile-ups, and cargo spillage hazards create multiple trauma scenarios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#1e4682]">
              <Zap className="w-10 h-10 text-[#1e4682] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Multiple Impact Scenarios</h3>
              <p className="text-gray-600 leading-relaxed">
                Initial collision with truck cab, secondary impact with trailer, potential crushing under truck, and risk of being dragged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catastrophic Injuries */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Catastrophic 18-Wheeler Accident Injuries We Treat</h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-10">
                Truck accidents typically cause more severe, life-threatening injuries than standard car accidents. Our Dallas clinic specializes in treating the complex trauma associated with commercial vehicle collisions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-[#1e4682] border-b-2 border-gray-100 pb-2 mb-4">Severe Spinal Injuries</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Spinal cord damage and paralysis</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Multiple vertebral fractures</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Severe disc herniation and rupture</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Spinal stenosis from compression</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e4682] border-b-2 border-gray-100 pb-2 mb-4">Traumatic Brain Injuries</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Severe concussions</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Intracranial bleeding</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Cognitive impairment</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Post-traumatic brain syndrome</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e4682] border-b-2 border-gray-100 pb-2 mb-4">Multiple Trauma Injuries</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Multiple bone fractures</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Internal organ damage</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Crush injuries and amputations</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Life-threatening hemorrhaging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e4682] border-b-2 border-gray-100 pb-2 mb-4">Complex Neck & Back Injuries</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Severe whiplash with neurological symptoms</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Cervical spine fractures</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Thoracic and lumbar compression fractures</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Ligament and tendon ruptures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency CTA Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-red-600 rounded-md p-8 shadow-xl text-white sticky top-32">
                <AlertTriangle className="w-12 h-12 text-red-200 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Time is Critical</h3>
                <p className="text-red-100 leading-relaxed mb-6">
                  Adrenaline can mask severe injuries for hours or days. Some injuries worsen without prompt treatment. Don't wait — call immediately even if you feel okay.
                </p>
                <a href="tel:4693130040" className="bg-white text-red-600 hover:bg-gray-100 block text-center px-6 py-3 rounded font-bold transition-colors shadow-md mb-3">
                  Call (469) 313-0040 Now
                </a>
                <a href="#appointment" className="bg-red-700 hover:bg-red-800 block text-center px-6 py-3 rounded font-bold transition-colors">
                  Emergency Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Actions After Accident */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Critical Actions After an 18-Wheeler Accident</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-md shadow-md border-t-4 border-[#17a2b8]">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#17a2b8] text-white flex items-center justify-center mr-3 shrink-0">1</div>
                At the Scene (If Physically Able)
              </h3>
              <ul className="space-y-4">
                {[
                  ["Ensure Safety First", "Move away from traffic, watch for fuel spills or fire hazards"],
                  ["Call Emergency Services", "911 for police and medical response, request ambulance even if you feel 'okay'"],
                  ["Document Everything", "Photos of truck, trailer, your vehicle, and injuries"],
                  ["Get Truck Information", "Commercial license, trucking company name, DOT numbers"],
                  ["Preserve Evidence", "Don't move vehicles, photograph skid marks and debris"],
                ].map(([bold, text], i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                    <div><strong className="text-gray-800">{bold}</strong> – {text}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-md shadow-md border-t-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 shrink-0">2</div>
                Within 24 Hours
              </h3>
              <ul className="space-y-4">
                {[
                  ["Seek Immediate Medical Attention", "Many truck accident injuries have delayed symptoms"],
                  ["Contact Legal Representation", "Truck accidents involve complex liability issues"],
                  ["Call Our Emergency Line", "(469) 313-0040 for immediate medical evaluation"],
                  ["Document Symptoms", "Keep detailed records of pain and limitations"],
                  ["Preserve Medical Evidence", "Early documentation is crucial for legal cases"],
                ].map(([bold, text], i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 shrink-0" />
                    <div><strong className="text-gray-800">{bold}</strong> – {text}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Common Causes of 18-Wheeler Accidents</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Driver-Related Factors",
                items: [
                  "Driver Fatigue — Hours of Service violations",
                  "Distracted Driving — Cell phone, GPS distractions",
                  "Impaired Driving — Alcohol, drugs, medications",
                  "Reckless Driving — Speeding, tailgating",
                ],
              },
              {
                title: "Mechanical & Maintenance",
                items: [
                  "Brake Failures — Inadequate maintenance",
                  "Tire Problems — Blowouts, improper pressure",
                  "Equipment Malfunctions — Steering failures",
                  "Coupling Defects — Trailer separation",
                ],
              },
              {
                title: "Loading & Cargo Issues",
                items: [
                  "Overloading — Exceeding weight limits",
                  "Unsecured Cargo — Shifting loads in transit",
                  "Hazardous Materials — Improper handling",
                  "Loading Violations — Federal regulation failures",
                ],
              },
              {
                title: "Federal Regulation Violations",
                items: [
                  "Hours of Service — Exceeding driving time limits",
                  "Driver Qualifications — Inadequate licensing",
                  "Vehicle Inspections — Failure to maintain records",
                  "Drug & Alcohol Testing — Non-compliance",
                ],
              },
            ].map((cat, idx) => (
              <div key={idx} className="bg-gray-50 p-7 rounded-md border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1e4682] text-base border-b border-gray-200 pb-3 mb-4">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mr-2 mt-1.5 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment and Legal */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#1e4682] mb-6">Specialized Treatment for Truck Accident Injuries</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Truck accident injuries require intensive, multidisciplinary treatment approaches. Our comprehensive care addresses both immediate trauma and long-term rehabilitation needs.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Activity className="w-5 h-5 text-white" />, title: "Emergency Assessment", items: ["Full trauma assessment", "Neurological examination", "Spinal imaging (X-ray, CT, MRI)", "Emergency stabilization"] },
                  { icon: <Crosshair className="w-5 h-5 text-white" />, title: "Pain Management", items: ["Epidural steroid injections", "Facet joint blocks", "Nerve blocks and ablations", "Regenerative medicine therapies"] },
                  { icon: <CheckCircle className="w-5 h-5 text-white" />, title: "Rehabilitation Services", items: ["Physical therapy for mobility restoration", "Cognitive rehabilitation", "Speech therapy coordination", "Psychological trauma support"] },
                  { icon: <FileText className="w-5 h-5 text-white" />, title: "Long-Term Care Planning", items: ["Functional capacity evaluations", "Permanent impairment assessment", "Future medical needs planning", "Quality of life evaluation"] },
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-[#1e4682] w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-1 shadow">{s.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{s.title}</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {s.items.map((item, i) => <li key={i} className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 shrink-0"></div>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1e4682] mb-6">Legal Coordination for Truck Accident Cases</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-md border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">Complex Liability Issues</h4>
                  <ul className="space-y-2 text-gray-600 text-sm ml-2 list-disc marker:text-[#17a2b8]">
                    <li>Truck driver negligence</li>
                    <li>Trucking company responsibility</li>
                    <li>Vehicle manufacturer defects</li>
                    <li>Maintenance company liability</li>
                    <li>Multiple insurance carriers</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-md border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">Comprehensive Medical Documentation</h4>
                  <ul className="space-y-2 text-gray-600 text-sm ml-2 list-disc marker:text-[#17a2b8]">
                    <li>Detailed injury assessments</li>
                    <li>Treatment plans and progress notes</li>
                    <li>Expert medical opinions</li>
                    <li>Long-term prognosis reports</li>
                    <li>Future medical needs assessment</li>
                  </ul>
                </div>
                <div className="bg-[#1e4682] text-white p-6 rounded-md shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-blue-300 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Letter of Protection Accepted</h4>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    Truck accident injuries often require extensive, expensive treatment. A Letter of Protection ensures you receive immediate comprehensive care without financial barriers while your legal case is pending.
                  </p>
                  <Link to="/letter-of-protection" className="bg-[#17a2b8] hover:bg-[#138496] block text-center px-5 py-2 rounded font-bold transition-colors text-sm">
                    Learn About LOP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions About Truck Accident Care</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is treatment for truck accident injuries different?",
                a: "Truck accidents typically cause more severe injuries requiring specialized, intensive treatment and longer recovery periods. The massive weight differential creates catastrophic trauma that standard car accident protocols cannot address.",
              },
              {
                q: "Will the trucking company's insurance cover my treatment?",
                a: "While their insurance may ultimately be responsible, a Letter of Protection ensures you get immediate treatment without waiting for insurance approval or liability determination.",
              },
              {
                q: "How long do truck accident injury cases take?",
                a: "Due to the complexity and severity, truck accident cases often take 1–3 years or more to resolve, making immediate medical care crucial for your health and legal case.",
              },
              {
                q: "Can you provide expert testimony for my case?",
                a: "Yes, Dr. Patel can provide expert medical testimony regarding your injuries, treatment, and long-term prognosis for truck accident litigation.",
              },
              {
                q: "What if I felt fine after the accident but now have symptoms?",
                a: "This is common with truck accidents. Many serious injuries have delayed symptoms due to adrenaline and shock. Seek immediate evaluation regardless of when symptoms appear.",
              },
              {
                q: "Do you handle cases involving federal trucking regulations?",
                a: "Yes, we understand federal trucking regulations and can document violations that may have contributed to your accident, supporting your legal case with comprehensive medical evidence.",
              },
              {
                q: "What makes truck accident injuries so severe?",
                a: "The massive weight differential (up to 80,000 lbs vs. 3,000 lbs), multiple impact scenarios, and complex accident dynamics create catastrophic injuries rarely seen in standard car accidents.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-md border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-gray-800 hover:text-[#1e4682] transition-colors">
                  <span className="flex items-center text-base pr-4"><HelpCircle className="w-5 h-5 text-[#17a2b8] mr-3 shrink-0" /> {faq.q}</span>
                  <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="text-gray-600 p-6 pt-0 leading-relaxed border-t border-gray-100">
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
