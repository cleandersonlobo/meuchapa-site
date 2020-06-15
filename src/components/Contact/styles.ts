import styled from 'styled-components';
import { Row } from 'reactstrap';

export const Input = styled.input`
  padding: 20px 10px;
  min-width: 100%;
  font-size: 1.2rem;
  padding-left: 30px;
  background-color: #b70013;
  outline: none;
  font-weight: bold;
  box-shadow: none;
  border-radius: 50px;
  color: #ffffff;
  border: none;
  opacity: 0.8;

  &:focus {
    opacity: 1;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #fafafa;
  }

  :-ms-input-placeholder {
    color: #fafafa;
  }

  ::placeholder {
    color: #fafafa;
  }
`;

export const ContentInput = styled(Row)`
  border-radius: 50px;
  background-color: #b70013;
`;

export const Button = styled.button`
  padding: 20px 50px;
  border-radius: 50px;
  color: #b70013;
  outline: none !important;
  border: none;
  background-color: #ffffff;
  &:active {
    border: none;
  }
`;
