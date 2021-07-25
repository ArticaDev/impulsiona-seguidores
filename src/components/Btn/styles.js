import styled from '@emotion/styled';

const style =  (Component) => styled(Component)`
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

`;

export default style;