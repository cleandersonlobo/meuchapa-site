import styled from 'styled-components';

export const Input = styled.input`
  padding: 20px;
  font-size: 1.3rem;
  background-color: #352ddc;
  outline: none;
  font-weight: bold;
  box-shadow: none;
  color: #ffffff;
  border: none;
  :-moz-placeholder {
    color: white;
  }
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #352ddc;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 50px;
  padding-left: 30px;
  padding-right: 30px;
  color: #352ddc;
  outline: none;
  background-color: #ffffff;
`;
