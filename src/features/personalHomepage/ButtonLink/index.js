import styled from "styled-components";

export const ButtonLink = styled.a`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shodaw};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
