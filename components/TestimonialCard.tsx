import React from "react";
import { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl mx-auto object-cover shadow-md ring-2 ring-gray-100"
      />
      <h4 className="mt-4 font-semibold text-lg text-gray-800">
        {testimonial.name}
      </h4>
      <p className="text-sm text-gray-500 mt-1">{testimonial.car}</p>
    </div>
  );
};

export default TestimonialCard;
