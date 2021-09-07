import styled from "@emotion/styled";

const style = (Component) => styled(Component)`

.card{
    height: 350px;
width: 300px;
background: #FFFFFF;
border-radius: 11px;
filter: drop-shadow(4px 11px 10px rgba(0, 0, 0, 0.125));
transition: 0.5s;
}

h2{
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
}

.card-border{
    background: #575CCC;
border-radius: 11px 11px 0px 0px;
width:100%;
position:absolute;
top:0%;
}

.btn{
min-height:50px;
padding: 5px;
width: 200px;
border-radius: 5px;
background: #F2295B;
box-shadow: 0px 4px 4px 0px #00000040;
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
}

h4{
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;

}

h3{
    color: #717171;
font-size: 40px;
font-weight: 700;
line-height: 58px;
letter-spacing: 0em;
text-align: left;
}
h6{
    color: #717171;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;

}

.texto{
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;
}

.card-increase{
    height: 500px;
    transition: 0.5s;
}

@media (min-width:768px){
    .card-increase{
    height:500px;
    width:620px;
    transition:0.5s;}
}

.btn-inverse{
min-height:50px;
padding: 5px;
width: 200px;
border-radius: 5px;
background: #FFF;
box-shadow: 0px 4px 4px 0px #00000040;
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
}

.ribbon-container{
    position: absolute;
    top: 0;
    left: 0;
    right: auto;

    width: 150px;
    overflow: hidden;
    height: 150px;
}

.ribbon{
    background-color: #FF0000D6;
    text-align: center;
    left: 0;
    width: 200%;
    -webkit-transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    -ms-transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    margin-top: 35px;
    font-size: 13px;
    line-height: 2;
    font-weight: 800;
    text-transform: uppercase;
}

`;

export default style;
