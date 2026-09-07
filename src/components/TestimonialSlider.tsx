import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carolyn Holland",
    role: "Verified Patient",
    text: "Best experience at Spine & Pain Institute of Texas, extremely pleasant. What made my visit so pleasant, the staff, the promptness, and how informative they were about everything. You're not supposed to like going to the doctor but I did. I was more relaxed leaving than when I arrived and it wasn't just from my procedure. I would very much recommend this place and the staff."
  },
  {
    id: 2,
    name: "Angelo Nola",
    role: "Verified Patient",
    text: "It was a very successful experience for me. I’m looking forward to the permanent implant. The staff is very knowledgeable, polite and professional. I would recommend to everyone to talk to Dr. Patel if you are having problems with your back and or legs."
  },
  {
    id: 3,
    name: "Shena Bell",
    role: "Verified Patient",
    text: "I had a nice experience. Dr. Patel was very friendly and caring. He cares enough to interact with the patients to make you feel comfortable. I appreciate his help! I would definitely recommend ❤️!"
  },
  {
    id: 4,
    name: "Shirley Hix",
    role: "Verified Patient",
    text: "My experience at Bluebonnet Surgery Center was great. Everyone was friendly and helpful. They made me feel comfortable and let me know what to expect. They also made sure I had instructions on what to do once I got home. I would definitely recommend the facility to others."
  },
  {
    id: 5,
    name: "Becky Spencer",
    role: "Verified Patient",
    text: "Dr Patel and his staff are nothing short of exemplary. Dr Patel, who is double board certified, is an excellent listener and takes his time with each of his patients. He’s personable and friendly making his patients feel at ease. His staff are the loveliest people, he did an outstanding job hiring the best people. I can’t recommend Dr Patel and his staff enough. They are the gold standard for medical excellence in pain management."
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSlideChange = (newIndex: number) => {
    if (isFading || newIndex === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 250);
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto advance slides every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7500);
    return () => clearInterval(timer);
  }, [currentIndex, isFading]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200/70">
      
      {/* Subtle Background Glows & Accent Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-3">
            PATIENT STORIES &amp; TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight leading-tight mb-4">
            See What Our Patients Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Our priority is helping you regain comfort, mobility, and your overall quality of life.
          </p>
        </div>

        {/* Editorial Testimonial Composition */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Desktop Left Navigation Button */}
          <button 
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="hidden md:flex absolute -left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white hover:bg-teal-600 text-slate-700 hover:text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Editorial Card Container */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-slate-200/80 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            
            {/* Oversized Decorative Low-Opacity Quotation Mark */}
            <div 
              className="absolute -top-3 left-4 sm:top-2 sm:left-8 text-slate-200/50 select-none pointer-events-none font-serif leading-none text-[8rem] sm:text-[12rem] lg:text-[14rem] z-0"
              aria-hidden="true"
            >
              “
            </div>

            {/* Testimonial Content Box with Smooth Fade Transition */}
            <div 
              className={`relative z-10 flex flex-col items-center text-center transition-all duration-300 ease-out ${
                isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              
              {/* Star Rating Row */}
              <div className="flex items-center gap-1.5 text-amber-400 mb-6 sm:mb-8" aria-label="5 out of 5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 shrink-0" />
                ))}
              </div>

              {/* Testimonial Quote Text */}
              <p className="text-slate-800 text-base sm:text-xl md:text-2xl font-serif italic leading-relaxed sm:leading-relaxed tracking-normal max-w-3xl mx-auto break-words overflow-wrap-break-word w-full mb-6 sm:mb-8">
                "{current.text}"
              </p>

              {/* Accent Divider Line */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-sky-400 mx-auto mb-6 opacity-80" />

              {/* Patient Information */}
              <div className="flex flex-col items-center">
                <h3 className="text-slate-900 font-serif font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
                  {current.name}
                </h3>
                <span className="mt-2 inline-flex items-center text-teal-700 text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-teal-50 border border-teal-200/70 px-3.5 py-1 rounded-full">
                  {current.role}
                </span>
              </div>

            </div>
          </div>

          {/* Desktop Right Navigation Button */}
          <button 
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="hidden md:flex absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white hover:bg-teal-600 text-slate-700 hover:text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Mobile & Tablet Slider Navigation Controls */}
        <div className="flex items-center justify-between sm:justify-center gap-4 mt-8 max-w-xs mx-auto">
          
          {/* Mobile Prev Arrow */}
          <button 
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="flex md:hidden w-11 h-11 bg-white hover:bg-teal-600 text-slate-700 hover:text-white rounded-full items-center justify-center shadow-md border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots & Step Counter */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideChange(idx)}
                aria-label={`Go to testimonial slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  idx === currentIndex 
                    ? 'w-8 bg-teal-600 shadow-sm' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Arrow */}
          <button 
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="flex md:hidden w-11 h-11 bg-white hover:bg-teal-600 text-slate-700 hover:text-white rounded-full items-center justify-center shadow-md border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Slide Counter Text */}
        <div className="text-center mt-3 text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {currentIndex + 1} of {testimonials.length} Patient Stories
        </div>

      </div>
    </section>
  );
}
