import {GlobalStyle} from "./GlobalStyle";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { darkMode, lightMode } from "./theme";
import { selectIsDarkMode } from "../../common/modeSlice";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);
  
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
