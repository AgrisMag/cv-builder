import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      <NavigationContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cv-builder">CV Builder</StyledLink>
        <NavBarSeparator />
        <SignInLink to="/login">Log In</SignInLink>
        <PrimaryButton>
          <SignUpLink to="/register">Sign Up</SignUpLink>
        </PrimaryButton>
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1e2532;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #1e2532;
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const SignInLink = styled(Link)`
  text-decoration: none;
  color: #1e2532;
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
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
