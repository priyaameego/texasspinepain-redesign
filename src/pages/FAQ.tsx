import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Home, Heart, Bookmark } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen pt-28 bg-white">

      {/* Breadcrumb Header */}
      <div className="bg-[#f8fbff] py-16 px-4 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">Frequently Asked Questions | Pain Clinics in Texas</h1>
          <div className="flex items-center text-sm text-[#1e4682] bg-white w-max px-4 py-2 rounded shadow-sm">
            <Link to="/" className="hover:text-blue-500"><Home className="w-4 h-4" /></Link>
            <span className="mx-2 text-gray-400">»</span>
            <span className="font-medium">Frequently Asked Questio...</span>
          </div>
        </div>
      </div>

      {/* Do you have a question? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="relative mb-6">
                <Heart className="absolute -left-6 -top-10 w-28 h-28 text-gray-100 opacity-50 -z-10" strokeWidth={1} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
                  Do you have a <span className="text-[#1e4682] underline underline-offset-8 decoration-[#17a2b8]">question</span>?
                </h2>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed font-light max-w-xl">
                Please read the questions below and if you can not find your answer, please send us your question, we will answer you as soon as possible.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <img
                src="/Dr-Pritesh-Patel.png"
                alt="Dr. Pritesh Patel"
                className="w-64 lg:w-72 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion + Sidebar */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#1e4682] w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">FAQs</h3>
              <p className="text-gray-400 text-sm">Frequently asked questions</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left — Accordion */}
            <div className="lg:w-2/3">
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl overflow-hidden shadow-sm transition-all duration-300 border ${
                        isOpen
                          ? 'border-[#1e4682] shadow-lg'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {/* Question Header */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        className={`w-full flex items-center justify-between px-6 py-5 text-left font-bold transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#1e4682] text-white'
                            : 'bg-white text-gray-700 hover:text-[#1e4682]'
                        }`}
                      >
                        <span className="flex items-center gap-3 pr-4 text-[15px] leading-snug">
                          <Bookmark className={`w-5 h-5 shrink-0 ${isOpen ? 'text-blue-200' : 'text-[#1e4682]'}`} />
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 shrink-0 text-blue-200" />
                        ) : (
                          <ChevronDown className="w-5 h-5 shrink-0 text-gray-400" />
                        )}
                      </button>

                      {/* Answer Body */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className={`px-6 py-6 ${isOpen ? 'bg-[#163566] text-blue-50' : 'bg-white text-gray-600'}`}>
                          <p className="leading-relaxed mb-3 font-light">{faq.a}</p>
                          {faq.list && (
                            <ul className="space-y-2 ml-2 mb-3">
                              {faq.list.map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-[15px]">
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isOpen ? 'bg-blue-300' : 'bg-[#17a2b8]'}`}></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                          {faq.footer && (
                            <p className="italic text-blue-200 text-sm mt-2">{faq.footer}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — Ask Us Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-[#17a2b8] rounded-xl p-8 shadow-xl sticky top-36 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Ask Us</h4>
                    <p className="text-teal-100 text-sm font-light">Quick contact form</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-teal-100 text-xs font-medium mb-1.5">Full Name</label>
                      <input type="text" className="w-full bg-white rounded-md px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    </div>
                    <div>
                      <label className="block text-teal-100 text-xs font-medium mb-1.5">Mobile Number</label>
                      <input type="tel" className="w-full bg-white rounded-md px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-teal-100 text-xs font-medium mb-1.5">Email ID</label>
                    <input type="email" className="w-full bg-white rounded-md px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50" />
                  </div>
                  <div>
                    <label className="block text-teal-100 text-xs font-medium mb-1.5">Subject</label>
                    <input type="text" className="w-full bg-white rounded-md px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50" />
                  </div>
                  <div>
                    <label className="block text-teal-100 text-xs font-medium mb-1.5">Message</label>
                    <textarea rows={4} className="w-full bg-white rounded-md px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 resize-y"></textarea>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#1e4682] hover:bg-[#163566] text-white py-3.5 rounded-md font-bold transition-colors shadow-lg">
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
