import styled from "@emotion/styled";

type PanelProps = {
  children: React.ReactNode;
};

export const Panel = ({ children }: PanelProps) => {
  return <PanelContainer>{children}</PanelContainer>;
};

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  width: 100%;
`;
