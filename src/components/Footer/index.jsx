import React, { useEffect, useState } from 'react'
import { PColor } from '../../assets/colors'
import { Container, Enlace, Content, Copyright, CopyrightInformation, ContainerLogo, ContainerSocial, ContentSocial, Title } from './styled'
import { IconLogo, Facebook, IconTwitter, IconInstagram, IconYoutube } from '../../assets/icons/icons'
export const Footer = () => {
    const [year, setYear] = useState(false)

    useEffect(() => {
        const fecha = new Date()
        setYear(fecha.getFullYear())
    }, [])

    // const onClickTop = e => {
    //     e.preventDefault()
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // }
    return (<>
        <ContainerSocial>
            <ContentSocial>
                <Title>Nosotros</Title>
                <Enlace to='/quienes-somos'>Quiénes somos</Enlace>
                <Enlace to='/ayuda'> Centro de ayuda</Enlace>
                <Enlace to='/registration'> Registrate</Enlace>
            </ContentSocial>
            <ContentSocial>
                <Title>Descrubre</Title>
                <Enlace to='/como-comprar'>Como pedir</Enlace>
                <Enlace to='/contactanos'> Contacto</Enlace>
                <Enlace to='/login'> Ingresa</Enlace>
            </ContentSocial>
            <ContentSocial>
                <Title>Ayuda PQR</Title>
                <Enlace to='/preguntas-frecuentes'>Preguntas  /  frecuentes - </Enlace>
            </ContentSocial>
            <ContentSocial>
                <Title>Social</Title>
                <a style={{ margin: '0px 10px' }} href='https://www.ifood.com.co/lista-restaurantes' >
                    <Facebook size='40px' color={PColor} />
                </a>
                <a style={{ margin: '0px 10px' }} href='https://www.ifood.com.co/lista-restaurantes' >
                    <IconInstagram size='40px' color={PColor} />
                </a>
                <a style={{ margin: '0px 10px' }} href='https://www.ifood.com.co/lista-restaurantes' >
                    <IconTwitter size='40px' color={PColor} />
                </a>
                <a style={{ margin: '0px 10px' }} href='https://www.ifood.com.co/lista-restaurantes' >
                    <IconYoutube size='40px' color={PColor} />
                </a>
            </ContentSocial>
        </ContainerSocial>
        <Container grid >
            <Content grid>
                <ContainerLogo>
                    <IconLogo size='40px' color={PColor} />
                </ContainerLogo>
                <Copyright>{year} © Copyright - COME YA S.A.S. sociedad comercial identificada con NIT No. 900.666.435-</Copyright>
                <CopyrightInformation>Carrera 51B Nº 80-58 , Oficina 601, Barranquilla, Atlántico 080020, CO. </CopyrightInformation>
            </Content>
            <Content>
                {/* <button onClick={onClickTop}>TOP</button> */}
                <Enlace to='/terminos-y-condiciones'> Términos y condiciones</Enlace>
                <Enlace to='/seguridad'> Seguridad</Enlace>
                <Enlace to='/aviso-de-privacidad'> Aviso de privacidad</Enlace>
            </Content>
        </Container>
    </>
    )
}