import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carolyn Holland",
    text: "Best experience at Spine & Pain Institute of Texas, extremely pleasant. What made my visit so pleasant, the staff, the promptness, and how informative they were about everything. You're not supposed to like going to the doctor but I did. I was more relaxed leaving than when I arrived and it wasn't just from my procedure. I would very much recommend this place and the staff."
  },
  {
    id: 2,
    name: "Angelo Nola",
    text: "It was a very successful experience for me. I’m looking forward to the permanent implant. The staff is very knowledgeable, polite and professional. I would recommend to everyone to talk to Dr. Patel if you are having problems with your back and or legs."
  },
  {
    id: 3,
    name: "Shena Bell",
    text: "I had a nice experience. Dr. Patel was very friendly and caring. He cares enough to interact with the patients to make you feel comfortable. I appreciate his help! I would definitely recommend ❤️!"
  },
  {
    id: 4,
    name: "Shirley Hix",
    text: "My experience at Bluebonnet Surgery Center was great. Everyone was friendly and helpful. They made me feel comfortable and let me know what to expect. They also made sure I had instructions on what to do once I got home. I would definitely recommend the facility to others."
  },
  {
    id: 5,
    name: "Becky Spencer",
    text: "Dr Patel and his staff are nothing short of exemplary. Dr Patel, who is double board certified, is an excellent listener and takes his time with each of his patients. He’s personable and friendly making his patients feel at ease. His staff are the loveliest people, he did an outstanding job hiring the best people. I can’t recommend Dr Patel and his staff enough. They are the gold standard for medical excellence in pain management."
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-24 bg-[#f9fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
            <Heart className="w-48 h-48" strokeWidth={1} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4 relative z-10">
            See what our <span className="text-[#1e4682]">Patient</span> and <span className="text-[#1e4682]">Visitors Say</span>
          </h2>
          <p className="text-gray-500 text-xl font-light relative z-10">
            Our goal is your complete health and wellness
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          
          {/* Prev Button */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-[#1e4682] hover:text-white text-[#1e4682] transition-colors -ml-6"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          <div className="w-full overflow-hidden px-4 md:px-12 py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 lg:px-8">
                  <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-10 md:p-16 flex flex-col items-center text-center h-full min-h-[350px] justify-center border-t-4 border-[#1e4682]">
                    <h4 className="text-[#1e4682] text-xl font-bold mb-8">{testimonial.name}</h4>
                    <p className="text-gray-600 text-lg leading-loose italic max-w-3xl">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-[#1e4682] hover:text-white text-[#1e4682] transition-colors -mr-6"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-[#1e4682] w-12' : 'bg-blue-200 hover:bg-blue-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
