import styled from 'styled-components';

export const Circle = styled.div`
  padding: 20px;
  display: inline-block;
  border-radius: 50px;
  width: 75px;
  height: 75px;
  text-align: center;
  background-color: ${(props) => props.color || '#eeeeee'};
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
