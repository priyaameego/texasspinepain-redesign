import { ShieldCheck, Phone, Mail, CheckCircle, ChevronRight, CreditCard, Heart, HelpCircle, ClipboardCheck, Umbrella, CircleDollarSign, HeartPulse, Stethoscope, Home } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const insurers = [
  { name: 'Aetna', detail: 'Including Aetna Better Health and Aetna Healthcare' },
  { name: 'Blue Cross Blue Shield (BCBS)', detail: 'PPO, HMO' },
  { name: 'Cigna', detail: 'PPO, HMO, Medicare' },
  { name: 'Humana', detail: 'PPO, HMO' },
  { name: 'UnitedHealthcare (UHC)', detail: 'HMO, PPO, EPO, Medicare' },
  { name: 'Medicare & Medicare Advantage', detail: 'All qualifying plans' },
  { name: 'Tricare', detail: 'Military & veterans coverage' },
];

const guidanceItems = [
  { icon: CircleDollarSign, title: 'Financial Assistance', desc: 'Highlights the availability of payment plans and financial help for patients.', color: 'from-blue-500 to-blue-600' },
  { icon: ClipboardCheck, title: 'Verification Process', desc: 'Details the steps patients should take to confirm their insurance coverage.', color: 'from-sky-500 to-sky-600' },
  { icon: HeartPulse, title: 'Medicare Coverage', desc: 'Describes the specific services covered under Medicare for pain management.', color: 'from-indigo-500 to-indigo-600' },
  { icon: Umbrella, title: 'Comprehensive Coverage', desc: 'Represents the wide range of insurance plans accepted to ensure accessibility.', color: 'from-teal-500 to-teal-600' },
  { icon: Stethoscope, title: 'Holistic Approach', desc: "Emphasizes the institute's comprehensive and effective pain management strategies.", color: 'from-cyan-500 to-cyan-600' },
];

export function InsuranceBenefits() {
  return (
    <div className="flex flex-col min-h-screen pt-28 bg-white">

      {/* Breadcrumb Header */}
      <div className="bg-[#f8fbff] py-16 px-4 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">Insurance Benefits at Spine & Pain Institute of Texas</h1>
          <div className="flex items-center text-sm text-[#1e4682] bg-white w-max px-4 py-2 rounded shadow-sm">
            <Link to="/" className="hover:text-blue-500"><Home className="w-4 h-4" /></Link>
            <span className="mx-2 text-gray-400">»</span>
            <span className="font-medium">Insurance Benefits</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#163566]/70 z-10 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
          alt="Insurance Benefits"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        />
        {/* Decorative particles */}
        <div className="absolute top-10 left-[12%] w-3 h-3 bg-white/15 rounded-full z-20"></div>
        <div className="absolute top-20 left-[25%] w-2 h-2 bg-white/10 rounded-full z-20"></div>
        <div className="absolute top-14 right-[20%] w-4 h-4 bg-white/15 rounded-full z-20"></div>
        <div className="absolute bottom-16 left-[40%] w-2 h-2 bg-white/10 rounded-full z-20"></div>
        <div className="absolute bottom-20 right-[15%] w-3 h-3 bg-white/15 rounded-full z-20"></div>

        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20">
            <ShieldCheck className="w-5 h-5 mr-2" /> Insurance Benefits
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">We Make Insurance<br className="hidden sm:block" /> Work for You</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            We understand that managing your pain should not be complicated by concerns about insurance coverage. We strive to make our services accessible to as many patients as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#appointment" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
              Verify My Insurance
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" /> 469-313-0040
            </a>
          </div>
        </div>
      </section>

      {/* Insurance Benefits and Guidance — Premium Cards */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Insurance Benefits and Guidance</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Everything you need to know about your coverage and how we can help.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidanceItems.map((item, idx) => (
              <div key={idx} className={`group relative bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Insurance Plans */}
      <section className="py-20 bg-[#f8fbff] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Accepted Insurance Plans</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We accept most major insurance plans to ensure that our patients receive the care they need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {insurers.map((ins, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#17a2b8]/40 transition-all duration-300 group cursor-default hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#1e4682] to-[#2563eb] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#1e4682] transition-colors">{ins.name}</h3>
                    <p className="text-gray-400 text-sm">{ins.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-blue-100 rounded-xl p-6 text-center shadow-sm">
            <p className="text-gray-500">
              Please note that this list is not exhaustive. We recommend contacting our office to verify if we accept your specific insurance plan.
            </p>
          </div>
        </div>
      </section>

      {/* Verifying Coverage + Out of Pocket */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Verifying Your Coverage</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                To ensure a smooth experience, we advise patients to:
              </p>
              <ul className="space-y-4">
                {[
                  'Contact your insurance provider directly to verify your coverage for pain management services.',
                  'Inquire about any co-payments, co-insurance, or deductibles that may apply.',
                  'Check if our clinic is in-network with your plan.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#17a2b8] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                Our staff is also available to assist you with insurance-related questions and can help verify your benefits before your appointment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#1e4682] to-[#2563eb] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Out-of-Pocket Costs</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Any applicable out-of-pocket costs, such as co-payments or deductibles, are due at the time of service. We accept various payment methods for your convenience.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Medicare Coverage for Pain Management</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                For our Medicare patients, it's important to note that Medicare Part B covers many pain management services, including:
              </p>
              <ul className="space-y-2.5">
                {[
                  'Chronic pain management and treatment services',
                  'Physical therapy',
                  'Occupational therapy',
                  'Chiropractic services (limited coverage)',
                  'Acupuncture for chronic low back pain (limited coverage)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-400 text-sm">
                Medicare patients typically pay 20% of the Medicare-approved amount for these services after meeting their Part B deductible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Care + Financial Assistance */}
      <section className="py-20 bg-[#f8fbff] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              { icon: Heart, title: 'Comprehensive Care Approach', desc: 'At Spine & Pain Institute of Texas, we believe in a comprehensive approach to pain management. While some advanced treatments may not be fully covered by insurance, we work diligently to provide effective care that can reduce your overall healthcare costs in the long run.', gradient: 'from-teal-500 to-teal-600' },
              { icon: HelpCircle, title: 'Financial Assistance', desc: "We understand that managing chronic pain can be a financial burden. If you're experiencing financial difficulties, please speak with our staff about potential payment plans or financial assistance options.", gradient: 'from-indigo-500 to-indigo-600' },
              { icon: ShieldCheck, title: 'Stay Informed', desc: 'Insurance policies and coverage can change. We encourage our patients to stay informed about their insurance benefits and to communicate with us about any changes in their coverage.', gradient: 'from-blue-500 to-blue-600' },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${card.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}

            {/* Contact CTA Card */}
            <div className="bg-gradient-to-br from-[#1e4682] to-[#163566] text-white rounded-xl p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-blue-200" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Contact Us for Insurance Information</h3>
                <p className="text-blue-100 leading-relaxed mb-6 font-light">
                  If you have any questions about insurance coverage for our pain management services in Dallas, please don't hesitate to contact our office.
                </p>
                <a href="tel:4693130041" className="bg-[#17a2b8] hover:bg-[#138496] block text-center px-6 py-3.5 rounded-md font-bold transition-colors mb-3 shadow-lg">
                  Call (469) 313-0041
                </a>
                <p className="text-blue-200 text-sm text-center font-light">Your path to pain relief starts here.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
