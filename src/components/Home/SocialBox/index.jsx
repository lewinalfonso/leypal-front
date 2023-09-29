import React from 'react'
import { BGColor } from '../../../assets/colors'
import { IconYoutube, IconTwitter, IconInstagram, Facebook, TikTok, IconWhatsApp } from '../../../assets/icons/icons'
import { Container, Box, ContentIcon } from './styled'

export const Social = () => {
    return (
        <Container>
            <Box>
                <div>
                    <ContentIcon>
                        <a style={{ margin: '0px 10px' }} target='_blank' href='https://www.youtube.com/watch?v=klIF0nhsxxM&list=RDMM&index=17' >
                            <Facebook size='40px' color={BGColor} />
                        </a>
                        <a style={{ margin: '0px 10px' }} target='_blank' href='https://www.youtube.com/watch?v=klIF0nhsxxM&list=RDMM&index=17' >
                            <IconInstagram size='40px' color={BGColor} />
                        </a>
                        <a style={{ margin: '0px 10px' }} target='_blank' href='https://www.youtube.com/watch?v=klIF0nhsxxM&list=RDMM&index=17' >
                            <IconTwitter size='40px' color={BGColor} />
                        </a>
                        <a style={{ margin: '0px 10px' }} target='_blank' href='https://www.youtube.com/watch?v=klIF0nhsxxM&list=RDMM&index=17' >
                            <IconYoutube size='40px' color={BGColor} />
                        </a>
                        <a style={{ margin: '0px 10px' }} target='_blank' href='https://www.youtube.com/watch?v=klIF0nhsxxM&list=RDMM&index=17' >
                            <TikTok size='40px' color={BGColor} />
                        </a>
                        <a style={{ margin: '0px 10px' }} target='_blank' href='https://www.youtube.com/watch?v=klIF0nhsxxM&list=RDMM&index=17' >
                            <IconWhatsApp size='40px' color={BGColor} />
                        </a>
                    </ContentIcon>
                </div>
            </Box>
        </Container>
    )
}