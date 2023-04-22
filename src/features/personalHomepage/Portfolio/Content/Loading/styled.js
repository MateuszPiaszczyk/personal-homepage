import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  margin-top: 80px;
  justify-items: center;
  display: grid;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  height: auto;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 60px;
    margin-top: 32px;
  }
`;
