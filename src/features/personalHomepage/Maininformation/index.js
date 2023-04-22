import { email } from "../email";
import ProfilePicture from "./profile.webp";
import {
  Avatar,
  ButtonIcon,
  FullName,
  StyledButtonLink,
  Summary,
  ThisIs,
  Wrapper,
} from "./styled";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={ProfilePicture} alt="Mateusz Piaszczyk" />
    <div>
      <ThisIs>My Name is</ThisIs>
      <FullName>Mateusz Piaszczyk</FullName>
      <Summary>
        👨🏻‍💻 I’m a passionate Frontend Developer in love with React,currently
        looking for new job opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire Me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
