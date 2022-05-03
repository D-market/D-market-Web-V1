import styled from "styled-components";
import { VIEWPORT_WIDTH } from "../../../constants/view.constants";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
`;

export const HeaderWrap = styled.div`
  width: ${VIEWPORT_WIDTH}px;
  height: 100%;
  display: flex;
`;
