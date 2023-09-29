import styled, { css } from 'styled-components'
import { BGColor, PLColor, PLVColor, SFAColor } from '../../assets/colors'

// Ventana con sombra (tarjetas)
export const ShadowCardContainer = styled.div`
    flex: 0 0 33.33333%;
    box-shadow: ${ props => props.movilmode ? 'none' : '0px 0px 6px #00000060' };
    background-color: ${ BGColor };
    width: ${ ({ width }) => width ? width : '96%' };
    margin: ${ ({ margin }) => margin ? margin : ' 2% auto' };
    border-radius: 8px;
    padding: 2px 10px;
    position: relative;
    overflow: hidden;
    max-width: 1200px;
    @media(min-width: 768px){
        width: 100%;
        padding: 15px 10px;
    ${ ({ maxWidth }) => maxWidth && css`max-width: ${ maxWidth };` }

        /* border-radius: 0; */
    }
`
export const HeadCard = styled.h5`
    margin: 4px 0 15px 0;
    text-transform: uppercase;
`
export const ItemText = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${ props => props.color || SFAColor };
    padding: 0 8px;
    font-family: PFont-Regular;
    font-size: 12px;
    text-transform: lowercase;
    padding: 5px 0;
    border-top: 1px solid ${ PLVColor };
    margin-top: 5px;
    cursor: pointer;
    
    @media(min-width: 768px) {
        font-size: 14px;
        border-top: 1px solid ${ PLColor };
        padding-top: 10px;
        margin-top: 15px;
    }
`