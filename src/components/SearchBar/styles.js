import styled from '@emotion/styled';

const style =  (Component) => styled(Component)`
input:focus-visible{
    border: 1px solid #555CCC;
}

::placeholder{
    color: #575CCC;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #575CCC;
}
  
::-ms-input-placeholder { /* Microsoft Edge */
    color: #575CCC;
}
`;

export default style;