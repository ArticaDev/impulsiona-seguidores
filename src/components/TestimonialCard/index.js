import React from 'react'
import ReactStars from "react-rating-stars-component";


const TestimonialCard = (props) => {
    return (
<div
        className="bg-white w-80 rounded-md shadow p-4 h-96 mb-4 mx-2"
        style={{width:"300px"}}
      >
        <ReactStars
          count={props.testimonial.rating}
          edit={false}
          size={24}
          color="#575CCC"
        />

        <h6 className="text-sm opacity-60 m-0">{props.testimonial.person}</h6>
        <h5 style={{minHeight:"56px"}} className="text-link m-0 my-1 text-lg">
          {props.testimonial.recommendationTitle}
        </h5>
        <p className="text-sm mb-2 mt-2" style={{minHeight:"200px"}}>
          {props.testimonial.recommendationText}
        </p>
        <h5 className="text-sm m-0 text-pink text-center border-b rounded p-1">
          {props.testimonial.chosenPlan}
        </h5>
      </div>
    )
}

export default TestimonialCard
