import styled from 'styled-components';
import { Row } from 'reactstrap';

export const Input = styled.input`
  padding: 20px;
  font-size: 1.3rem;
  background-color: #b70013;
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
  padding: 10px;
  border-radius: 50px;
  background-color: #b70013;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 50px;
  padding-left: 30px;
  padding-right: 30px;
  color: #b70013;
  outline: none !important;
  border: none;
  background-color: #ffffff;
  &:active {
    border: none;
  }
`;
