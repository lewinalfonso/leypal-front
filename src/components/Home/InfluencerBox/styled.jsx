import styled from 'styled-components';
import { BGColor, BGVColor } from '../../../assets/colors';

export const Container = styled.div`
    width: 100%;
    gap: 0;
    position: relative;
    align-items: center;
    padding: 4% 8%;
    background-color: ${ BGColor };
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;

}
`
export const Box = styled.div`
    border: 6px solid #f6a801;
    padding: 3%;
    display: flex;
    width: 100%;
    
`
export const Subtitle = styled.h2`
    text-align: left;
    font-weight: 600;
    font-size: 35px;
    letter-spacing: 4px;
    color: ${ BGVColor };
    margin-top: 0;
`
export const Paragraph = styled.p`
    font-family: PFont-Light;
    font-size: 20px;
    color: ${ BGVColor };
    letter-spacing: 1px;
    font-weight: 400;
`