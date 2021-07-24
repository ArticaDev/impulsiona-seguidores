import styled from '@emotion/styled';

const style =  (Component) => styled(Component)`
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;

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

    .thumbnail{
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;
    }

    .content img{
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
        max-width: 60%;
    }

    @media screen and (max-width:641px) { 
        width: 100%;
        .content img{
            max-width: 100%;
        }
    } 
 

`;

export default style;