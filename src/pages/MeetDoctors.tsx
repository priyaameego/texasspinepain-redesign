import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';

export function MeetDoctors() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* Premium Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Meet Doctors</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Expert pain management specialists dedicated to your well-being.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 flex-grow bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="rounded-md overflow-hidden shadow-2xl relative">
                 <img src="https://texasspinepain.com/wp-content/uploads/2024/11/dr-pritesh-patel.webp" alt="Dr. Pritesh Patel" className="w-full h-auto object-cover bg-gray-50" />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Pritesh Patel</h2>
                <h3 className="text-[#17a2b8] text-xl font-semibold mb-6">DO</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Led by Dr. Pritesh Patel, DO, this Dallas pain center focuses on individualized treatment plans that prioritize each patient's well-being.
                </p>
                <Link to="/meet-doctors/dr-pritesh-patel" className="inline-flex items-center bg-[#1e4682] hover:bg-[#163566] text-white px-8 py-3 rounded-sm font-semibold transition-colors">
                  View Full Profile <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
