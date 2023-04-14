import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./Maininformation";
import { Container } from "./styled";

export const PersonalHompage = () => (
    <Container>
    <ThemeSwitch />
    <MainInformation />
    </Container>
)