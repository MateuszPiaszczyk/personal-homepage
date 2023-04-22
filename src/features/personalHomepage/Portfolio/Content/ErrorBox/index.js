import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarrningIcon } from "./warrning.svg";

export const ErrorBox = () => {
  <Wrapper>
    <WarrningIcon />
    <Header>Oops! Something wet &nbsp;wrong..</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp; projects. <br />
      You can check them directly&nbsp; on&nbsp; Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to GitHub
    </ButtonLink>
  </Wrapper>
};
