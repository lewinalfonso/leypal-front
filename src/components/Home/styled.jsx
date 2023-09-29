import styled, { css } from 'styled-components';
import { BGColor, PColor } from '../../assets/colors';
import { animFadeInDown, animFirst } from '../animations';

export const HomeHero = styled.div`
    min-height: 770px;
    width: 100%;
    gap: 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    align-items: center;
    padding: 4% 8%;
    background-color: ${ PColor };
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;

}
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    height: 100%;
    ${ props => props.index && css` z-index: 999;` }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const ContentImg = styled.div`
    width: 100%;
    height: 700px;
    min-height: 700px;
    min-width: 100%;
    max-width: 100%;
    max-height: 700px;
    animation: ${ animFirst } 1s;
    animation-fill-mode: forwards;
    @media only screen and (max-width: 768px){
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50%;
        float: left;
}
`

export const Title = styled.h1`
    font-family: PFont-Regular;
    font-size: 60px;
    color: ${ BGColor };
    letter-spacing: 1px;
    font-weight: 400;
    animation: ${ animFadeInDown } 1s;
    animation-fill-mode: forwards;
    text-shadow: 1px 1px 7px #000000c9;
`
export const Paragraph = styled.p`
    font-family: PFont-Light;
    font-size: 30px;
    color: ${ BGColor };
    letter-spacing: 1px;
    font-weight: 400;
    animation: ${ animFadeInDown } 1s;
    animation-fill-mode: forwards;
    animation-delay: .1s;
    text-shadow: 5px 5px 7px #000000c9;
    ${ props => props.small &&css` font-size: 15px;  margin-top: 30px;` }
`