import styled from "@emotion/styled";

const style = (Component) => styled(Component)`
  .titulo-strong {
    font-size: 32px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
  }
  .titulo {
    font-size: 32px;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
  }

h3{
  font-size:26px;
}
  p{
    font-size:20px;
    padding:10px;
  }
  .card{
      min-width:200px;
      max-width:400px;
  }

`;

export default style;
