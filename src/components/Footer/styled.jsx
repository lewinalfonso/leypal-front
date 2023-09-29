import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BGColor, PColor, PLColor } from '../../assets/colors';

export const Container = styled.div`
    background-color: ${ BGColor };
    /* border-top: 1px solid ${ PColor }; */
    padding: 30px;
    width: 100%;
    height: auto;
    display: grid;
    max-width: 1200px;
    margin: auto;
    grid-auto-columns: min-content;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    border-top: 1px solid #dcdcdc;
    padding: 40px 0 10px;
`

export const Enlace = styled(Link)`
    color: ${ PLColor };
    font-weight: 300;
    line-height: 29px;
    list-style: initial;
    font-family:  PFont-Light;
    margin: 7px 0px;
    font-size: 14px;
    display: block;
`
export const Copyright = styled.li`
    grid-area: company-copy;
    width: 100%;
    font-size: 0.6875rem;
    line-height: 1.35;
    font-weight: 300;
    color: #717171;
    margin: 0;
    list-style: none;
`
export const CopyrightInformation = styled.li`
    grid-area: company-info;
    width: 100%;
    font-size: 0.6875rem;
    line-height: 1.35;
    font-weight: 300;
    color: #717171;
    margin: 0;
    list-style: none;
`
export const ContainerLogo = styled.div`
    flex-basis: 64px;
    margin-right: 20px;
    margin-left: 20px;
    min-width: 50px;
    grid-area: logo-link;
`
export const Content = styled(Link)`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-column-gap: 10px;
    ${ props => props.grid &&css`
        display: grid;
        align-items: center;
        grid-gap: 0 20px;
        grid-template-columns: 50px 1fr;
        grid-template-areas:
        'logo-link company-copy'
        'logo-link company-info';

    ` }
`

// Social
export const ContainerSocial = styled.div`
    background-color: ${ BGColor };
    /* border-top: 1px solid ${ PColor }; */
    padding: 30px;
    width: 100%;
    height: auto;
    display: grid;
    max-width: 1200px;
    margin: auto;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 0;
    border-top: 1px solid #dcdcdc;
    padding: 40px 0 10px;
    position: relative;
    @media only screen and (max-width: 768px){
        gap: 10px;
        padding: 30px;
        grid-template-columns: repeat(2, 1fr);
    }   
`

export const ContentSocial = styled.div`
    flex-basis: 50%;
    @media only screen and (min-width: 768px){
        flex-basis: 25%;
    }
`
export const Title = styled.h1`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.22;
    margin-top: 0;
    margin-bottom: 30px;
    color: #3e3e3e;
`