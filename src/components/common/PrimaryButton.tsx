import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled(Button)`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

export default PrimaryButton;
