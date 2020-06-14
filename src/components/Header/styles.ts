import styled from 'styled-components';
import { Button } from 'reactstrap';

export const Image = styled.img.attrs({
  className: 'img-fluid',
})``;

export const Title = styled.h2`
  font-size: calc(1.8rem + 0.2vw);
  font-weight: 500;
  color: #1f1e1e;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
  line-height: calc(2rem + 0.5vw);
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.9rem;
  color: #525050;
  margin-bottom: 40px;
`;

export const ButtonHelper = styled(Button)`
  border-radius: 30px !important;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 300;
  background-color: #b70013;
`;

export const ButtonIcon = styled(Button)`
  border-radius: 30px !important;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 300;
  outline: none !important;
  color: #352ddc !important;
  &:focus {
    box-shadow: none;
  }
  &:active {
    color: #352ddc !important;
  }

  span {
    margin-left: 10px;
  }
`;
