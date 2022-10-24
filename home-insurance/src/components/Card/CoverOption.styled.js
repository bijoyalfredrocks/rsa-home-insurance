import styled from "styled-components";

export const CoverOptionColumn = styled.div` 
  display: flex;
  padding: 20px;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 50%;
  }
`;

export const CoverOptionCard = styled.div` 

  display: flex;
  flex-direction: column;  
  padding: 30px;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);  
  overflow: hidden;  
  /* border-width: max(1px, 0.1em);
  border-style: solid; 
  border-color: lightgrey; */
  border: solid ${({ selected }) => (selected ? '2px' : '1px')} ${({ selected }) => (selected ? '#0275d8' : 'lightgrey')};
`;

export const CoverOptionCardContent = styled.div` 
  
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const BtnContainer = styled.div` 
  display: flex;
  flex-direction:column;
  margin-top: auto; 
  Button{
    align-self: flex-end;
    @media screen and (max-width: 960px) {
    align-self: flex-start;
    }
  }
`;

export const TitleContainer = styled.div`  
  display: flex;  
  justify-content: space-between;
  flex-wrap:wrap;
  padding-bottom:30px;
`;

export const CoverOptionCardTitle = styled.div`
display: flex;
flex-wrap:wrap;
flex:70%;
//margin-right:auto;
font-size: 35px;
`
export const CoverOptionCardPrice = styled.div`
flex-wrap:wrap;
padding-top: 10px;
font-size: 20px;
`
export const CoverOptionCardText = styled.div`
  font-size: 20px;
  padding-top: 0;
  padding-bottom: 40px;
  margin-bottom: auto;  
`
