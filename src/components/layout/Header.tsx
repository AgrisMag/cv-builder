import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HomeNavigationLink to="/">
        <Logo src={logo} alt="CV Builder Logo" />
        <p>CV Builder</p>
      </HomeNavigationLink>
      <NavigationContainer>
        <StyledLink to="/resume">Resume</StyledLink>
        <StyledLink to="/cover-letter">Cover Letter</StyledLink>
        <StyledLink to="/#">Blog</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
        <NavBarSeparator />
        <SignInLink to="/login">Log In</SignInLink>
        <SignUpLink to="/register">Sign Up</SignUpLink>
      </NavigationContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1rem;
  color: 1e2532;
`;

const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 8px;
`;

const HomeNavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e2532;
  font-size: 19px;
  font-weight: 400;
  padding: 0 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1e2532;
  font-size: 19px;
  font-weight: 400;
  padding: 0 16px;
  :hover {
    color: #1272d0;
  }
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  padding: 14px 24px;
  background-color: #1a91f0;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  :hover {
    background-color: #1272d0;
  }
`;

const SignInLink = styled(Link)`
  text-decoration: none;
  font-size: 19px;
  margin-right: 24px;
  color: #1a91f0;
  background-color: #ffffff;
  border-radius: 2px;
  :hover {
    color: #1272d0;
  }
`;

const NavBarSeparator = styled.div`
  height: 16px;
  width: 1px;
  background-color: #d9deeb;
  color: #1e2532;
  margin-left: 24px;
  margin-right: 40px;
`;

export default Header;
