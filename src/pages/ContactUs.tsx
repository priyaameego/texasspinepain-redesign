import { Phone, Printer, Mail, MapPin, Clock, MessageSquare, ChevronRight } from 'lucide-react';

export function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen pt-32">

      {/* Hero Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#163566]/70 z-10 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20">
            <MessageSquare className="w-5 h-5 mr-2" /> Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            We're here to help. Reach out to our team at Spine &amp; Pain Institute of Texas for appointments, questions, or any information you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:4693130040" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" /> 469-313-0040
            </a>
            <a href="#contact-form" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: <Phone className="w-7 h-7 text-white" />,
                label: 'Phone',
                value: '469-313-0040',
                href: 'tel:4693130040',
                sub: 'Call us anytime',
              },
              {
                icon: <Printer className="w-7 h-7 text-white" />,
                label: 'Fax',
                value: '469-313-0041',
                href: null,
                sub: 'Send documents',
              },
              {
                icon: <Mail className="w-7 h-7 text-white" />,
                label: 'Email',
                value: 'info@texasspinepain.com',
                href: 'mailto:info@texasspinepain.com',
                sub: 'We reply promptly',
              },
              {
                icon: <MapPin className="w-7 h-7 text-white" />,
                label: 'Location',
                value: 'Dallas, Texas',
                href: 'https://maps.google.com/?q=Spine+Pain+Institute+of+Texas+Dallas',
                sub: 'Serving DFW area',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg hover:border-[#17a2b8] transition-all group">
                <div className="bg-[#1e4682] group-hover:bg-[#17a2b8] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors shadow">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-[#1e4682] hover:text-[#17a2b8] font-semibold text-sm break-all transition-colors block mb-1">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-gray-700 font-semibold text-sm block mb-1">{item.value}</span>
                )}
                <p className="text-gray-400 text-xs">{item.sub}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Form + Office Hours */}
      <section id="contact-form" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
              <p className="text-gray-500 mb-10">Fill out the form below and our team will get back to you as soon as possible.</p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-600 font-medium text-sm mb-2">Full Name *</label>
                    <input type="text" placeholder="Your full name" className="w-full border border-gray-200 rounded-lg p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium text-sm mb-2">Mobile Number *</label>
                    <input type="tel" placeholder="469-000-0000" className="w-full border border-gray-200 rounded-lg p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 font-medium text-sm mb-2">Email ID *</label>
                  <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium text-sm mb-2">Subject</label>
                  <input type="text" placeholder="What can we help you with?" className="w-full border border-gray-200 rounded-lg p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium text-sm mb-2">Message *</label>
                  <textarea rows={6} placeholder="Tell us about your condition or how we can help..." className="w-full border border-gray-200 rounded-lg p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all resize-y"></textarea>
                </div>
                <button className="bg-[#1e4682] hover:bg-[#163566] text-white w-full py-4 rounded-lg font-bold text-base transition-colors shadow-md">
                  Send Message
                </button>
              </div>
            </div>

            {/* Office Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">

              <div className="bg-[#1e4682] text-white rounded-xl p-8 shadow-xl">
                <Clock className="w-10 h-10 text-blue-300 mb-5" />
                <h3 className="text-xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-3">
                  {[
                    ['Monday – Friday', '7:00 AM – 7:00 PM'],
                    ['Saturday', '8:00 AM – 4:00 PM'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours], i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm">{day}</span>
                      <span className={`font-bold text-sm ${hours === 'Closed' ? 'text-red-300' : 'text-white'}`}>{hours}</span>
                    </div>
                  ))}
                </div>
                <a href="#appointment" className="mt-6 bg-[#17a2b8] hover:bg-[#138496] block text-center px-6 py-3 rounded-lg font-bold transition-colors">
                  Book Appointment
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <MapPin className="w-8 h-8 text-[#17a2b8] mb-4" />
                <h3 className="font-bold text-gray-800 text-lg mb-3">Service Area</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Serving patients throughout the Dallas-Fort Worth Metroplex, including:
                </p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  {['Dallas', 'Plano', 'Richardson', 'Garland', 'Irving', 'Carrollton', 'Farmers Branch', 'Addison', 'Mesquite'].map(city => (
                    <li key={city} className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#17a2b8] shrink-0" /> {city}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 space-y-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">Direct Contact</h3>
                <a href="tel:4693130040" className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#17a2b8] rounded-lg px-5 py-3.5 transition-colors group">
                  <div className="bg-[#1e4682] w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="font-bold text-gray-800 group-hover:text-[#1e4682]">469-313-0040</p>
                  </div>
                </a>
                <a href="tel:4693130041" className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#17a2b8] rounded-lg px-5 py-3.5 transition-colors group">
                  <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    <Printer className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Fax</p>
                    <p className="font-bold text-gray-800 group-hover:text-[#1e4682]">469-313-0041</p>
                  </div>
                </a>
                <a href="mailto:info@texasspinepain.com" className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#17a2b8] rounded-lg px-5 py-3.5 transition-colors group">
                  <div className="bg-[#17a2b8] w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="font-bold text-gray-800 group-hover:text-[#1e4682] text-sm break-all">info@texasspinepain.com</p>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="w-full h-72 relative overflow-hidden">
          <iframe
            title="Spine & Pain Institute of Texas Location"
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.34!2d-96.876725!3d32.648026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e91e0555244fd%3A0x6f1d0ba1685967c8!2sSpine%20%26%20Pain%20Institute%20of%20Texas!5e0!3m2!1sen!2sus!4v1690000000000"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}
