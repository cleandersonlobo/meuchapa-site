import styled from 'styled-components';

export const Circle = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.color || '#eeeeee'};
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
