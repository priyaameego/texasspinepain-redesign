import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Home, Bookmark } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

const faqs = [
  {
    q: 'What types of pain do you treat at Spine & Pain Institute of Texas?',
    a: 'At Spine & Pain Institute of Texas, we treat a wide range of pain conditions, including:',
    list: [
      'Lower back pain',
      'Neck pain',
      'Joint pain',
      'Headaches and migraines',
      'Leg pain and sciatica',
      'Neuropathic pain',
      'Sports injuries',
      'Chronic pain conditions',
    ],
  },
  {
    q: 'What should I expect during my first visit?',
    a: 'During your initial consultation, our pain management specialists will:',
    list: [
      'Take a comprehensive medical history',
      'Perform a thorough physical examination',
      'Review any previous diagnostic tests or imaging',
      'Discuss your pain symptoms and how they affect your daily life',
      'Begin to formulate a personalized treatment plan',
    ],
  },
  {
    q: 'What treatment options do you offer?',
    a: 'We offer a variety of treatment options, including:',
    list: [
      'Minimally invasive procedures',
      'Interventional pain management techniques',
      'Medication management',
      'Physical therapy',
      'Regenerative medicine',
      'Spinal cord stimulation',
      'Nerve blocks and injections',
    ],
    footer: "Our approach is tailored to each patient's unique needs and condition.",
  },
  {
    q: 'Do I need a referral to see a pain management specialist?',
    a: 'While some insurance plans may require a referral, many patients can schedule an appointment directly with our office. We recommend checking with your insurance provider to understand your specific plan requirements.',
  },
  {
    q: 'What insurance plans do you accept?',
    a: 'We accept most major insurance plans, including Medicare. Please contact our office for a complete list of accepted insurance providers or to verify your coverage.',
  },
  {
    q: 'How can I prepare for my appointment?',
    a: 'To prepare for your appointment:',
    list: [
      'Bring a list of your current medications and dosages',
      'Gather any relevant medical records or imaging studies',
      'Write down your symptoms and questions for the doctor',
      'Bring your insurance card and a form of identification',
    ],
  },
  {
    q: 'What if my pain gets worse between appointments?',
    a: "If you experience a significant increase in pain or new symptoms between appointments, please contact our office. We can provide guidance on managing your symptoms or adjust your appointment if necessary. For severe or emergency situations, please go to the nearest emergency room. Remember, at Spine & Pain Institute of Texas, we're committed to helping you manage your pain and improve your quality of life. Don't hesitate to contact us with any additional questions or concerns.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">

      {/* Editorial Subpage Hero Header */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/90 to-teal-950/40" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">FAQ's</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-teal-200 text-base sm:text-lg font-medium max-w-2xl">
            Find answers to common questions about spine treatments, appointments, and care plans.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Patient Guidance</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
                Do You Have a <span className="text-teal-600">Question</span>?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
                Please read the questions below and if you cannot find your answer, send us your question and we will answer you as soon as possible.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <img
                src="/Dr-Pritesh-Patel.png"
                alt="Dr. Pritesh Patel"
                className="w-56 sm:w-64 object-contain drop-shadow-xl bg-slate-50 p-2 rounded-3xl border border-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion + Sidebar */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#0b192b] w-12 h-12 rounded-2xl flex items-center justify-center shadow-md text-teal-300">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Knowledge Base</h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Common Questions &amp; Answers</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Accordion */}
            <div className="lg:w-2/3">
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border ${
                        isOpen
                          ? 'border-teal-500 shadow-xl bg-white'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {/* Header */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        className={`w-full flex items-center justify-between px-6 py-5 text-left font-serif font-bold transition-colors duration-200 ${
                          isOpen
                            ? 'bg-[#0b192b] text-white'
                            : 'bg-white text-slate-800 hover:text-teal-600'
                        }`}
                      >
                        <span className="flex items-center gap-3 pr-4 text-base sm:text-lg">
                          <Bookmark className={`w-4 h-4 shrink-0 ${isOpen ? 'text-teal-300' : 'text-teal-600'}`} />
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 shrink-0 text-teal-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 shrink-0 text-slate-400" />
                        )}
                      </button>

                      {/* Body */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className={`px-6 py-6 ${isOpen ? 'bg-[#0e2138] text-slate-200' : 'bg-white text-slate-600'}`}>
                          <p className="leading-relaxed mb-4 text-sm sm:text-base">{faq.a}</p>
                          {faq.list && (
                            <ul className="space-y-2 ml-2 mb-4">
                              {faq.list.map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-sm sm:text-base">
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isOpen ? 'bg-teal-400' : 'bg-teal-600'}`} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                          {faq.footer && (
                            <p className="italic text-teal-300 text-xs sm:text-sm font-medium pt-2 border-t border-white/10">{faq.footer}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Sidebar Form */}
            <div className="lg:w-1/3">
              <div className="bg-[#0b192b] text-white rounded-3xl p-8 shadow-xl sticky top-32 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-teal-500/20 text-teal-300 w-10 h-10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-white">Ask Us Directly</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Fast Response</p>
                  </div>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                  if (btn) {
                    btn.innerText = 'Sending...';
                    btn.disabled = true;
                    setTimeout(() => {
                      btn.innerText = 'Question Sent!';
                      btn.classList.add('!bg-teal-600');
                      e.currentTarget.reset();
                      setTimeout(() => {
                        btn.innerText = 'Send Question';
                        btn.disabled = false;
                        btn.classList.remove('!bg-teal-600');
                      }, 3000);
                    }, 1000);
                  }
                }} className="space-y-3.5">
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-1 uppercase tracking-wider">Full Name</label>
                    <input required type="text" className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-1 uppercase tracking-wider">Mobile Number</label>
                    <input required type="tel" className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-1 uppercase tracking-wider">Email ID</label>
                    <input required type="email" className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-1 uppercase tracking-wider">Question</label>
                    <textarea required rows={3} className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full mt-4 bg-teal-500 hover:bg-teal-400 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                    Send Question
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
