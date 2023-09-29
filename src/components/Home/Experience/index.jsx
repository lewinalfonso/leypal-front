
import React from 'react';
import Phone from '../../../assets/img/Home/image.png'
import ProgressBar from '../../common/Progress/ProgressBar';
import { HomeHero, Card, Title, Img, ContentImg } from './styled'

export const Experience = () => {
    return (<>
        <HomeHero>
            <Card index>
                <Title>Contacta La plataforma que te impulsara a lograrlo</Title>
                <ProgressBar
                    title={'MARKETING'}
                    width={'85%'}
                    text={'85%'}
                />
                <ProgressBar
                    title={'SEO'}
                    width={'100%'}
                    text={'100%'}
                />
                <ProgressBar
                    title={'DISEÑO'}
                    width={'90%'}
                    text={'90%'}
                />
                <ProgressBar
                    title={'EDICIÓN'}
                    width={'75%'}
                    text={'75%'}
                />
            </Card>
            <Card>
                <ContentImg>
                    <Img src={Phone} alt={'img'} />
                </ContentImg>
            </Card>
        </HomeHero>
    </>
    );
}