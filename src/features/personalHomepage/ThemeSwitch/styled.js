import styled, { css } from "styled-components";
import { ReactComponent as BrightnessIcon } from "./brightness.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: inherit;
  background: none;
  border: none;
  outline-offset: 10px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
  margin-top: 22px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  display: flex;
  width: 48px;
  margin-top: 22px;
  border-radius: 12px;
  padding: 3px;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
  
`;

export const IconWrapper = styled.span`
  background: ${({ theme }) => theme.colors.themeSwitch.iconWrapper};
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.5s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(BrightnessIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
