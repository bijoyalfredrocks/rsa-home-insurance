import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  letter-spacing: 0.015rem;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding:20px;
`;

export const Button = styled.button`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? '#0275d8' : '#d9534f')};
  white-space: nowrap;
  padding: 16px 30px;
  color: #fff;
  width:${({ large }) => (large ? '80%' : '240px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};  
  outline: none;
  border: none;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Shadow = styled.div`
  border-bottom: 1px solid lightgrey;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardWrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export default GlobalStyle;
