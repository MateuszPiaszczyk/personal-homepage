import { email } from "../email";
import { SocialIcon } from "./SocialIcons";

import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>I'm always open to new projects!</Paragraph>
      <SocialIcon />
    </Address>
  </Wrapper>
);
