import React from 'react'
import { RippleButton } from '../../Ripple'
import { Container, Box, Subtitle, Paragraph } from './styled'

export const InfluencerBox = () => {
    return (
        <Container>
            <Box>
                <div style={{ width: '70%' }}>
                    <Subtitle>INFLUENCIADORES</Subtitle>
                    <Paragraph>¿Quieres colaborar con las marcas que amas y ganar dinero en las redes sociales?</Paragraph>
                </div>
                <div style={{ width: '30%' }}>
                    <RippleButton margin='30px 0px' HoverEfect padding='20px 30px'>Soy una marca</RippleButton>
                </div>
            </Box>
        </Container>
    )
}