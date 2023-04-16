import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { MainInformation } from "./Maininformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Portfolio/Content/Skills";
import { nextSkills, skills } from "./skillsData";
import { Container, Icon } from "./styled";
import toolsIcon from "./images/tools.webp";
import rocketIcon from "./images/rocket.webp";

export const PersonalHomepage = () => (
    <Container>
    <ThemeSwitch />
    <MainInformation />

    <main>
        <Skills
            title={(
                <>
                My skillset includes <Icon src={toolsIcon} alt="" />
                </>
            )}
            skills={skills}
            />
        <Skills
            title={(
                <>
                My skillset includes <Icon src={rocketIcon} alt="" />
                </>
            )}
            skills={nextSkills}
            />
            <Portfolio />
    </main>
    <Footer />
    </Container>
)