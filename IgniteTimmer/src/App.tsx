// Styled Components
// npm i styled-components
// Types do styled Components
// npm i @types/styled-components -D

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CycleContetx'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      
      <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
