import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CoffesContextProvider } from "./contexts/CoffesContext"
import { Router } from "./router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesContextProvider>
          <Router />
        </CoffesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
