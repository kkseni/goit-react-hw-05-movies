import { NavBar, HeaderWrapper, NavLinkStyled } from './Header.styled';

const Header = () => {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </HeaderWrapper>
      </NavBar>
    </>
  );
};

export default Header;
