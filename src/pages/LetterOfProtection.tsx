import { FileText, PhoneCall, CheckCircle, ShieldCheck, Clock, ChevronRight, HelpCircle, Car, Briefcase, Scale, AlertCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function LetterOfProtection() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* Premium Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
          alt="Letter of Protection"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20">
            <FileText className="w-5 h-5 mr-2" /> LOP Coordination Specialists
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Letter of Protection</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Get the medical care you need immediately — no upfront costs. We accept Letters of Protection and work directly with personal injury attorneys throughout North Texas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#lop-process" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
              Start LOP Process
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
              <PhoneCall className="w-5 h-5 mr-2" /> 469-313-0040
            </a>
          </div>
        </div>
      </section>

      {/* How It Works — 4-Step Process */}
      <section id="lop-process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">How Letters of Protection Work</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The Letter of Protection process is designed to remove financial barriers to medical care while your legal case is pending. Here's our simple 4-step process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Attorney Issues LOP",
                desc: "Your personal injury attorney drafts the Letter of Protection, guaranteeing payment from future settlement and establishing a legally binding commitment.",
              },
              {
                step: "02",
                title: "We Accept & Begin Treatment",
                desc: "Our team reviews and accepts the LOP. Medical treatment begins immediately with no upfront payment required from the patient.",
              },
              {
                step: "03",
                title: "Ongoing Medical Care",
                desc: "Continue treatment throughout the legal case with regular progress documentation and coordination with your attorney's office.",
              },
              {
                step: "04",
                title: "Settlement Payment",
                desc: "Medical bills are paid directly from settlement. Attorney ensures provider payment, and patient receives remaining settlement funds.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-md shadow-lg p-8 border-t-4 border-[#17a2b8] flex flex-col">
                <div className="text-5xl font-black text-gray-100 mb-4 leading-none">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — Victims & Attorneys */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Benefits of Letter of Protection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Victims */}
            <div className="bg-[#f4f8ff] p-10 rounded-md border border-blue-100">
              <h3 className="text-2xl font-bold text-[#1e4682] mb-8 flex items-center">
                <ShieldCheck className="w-7 h-7 mr-3 text-[#17a2b8]" /> For Accident Victims
              </h3>
              <ul className="space-y-5">
                {[
                  { label: "Immediate Access to Care", desc: "No waiting for insurance approval, treatment begins same day" },
                  { label: "Financial Protection", desc: "No upfront medical costs, no payment until case resolves" },
                  { label: "Enhanced Legal Case", desc: "Comprehensive medical documentation and expert testimony" },
                  { label: "Peace of Mind", desc: "Attorney handles payment arrangements, reduced administrative burden" },
                  { label: "Quality Care", desc: "Access to specialized treatments without cost constraints" },
                ].map((b, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 mr-3 shrink-0" />
                    <div><span className="font-bold text-gray-800">{b.label}:</span> <span className="text-gray-600">{b.desc}</span></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Attorneys */}
            <div className="bg-[#f4f8ff] p-10 rounded-md border border-blue-100">
              <h3 className="text-2xl font-bold text-[#1e4682] mb-8 flex items-center">
                <Scale className="w-7 h-7 mr-3 text-[#17a2b8]" /> For Attorneys
              </h3>
              <ul className="space-y-5">
                {[
                  { label: "Stronger Case Development", desc: "Immediate medical documentation and comprehensive treatment records" },
                  { label: "Client Care Enhancement", desc: "Remove financial barriers, improve client satisfaction" },
                  { label: "Expert Documentation", desc: "Detailed medical records and expert testimony availability" },
                  { label: "Damage Quantification", desc: "Professional assessment of injury severity and future needs" },
                  { label: "Seamless Coordination", desc: "Direct communication and regular case updates" },
                ].map((b, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 mr-3 shrink-0" />
                    <div><span className="font-bold text-gray-800">{b.label}:</span> <span className="text-gray-600">{b.desc}</span></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cases */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Types of Cases Where LOP is Used</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="w-8 h-8 text-[#17a2b8]" />,
                title: "Motor Vehicle Accidents",
                items: ["Car accidents and collisions", "Motorcycle accidents", "Truck and 18-wheeler accidents", "Pedestrian and bicycle accidents", "Uber/Lyft rideshare accidents"],
              },
              {
                icon: <AlertCircle className="w-8 h-8 text-[#17a2b8]" />,
                title: "Personal Injury Cases",
                items: ["Slip and fall accidents", "Premises liability injuries", "Dog bite incidents", "Product liability cases", "Medical malpractice injuries"],
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#17a2b8]" />,
                title: "Workers Compensation",
                items: ["Workplace injuries", "Construction accidents", "Industrial injuries", "Repetitive strain injuries", "Occupational diseases"],
              },
              {
                icon: <Scale className="w-8 h-8 text-[#17a2b8]" />,
                title: "Other Liability Cases",
                items: ["Defective product injuries", "Nursing home negligence", "Sports and recreation injuries", "Assault and violence cases", "Professional negligence"],
              },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-md border border-gray-100">
                <div className="mb-4">{cat.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mr-2 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Services Covered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Medical Services Covered Under Letter of Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our comprehensive treatment approach ensures all medically necessary services are available under your Letter of Protection arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diagnostic Services",
                items: ["X-rays and imaging studies", "MRI and CT scan coordination", "Laboratory testing", "Electromyography (EMG)", "Functional assessments"],
              },
              {
                title: "Pain Management",
                items: ["Epidural steroid injections", "Facet joint blocks", "Trigger point injections", "Nerve blocks and ablations", "Radiofrequency treatments"],
              },
              {
                title: "Rehabilitation Services",
                items: ["Physical therapy", "Occupational therapy", "Chiropractic care", "Massage therapy", "Exercise therapy programs"],
              },
              {
                title: "Specialized Procedures",
                items: ["Regenerative medicine", "Platelet-rich plasma (PRP)", "Stem cell therapy", "Minimally invasive procedures", "Surgical consultations"],
              },
            ].map((svc, idx) => (
              <div key={idx} className="bg-gray-50 p-7 rounded-md border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1e4682] text-lg border-b border-gray-200 pb-3 mb-4">{svc.title}</h3>
                <ul className="space-y-2">
                  {svc.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#17a2b8] mt-0.5 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOP vs Traditional Insurance Comparison */}
      <section className="py-20 bg-[#f4f8ff] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">LOP vs. Traditional Payment Methods</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Understanding the advantages of Letter of Protection compared to traditional payment methods helps you make informed decisions about your medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-md shadow-lg overflow-hidden border border-green-200">
              <div className="bg-[#1e4682] text-white p-6">
                <h3 className="text-xl font-bold">Letter of Protection Advantages</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {[
                  ["Immediate Treatment", "No delays waiting for approval"],
                  ["No Upfront Costs", "Zero out-of-pocket expenses"],
                  ["No Insurance Approval", "Treatment based on medical necessity"],
                  ["Comprehensive Care", "Access to all needed treatments"],
                  ["Legal Documentation", "Optimized for legal cases"],
                  ["Payment at Settlement", "No financial stress during recovery"],
                ].map(([label, desc], i) => (
                  <li key={i} className="flex items-start p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                    <div><span className="font-bold text-gray-800">{label}:</span> <span className="text-gray-600 text-sm">{desc}</span></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-md shadow-lg overflow-hidden border border-red-100">
              <div className="bg-gray-500 text-white p-6">
                <h3 className="text-xl font-bold">Traditional Insurance Limitations</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {[
                  ["Treatment Delays", "Waiting for insurance approval"],
                  ["Copays/Deductibles", "Ongoing out-of-pocket costs"],
                  ["Coverage Limits", "Restricted treatment options"],
                  ["Prior Authorization", "Delays for specialized care"],
                  ["Network Restrictions", "Limited provider choices"],
                  ["Immediate Payment", "Financial burden during recovery"],
                ].map(([label, desc], i) => (
                  <li key={i} className="flex items-start p-4">
                    <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center mt-0.5 mr-3 shrink-0">
                      <div className="w-2 h-0.5 bg-red-400"></div>
                    </div>
                    <div><span className="font-bold text-gray-800">{label}:</span> <span className="text-gray-600 text-sm">{desc}</span></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Getting Started with Letter of Protection</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#1e4682] mb-6">Requirements for LOP Acceptance</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">Attorney Requirements:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm ml-2 list-disc marker:text-[#17a2b8]">
                    <li>Licensed personal injury attorney</li>
                    <li>Valid malpractice insurance</li>
                    <li>Established legal practice</li>
                    <li>Case merit evaluation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">Patient Requirements:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm ml-2 list-disc marker:text-[#17a2b8]">
                    <li>Valid legal case with injury claim</li>
                    <li>Medical necessity for treatment</li>
                    <li>Compliance with treatment plan</li>
                    <li>Cooperation with legal process</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1e4682] mb-6">LOP Processing Times</h3>
              <div className="space-y-4 mb-8">
                {[
                  ["Routine Setup", "Same business day"],
                  ["Emergency Cases", "Within 2 hours"],
                  ["Complex Cases", "Within 24 hours"],
                  ["Weekend/Holiday", "Emergency line available"],
                ].map(([type, time], i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-50 px-6 py-4 rounded-md border border-gray-100">
                    <span className="font-semibold text-gray-700">{type}</span>
                    <span className="bg-[#17a2b8] text-white text-sm font-bold px-3 py-1 rounded-full">{time}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#1e4682] text-white p-8 rounded-md shadow-xl">
                <Clock className="w-8 h-8 text-blue-300 mb-4" />
                <h4 className="text-xl font-bold mb-3">LOP Coordination Hours</h4>
                <div className="space-y-2 text-blue-100 text-sm">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-bold text-white">7:00 AM – 7:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-bold text-white">8:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Emergency coordination</span><span className="font-bold text-white">24/7</span></div>
                </div>
                <a href="tel:4693130040" className="mt-6 bg-[#17a2b8] hover:bg-[#138496] block text-center px-6 py-3 rounded font-bold transition-colors">
                  Call (469) 313-0040
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions About Letter of Protection</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is a Letter of Protection legally binding?",
                a: "Yes, when properly executed, an LOP is a legally enforceable contract between the attorney and medical provider, guaranteeing payment from the settlement proceeds.",
              },
              {
                q: "What treatments are covered under LOP?",
                a: "All medically necessary treatments related to your injury are covered, including diagnostics, therapy, pain management, and specialized procedures as outlined in the LOP agreement.",
              },
              {
                q: "What if my attorney changes during treatment?",
                a: "The LOP typically transfers to the new attorney, but we'll work with both parties to ensure continuity of care and proper documentation transfer.",
              },
              {
                q: "Can I receive emergency treatment under LOP?",
                a: "Yes, we provide same-day and emergency appointments for LOP patients. Our coordination team is available 24/7 for urgent medical needs.",
              },
              {
                q: "What if my settlement doesn't cover all medical bills?",
                a: "This is rare with properly managed cases, but we'll work with you on reasonable payment arrangements if needed. Most LOP cases resolve successfully.",
              },
              {
                q: "How long does LOP coverage last?",
                a: "Coverage continues until the legal case resolves or terms are modified by mutual agreement between the attorney, patient, and medical provider.",
              },
              {
                q: "Do I pay taxes on settlement money used for medical bills?",
                a: "Generally no, medical expenses paid from personal injury settlements are not taxable, but consult with your tax advisor for specific guidance.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
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
