
import React from 'react';
import ImgRubius from '../../assets/img/Home/rubius.jpg'
import { TextAnimation } from '../animations/TextAnimation';
import { ButtonHook } from '../common/ButtonHook';
import { Experience } from './Experience';
import { InfluencerBox } from './InfluencerBox';
import { OurTeam } from './OurTeam';
import { Social } from './SocialBox';
import { HomeHero, Card, Title, Paragraph, Img, ContentImg } from './styled'

export const Home = () => {
    return (<>
        <HomeHero>
            <Card index>
                <Title>La plataforma que conecta marcas con <TextAnimation /></Title>
                <Paragraph>La mejor forma de crear, gestionar y medir tus campañas con influencers</Paragraph>
                <Paragraph small >Micro-influencers para movilizar las campañas de
                    instituciones, política, sociedad, universidades, solidaridad, cultura, deportes o startups
                </Paragraph>
                <ButtonHook margin='30px 0px' HoverEfect padding='20px 30px'>Soy una marca</ButtonHook>
            </Card>
            <Card>
                <ContentImg>
                    <Img src={ImgRubius} alt={'img'} />
                </ContentImg>
            </Card>
        </HomeHero>
        <Experience />
        <OurTeam />
        <InfluencerBox />
        <Social />
    </>
    );
}