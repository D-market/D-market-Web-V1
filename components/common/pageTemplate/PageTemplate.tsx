import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const PageTemplate = ({ children }: Props): JSX.Element => {
  return <TemplateContainer>{children}</TemplateContainer>;
};

export default PageTemplate;

const TemplateContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
`;
