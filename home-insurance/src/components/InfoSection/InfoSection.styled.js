import styled from 'styled-components';

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0; 
`;

export const InfoColumn = styled.div`
  display: flex;
  padding: 20px;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 50%;
  }
`;

