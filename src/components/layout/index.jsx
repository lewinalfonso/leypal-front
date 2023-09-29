import React, { useContext } from 'react'
import { AlertBox } from '../AlertBox'
import { Context } from '../../Context'
import { useTheme } from '../hooks/useTheme'
import styled, { ThemeProvider } from 'styled-components'
import { HeaderC as Header } from '../../container/Header'
import { Container } from './Styled'
// import { LeftSideBarContext } from './ContextLayout'
import { Context as contextLayout } from '../../Context'
import { Footer } from '../Footer'
export const LayoutFrontend = ({ children, error }) => {
    const [theme, handleTheme, mountedComponent, { keyTheme }] = useTheme()
    // Variables necesarias para El estado del contexto
    const { setAlertBox } = useContext(Context)
    if (!mountedComponent) setAlertBox({ message: '', duration: 5000, color: 'red' })
    const { collapsed } = useContext(contextLayout);
    return (
        <ThemeProvider theme={theme}>
            <AlertBox error={error} />
            <Header keyTheme={keyTheme} handleTheme={handleTheme} />
            <Container collapsed={collapsed}>
                <Main>
                    {children}
                    <Footer />
                </Main>
            </Container>
        </ThemeProvider>
    )
}
const Main = styled.div`
    margin-top: calc(70px + 5px);
    background-color: ${ ({ theme }) => theme.InvColor };
`