import React from "react";
import YouTube from "react-youtube";
import LazyLoad from "react-lazyload";

const TestimonialsVideos = () => {
  return (
    <div className="bg-grey xl:px-52">
      <h3 className="text-center m-0 pb-12 px-4">Veja também alguns depoimentos de quem <strong className="text-green">comprou e adorou!</strong></h3>
      <LazyLoad
        once /*if set to true, the performance goes up a bit, but this is better for the user.*/
      >
        <div className="grid lg:grid-flow-col-dense place-items-center">
          <YouTube
            videoId="DZrUNvLAiR0" // defaults -> null
            className="w-80 pb-4 mb-2" // defaults -> null
            opts={{ height: "600px" }}
          />
          <YouTube
            videoId="6tbdwLaP-Nw" // defaults -> null
            className="w-80 pb-4 mb-2" // defaults -> null
            opts={{ height: "600px" }}
          />
          <YouTube
            videoId="jHIehgvMdl4" // defaults -> null
            className="w-80 pb-4 mb-2 lg:mb-0" // defaults -> null
            opts={{ height: "600px" }}
          />
        </div>
      </LazyLoad>
    </div>
  );
};

export default TestimonialsVideos;
