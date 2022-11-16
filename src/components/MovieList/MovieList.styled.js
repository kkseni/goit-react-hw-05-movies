import styled from '@emotion/styled';

export const ContainerList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const MovieListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCardItem = styled.li`
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  width: 100%;
  max-width: 315px;
  margin: 0.5em;
  border-radius: 10px;
  display: inline-block;
  display: table-caption;
  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.03);
    transform: scale(1.05);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

export const MovieTitle = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin: 0;
`;

export const MovieImage = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
