import React from "react";
import style from "./styles";
import { WhatsappFill, Envelope } from 'akar-icons';
import { useStaticQuery, graphql } from "gatsby"


const SectionContact = ({ className }) => {
    const data = useStaticQuery(graphql`
    query {
        allWpPagina {
          edges {
            node {
              id
              camposDaPaginaInicial{
                emailParaContato
                numeroParaContato
              }
            }
          }
        }
      }    
  `)

    return (
        <>
            <div className={className}>
                <section className="h-full w-full contact bg-grey px-10 lg:px-52 pb-36" >
                    <h3 className="titulo m-0 text-black block mx-auto pt-10 mb-12">Entre<strong className="titulo-strong">&nbsp;em contato conosco</strong></h3>
                    <div className="flex row justify-center px-10">
                        <button><a rel="noreferrer" target="_blank" href={`https://web.whatsapp.com/send?phone=${data.allWpPagina.edges[0].node.camposDaPaginaInicial.numeroParaContato}&text=`}>
                            <WhatsappFill className="mr-16" color={"#00E676"} size={76} /></a></button>
                        <button><a href={"mailto:"+data.allWpPagina.edges[0].node.camposDaPaginaInicial.emailParaContato}>
                            <Envelope color={"#575CCC"} size={76} />
                        </a></button>
                    </div>
                </section>
            </div>
        </>

    );
};

export default style(SectionContact);
