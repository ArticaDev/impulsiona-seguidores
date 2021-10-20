import React, { useState } from "react";
import style from "./styles";
import Collapse from "@kunukn/react-collapse";
import { ArrowDown, Cross } from "akar-icons";

const SectionFaq = ({ className }) => {
  const [faqs, setFaqs] = useState([
    {
      question: "É seguro comprar seguidores conosco?",
      answer:
        "Como foi dito anteriormente, nosso sistema não pede por informações pessoais que estejam relacionadas com sua senha do Instagram pois precisamos apenas do seu @usuário para te entregar os seguidores contratados dos planos. Também contamos com sistema que utiliza de criptografia e recursos tecnológicos avançados para processar seu pagamento de forma segura.",
      open: false,
    },
    {
      question: "Os seguidores são reais mesmo?",
      answer:
        "São seguidores reais e brasileiros. Nós do ImpulsionaSeguidores não trabalhamos com seguidores fakes muito menos árabes. O que entregamos para nossos clientes são seguidores 100% ativos e totalmente brasileiros.",
      open: false,
    },
    {
      question: "Tenho algum risco de bloqueio?",
      answer:
        "Absolutamente nenhum risco você estará correndo ao assinar seja o plano de seguidores, curtidas ou os dois (combo). Nós respeitamos as diretrizes e boas práticas do Instagram e nunca temos a intenção de infringi-las de forma que seu perfil fique prejudicado de alguma forma.",
      open: false,
    },
    {
      question: "Preciso deixar o perfil aberto?",
      answer:
        "Sim! Nosso sistema precisa validar seu perfil primeiro para depois mandarmos o que foi contratado no plano sejam curtidas ou seguidores. A validação não ocorre quando você deixa seu perfil no privado.",
      open: false,
    },
    {
      question: "Vou perder seguidores depois da assinatura?",
      answer:
        "Perder seguidores é algo que pode ocorrer em qualquer perfil independente se comprou seguidores ou não. Sendo assim, como nós trabalhamos com perfis nacionais, pode ser que eventualmente um perfil ou outro pare de te seguir. Então, repomos eles para você sem nenhum custo e temos uma taxa de reposição de até 15% dos seguidores perdidos.",
      open: false,
    },
    {
      question: "Quanto tempo leva para meu pedido começar?",
      answer:
        "Imediatamente! Assim que seu pagamento feito por cartão, PIX ou boleto for compensado através, nosso sistema automaticamente começará a promover sua conta em nossa rede de pessoas para que você obtenha todos os seguidores e curtidas de acordo com o plano contratado.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className={className}>
      <div className="m-0 lg:px-44 bg-grey pb-6">
        <h2 className="text-center m-0 pt-6 mb-8">Perguntas Frequentes</h2>
        <div className="flex lg:flex-row flex-wrap justify-center">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded bg-white w-96 mx-2 shadow p-6 mb-2 ${
                faq.open === true ? "h-auto" : "h-28"
              }`}
            >
              <div className="grid grid-flow-col grid-cols-1 grid-rows-1 items-center">
                <h5 style={{ maxWidth: "280px" }} className="m-0">
                  {faq.question}
                </h5>
                <button
                  className=" m-4 justify-self-end border border-link rounded-full"
                  onClick={() => toggleFAQ(index)}
                >
                  {!faq.open && <ArrowDown className="text-link p-1" />}
                  {faq.open && <Cross className="text-link  p-1" />}
                </button>
              </div>
              <Collapse className="collapse-css-transition" isOpen={faq.open}>
                {faq.open && <p className="lg:mt-3 mt-2">{faq.answer}</p>}
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default style(SectionFaq);
