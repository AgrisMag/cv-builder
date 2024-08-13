import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection>
        <HeroMainTitle>ONLINE RESUME BUILDER</HeroMainTitle>
        <HeroSubTitle>
          Only 2% of resumes make it past the first round. Be in the top 2%
        </HeroSubTitle>
        <HeroDescription>
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </HeroDescription>
        <CreateResumeButton>Create My Resume</CreateResumeButton>
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
  padding: 32px 0 0;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const HeroMainTitle = styled.h1`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.8px;
  padding-bottom: 8px;
  color: #1a1c6a;
`;

const HeroSubTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
  max-width: 740px;
  text-align: center;
`;

const HeroDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  margin-bottom: 24px;
  text-align: center;
`;

const CreateResumeButton = styled(Button)`
  text-decoration: none;
  padding: 14px 24px;
  background-color: #1a91f0;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  :hover {
    background-color: #1272d0;
  }
`;

export default HomePage;
