import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Footer</h1>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Footer;
