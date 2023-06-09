import { ThemeSwitch } from "./ThemeSwitch";
import { MainInformation } from "./Maininformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { nextSkills, skills } from "./skillsData";
import { Container, Icon } from "./styled";
import toolsIcon from "./images/tools.webp";
import rocketIcon from "./images/rocket.webp";
import { Footer } from "./Footer";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInformation />

    <main>
      <Skills
        title={
          <>
            My skillset includes <Icon src={toolsIcon} alt="" />
          </>
        }
        skills={skills}
      />
      <Skills
        title={
          <>
            What I want to learn next <Icon src={rocketIcon} alt="" />
          </>
        }
        skills={nextSkills}
      />
      <Portfolio />
    </main>
    <Footer />
  </Container>
);
