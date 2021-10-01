import React from "react";
import ReactStars from "react-rating-stars-component";

const TestimonialsCards = () => {
  const testimonials = [
    {
      rating: 5,
      person: "Fabiana Silva – Blogueira de moda",
      recommendationTitle: "RECOMENDO DEFINITIVAMENTE",
      recommendationText:
        "O impulsiona seguidores foi muito importante no processo de evolução da minha marca no mercado digital! A empresa permitiu que eu ganhasse rapidamente novos seguidores todos os dias e com muito sucesso. Graças ao impulsiona seguidores, consegui construir minha presença no Instagram de forma segura e confiável!",
      chosenPlan: "Plano de 3000 Seguidores/Mês",
    },
    {
      rating: 4,
      person: "Nicole Andrade – Influencer Digital",
      recommendationTitle: "ESTOU MUITO SATISFEITA",
      recommendationText:
        "Este é realmente um site incrível, você pode obter até 200 seguidores e 200 curtidas em um post recente todos os dias. Assinei o combo e hoje e o plano que assinei faz exatamente o que diz 100% garantido.",
      chosenPlan: "Plano de 6000 Seguidores/Mês",
    },
    {
      rating: 5,
      person: "Fábio Oliveira – Fotógrafo",
      recommendationTitle: "MELHOR CUSTO BENEFÍCIO",
      recommendationText:
        "Minhas fotos não estavam recebendo o amor que eu realmente sentia que mereciam. Sou fotógrafo de natureza há quase 2 anos, mas meu perfil nunca foi muito popular. Depois de assinar o Impulsiona Seguidores por cerca de 2 semanas, ganhei cerca de 700 novos seguidores e recebo mais 500 curtidas em média por foto e os números só tem aumentado desde então.",
      chosenPlan: "Plano Combo 1500 Seguidores/Mês",
    },
    {
      rating: 4,
      person: "Eliane Ribeiro – Estética de Beleza",
      recommendationTitle: "NADA A RECLAMAR",
      recommendationText:
        "Site absolutamente incrível, realmente funciona. Verifiquei a maioria dos perfis dos quais estou recebendo curtidas e realmente são curtidas reais de perfis fortes do Instagram.",
      chosenPlan: "Plano 100 Curtidas/Post",
    },
  ];

  const cards = testimonials.map((testimonial, index) => {
    return (
      <div
        className="bg-white w-80 rounded-md shadow p-4 h-96 mb-4 mx-2"
        key={index}
        style={{width:"300px"}}
      >
        <ReactStars
          count={testimonial.rating}
          edit={false}
          size={24}
          color="#575CCC"
        />

        <h6 className="text-sm opacity-60 m-0">{testimonial.person}</h6>
        <h5 style={{minHeight:"56px"}} className="text-link m-0 my-1 text-lg">
          {testimonial.recommendationTitle}
        </h5>
        <p className="text-sm mb-2 mt-2" style={{minHeight:"200px"}}>
          {testimonial.recommendationText}
        </p>
        <h5 className="text-sm m-0 text-pink text-center border-b rounded p-1">
          {testimonial.chosenPlan}
        </h5>
      </div>
    );
  });

  return (
    <div className="bg-grey px-2 lg:px-0 xl:px-14 2xl:px-24 ">
      <h3 className="m-0 pt-5 text-center pb-9">
        Veja como é a experiência de comprar seguidores na{" "}
        <strong className="text-green">Impulsiona Seguidores</strong>
      </h3>
      <div className=" grid lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 xl:grid-flow-col-dense justify-center place-items-center">
        {cards}
      </div>
    </div>
  );
};

export default TestimonialsCards;
