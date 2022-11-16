import styled from '@emotion/styled';

export const CardMovieContainer = styled.div`
  padding-left: 15px;
`;

export const CardButtonBack = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 34px;
  line-height: 1.33;
  min-width: 130px;
  min-height: 44px;
  color: #ffffff;
  background-color: transparent;
  border-color: #ffffff;
  border-radius: 5px;
  &:hover,
  &:focus {
    background: #ff6b01;
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transform: translateY(5%) scale(1.1);
  }
  background: linear-gradient(transparent, grey);
  display: block;
`;
