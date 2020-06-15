import styled from 'styled-components';
import { Row } from 'reactstrap';

export const Input = styled.input`
  padding: 20px;
  font-size: 1.3rem;
  background-color: #352ddc;
  outline: none;
  font-weight: bold;
  box-shadow: none;
  color: #ffffff;
  border: none;
  ::-webkit-input-placeholder {
    /* Edge */
    color: #cececee3;
  }

  :-ms-input-placeholder {
    color: #cececee3;
  }

  ::placeholder {
    color: #cececee3;
  }
`;

export const ContentInput = styled(Row)`
  display: flex;
  width: 100%;
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
