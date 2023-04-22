import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    Please wait, projects are being loaded.. <br />
    Proszę czekać, trwa ładowanie projektów..
    <StyledSpinner />
  </Wrapper>
);
