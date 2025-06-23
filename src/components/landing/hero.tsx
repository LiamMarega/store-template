import { Button } from '@/components/ui/button';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Find The best
                <br />
                <span className="text-gray-900">Barber Shop</span>
                <br />
                <span className="text-teal-500 font-script text-6xl md:text-7xl lg:text-8xl font-normal italic">
                  For you
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-md">
                Haircut Services For men and women, Where here the customer's hair, scalp, Face and body can be pampered, with the best services and facilities.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 items-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md">
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="flex items-center gap-2 text-gray-700 hover:text-teal-500"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Play className="w-4 h-4 text-gray-700 fill-current" />
                </div>
                Watch Video
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-teal-500">+20</div>
                <div className="text-sm text-gray-600">
                  Years Of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-500">+80</div>
                <div className="text-sm text-gray-600">
                  Our Awesome
                  <br />
                  Expert
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-500">+20K</div>
                <div className="text-sm text-gray-600">
                  Happy
                  <br />
                  Customer
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300">
                <Image
                  src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=500&h=600&fit=crop&crop=face"
                  alt="Professional barber with styled hair and beard"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
                
                {/* Floating "Show more" button */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg">
                    Show
                    <br />
                    more
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-3xl -z-10 opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-teal-500 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-gray-900">02</span>
            <span className="text-gray-400">/06</span>
          </div>
          
          <button className="flex items-center gap-2 text-gray-600 hover:text-teal-500 transition-colors">
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
