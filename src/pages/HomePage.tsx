import styled from "@emotion/styled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection>
        <h1>ONLINE RESUME BUILDER</h1>
        <h1>
          Only 2% of resumes make it past the first round. Be in the top 2%
        </h1>
        <p>
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </p>
        <button>Get Started</button>
      </HeroSection>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eff2f9;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HomePage;
