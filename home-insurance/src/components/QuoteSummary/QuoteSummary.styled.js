import styled from 'styled-components';

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-width: max(1px, 0.1em);
  border-style: solid; 
  border-color: lightgrey;
  @media screen and (max-width: 960px) {
    padding: 20px 30px;
  }
`;

export const PricingCardContent = styled.div`
  display: flex;
  align-items:center;
  flex: 1 1 auto;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    align-items: flex-start;
  }
  Button{
    margin-bottom: 20px;
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;


export const PricingCardLength = styled.p`
  font-size: 34px;
  margin-bottom: 16px;
`;

export const PricingCardText = styled.div`
  font-size: 20px;
  padding: 0px 50px 30px 50px;
  text-align:center;  
  @media screen and (max-width: 960px) {    
    text-align:left;
    padding: 0px 0px 30px 0px;
  }
`;

export const ButtonContainer = styled.div` 
  display: flex;
  flex-direction:row;
  padding-bottom:20px;  
`;

