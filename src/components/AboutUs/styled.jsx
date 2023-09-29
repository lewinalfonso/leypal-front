import styled from 'styled-components';
import { PColor } from '../../assets/colors';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    padding: 0 30px;
    max-width: 900px;  
`
export const Title = styled.h1`
font-size: 1.625rem;
    color: ${ PColor };
    margin: 20px 0;
    text-align: center;
    font-weight: 500; 
    font-family:  PFont-Medium;
`
export const Paragraph = styled.p`
    font-weight: 300;
    line-height: 29px;
    text-align: justify;
    list-style: initial;
    color: #717171;
    font-family:  PFont-Light;
    margin: 7px 0px;
    font-size: 14px;

`