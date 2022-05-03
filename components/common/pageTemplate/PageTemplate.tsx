import { ReactNode } from "react";
import styled from "styled-components";
import { VIEWPORT_WIDTH } from "../../../constants/view.constants";
import Header from "../header/Header";

type Props = {
  children: ReactNode;
};

const PageTemplate = ({ children }: Props): JSX.Element => {
  return (
    <TemplateContainer>
      <Header />
      <TemplateWrap>{children}</TemplateWrap>
    </TemplateContainer>
  );
};

export default PageTemplate;

const TemplateContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

const TemplateWrap = styled.div`
  width: ${VIEWPORT_WIDTH}px;
  display: flex;
  flex-direction: column;
`;
