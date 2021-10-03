import React from "react";
import TestimonialCard from "../TestimonialCard";
import testimonials from "./testimonials.json"


const TestimonialsCards = () => {


  const cards = testimonials.map((testimonial, index) => {
    return (
      <TestimonialCard key={index} testimonial={testimonial}/>
    );
  });

  return (
    <div className="bg-grey px-2 lg:px-0 xl:px-14 2xl:px-24 ">
      <h3 className="m-0 pt-5 text-center pb-9">
        Veja como é a experiência de comprar seguidores na{" "}
        <strong className="text-green">Impulsiona Seguidores</strong>
      </h3>
      <div className=" grid lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 xl:grid-flow-col-dense justify-center place-items-center max-w-screen-2xl">
        {cards}
      </div>
    </div>
  );
};

export default TestimonialsCards;
