import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { selectDarkTheme } from "../../features/personalHomepage/Portfolio/themeSlice";
import { PersonalHomepage } from "../../features/personalHomepage";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";

export const App = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
