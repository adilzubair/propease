import React, { useState, useEffect } from 'react';
import TestimonialImage from '../images/testimonial.jpg';

export default function Testimonials() {
  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);
  
  // Testimonial data
  const testimonials = [
    {
      quote: "Propease has completely revolutionized how we manage our properties. The maintenance tracking system alone has saved us countless hours and improved tenant satisfaction tremendously. I can't imagine running our properties without it now.",
      name: "Ahmed Al-Mansour",
      title: "Property Manager",
      company: "Gulf Properties",
      image: TestimonialImage
    },
    {
      quote: "The financial reporting tools have given us insights we never had before. We're now able to make data-driven decisions that have significantly improved our profitability and operational efficiency.",
      name: "Layla Hakim",
      title: "Operations Director",
      company: "Emaar Properties",
      image: TestimonialImage
    },
    {
      quote: "As someone managing multiple residential buildings, the tenant management system has been a game-changer. Communication is streamlined, document organization is flawless, and our tenants are much happier with the responsiveness.",
      name: "Tariq Mahmoud",
      title: "Facility Manager",
      company: "Dubai Real Estate Group",
      image: TestimonialImage
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  // Animation timing
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Navigation functions
  const nextTestimonial = () => {
    setIsTransitioning(true);
    setDirection('right');
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setDirection('left');
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, 300);
  };
  
  // Go to specific testimonial
  const goToTestimonial = (index) => {
    if (index === activeTestimonial) return;
    setIsTransitioning(true);
    setDirection(index > activeTestimonial ? 'right' : 'left');
    setTimeout(() => {
      setActiveTestimonial(index);
    }, 300);
  };

  return (
    <section className="relative">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-platinum-200 to-white opacity-70"></div>
      
      {/* Animated illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32 animate-float hidden md:block" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd" opacity="0.8">
            <circle cx="1630" cy="128" r="128" filter="url(#glow)" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      {/* Interactive floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="testimonial-particle-1"></div>
        <div className="testimonial-particle-2"></div>
        <div className="testimonial-particle-3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div 
              className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-600 bg-opacity-10 transform transition-all duration-500 hover:scale-105 hover:shadow-glow-blue"
            >
              <span className="text-sm font-medium text-blue-600 font-['Lato']">Client Success Stories</span>
            </div>
            <h2 
              className="h2 mb-4 font-['Space_Grotesk'] text-gray-900 relative inline-block"
              data-aos="fade-down"
            >
              Trusted by Property Managers Across the MENA Region
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-neon-400 rounded-full"></span>
            </h2>
            <p 
              className="text-xl text-gray-900 font-['Lato']" 
              data-aos="zoom-y-out"
            >
              Hear from property owners and facility managers who have transformed their operations and improved efficiency with Propease.
            </p>
          </div>

          {/* Testimonial carousel */}
          <div className="max-w-3xl mx-auto relative">
            {/* Carousel controls for larger screens - with improved visual feedback */}
            <div className="hidden sm:block">
              <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-glow-blue hover:scale-110 transition duration-300 z-20 focus:outline-none group"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition duration-300 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="absolute w-8 h-0.5 bg-gradient-to-r from-blue-600 to-neon-400 -left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300"></span>
              </button>
              <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-glow-blue hover:scale-110 transition duration-300 z-20 focus:outline-none group"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="absolute w-8 h-0.5 bg-gradient-to-r from-neon-400 to-blue-600 -right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300"></span>
              </button>
            </div>

            {/* Current testimonial - with enhanced transitions */}
            <div 
              className={`bg-white rounded-xl p-6 sm:p-8 shadow-glass border border-gray-100 backdrop-filter backdrop-blur-sm transition-all duration-500 hover:shadow-modern transform ${
                isTransitioning 
                  ? direction === 'right' 
                    ? 'translate-x-3 opacity-0' 
                    : '-translate-x-3 opacity-0' 
                  : 'translate-x-0 opacity-100'
              }`}
              data-aos="fade-up"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-16 bg-neon-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-0 -mb-4 -mr-4 w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-slow"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:mr-8 mb-4 md:mb-0 flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-neon-400 animate-spin-slow"></div>
                  <img 
                    className="rounded-full w-20 h-20 object-cover shadow-lg border-2 border-white relative z-10" 
                    src={testimonials[activeTestimonial].image} 
                    width="80" 
                    height="80" 
                    alt="Testimonial" 
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 blur-xl opacity-30 animate-pulse-slow"></div>
                </div>
                <div className="text-center md:text-left">
                  <div className="relative mb-3">
                    <svg className="absolute -top-5 -left-6 w-10 h-10 text-blue-600 opacity-20 transform -rotate-6 animate-pulse-slow" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <blockquote className="text-lg sm:text-xl font-medium mb-4 font-['Lato'] text-gray-900 italic relative">
                      {testimonials[activeTestimonial].quote}
                    </blockquote>
                  </div>                  <cite className="block font-bold text-lg not-italic mb-1 font-['Space_Grotesk'] text-gray-900 relative group">
                    {testimonials[activeTestimonial].name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-neon-400 group-hover:w-full transition-all duration-500"></span>
                  </cite>
                  <div className="text-gray-900 font-['Lato']">
                    <span>{testimonials[activeTestimonial].title}</span>{' '}
                    <a className="text-blue-600 hover:text-neon-400 hover-underline transition duration-300 relative group" href="#0">
                      @{testimonials[activeTestimonial].company}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-400 group-hover:w-full transition-all duration-500"></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Animated progress bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full">
                <div className="h-full bg-gradient-to-r from-blue-600 to-neon-400 animate-progress"></div>
              </div>
            </div>

            {/* Carousel indicators - enhanced with visual feedback */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`mx-1 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-gradient-to-r from-blue-600 to-neon-400 w-8 shadow-glow-blue' 
                      : 'bg-gray-300 w-3 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile navigation buttons - enhanced with visual feedback */}
            <div className="flex justify-between mt-6 sm:hidden">
              <button 
                className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-glow-blue transition-all duration-300 focus:outline-none flex items-center text-gray-900 text-sm font-medium group hover:scale-105"
                onClick={prevTestimonial}
              >
                <svg className="w-4 h-4 mr-1 text-blue-600 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button 
                className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-glow-blue transition-all duration-300 focus:outline-none flex items-center text-gray-900 text-sm font-medium group hover:scale-105"
                onClick={nextTestimonial}
              >
                Next
                <svg className="w-4 h-4 ml-1 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
