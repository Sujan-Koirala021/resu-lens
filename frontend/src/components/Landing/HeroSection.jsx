import React from 'react'
import heroImage from '../../images/heroImg.jpg'
import { Link } from 'react-router-dom'
import AnimatedButton from '../AnimatedButton'
import { 
  ChevronRight,

} from 'lucide-react';
const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen pt-32 pb-16 px-4 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  Free AI-Powered Resume Screening
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                  Find the <span className="text-blue-600">perfect candidates</span> faster
                </h1>
                <p className="text-xl text-muted-foreground">
                  Our free AI-powered resume screening solution helps HR teams find the best talent efficiently, saving time and eliminating bias.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                          <Link to='/screen'>
                <button className=' px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30 rounded-lg text-lg font-bold'>Start Now - It's Free</button></Link>
                <button variant="outline" className="text-lg px-8 py-4 border border-blue-200 text-blue-600 hover:bg-blue-200 rounded-lg font-bold">
                  <span className='flex justify-center items-center'> Watch Demo <ChevronRight className="ml-2 h-5 w-5" /> </span> 
                </button>

              </div>
              
              
            </div>
            
            <div className="relative animate-float">
              <div className="relative z-10 bg-white p-5 rounded-2xl shadow-xl border border-blue-100 transform rotate-2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={heroImage}
                    alt="Resume screening dashboard" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 z-0 bg-blue-100 w-full h-full rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HeroSection  