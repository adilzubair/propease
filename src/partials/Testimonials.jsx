import React from 'react';
import TestimonialImage from '../images/testimonial.jpg';

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 font-space-grotesk text-gray-900">
              Trusted by Property Managers Across the MENA Region
            </h2>
            <p className="text-xl text-gray-900 font-lato" data-aos="zoom-y-out">
              Hear from property owners and facility managers who have transformed their operations and improved efficiency with Propease.
            </p>
          </div>

          {/* Testimonial */}
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-xl font-medium mb-4 font-lato text-gray-900">
              "Propease has completely revolutionized how we manage our properties. The maintenance tracking system alone has saved us countless hours and improved tenant satisfaction tremendously. I can't imagine running our properties without it now."
            </blockquote>
            <cite className="block font-bold text-lg not-italic mb-1 font-space-grotesk text-gray-900">
              Ahmed Al-Mansour
            </cite>
            <div className="text-gray-900 font-lato">
              <span>Property Manager</span>{' '}
              <a className="text-blue-600 hover:text-neon-400 hover:underline" href="#0">@Gulf Properties</a>
            </div>
          </div>

          {/* Logos or items grid can follow here... */}
        </div>
      </div>
    </section>
  );
}
