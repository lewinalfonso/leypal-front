import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BColor, BGColor } from '../../assets/colors'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999999;
    height: 100vh;
    width: 100%;
    background-color: ${ BGColor };
    height: 100vh;
    max-width: 100vw !important;
    display: flex;
    padding: 70px;
    margin: auto;
    flex-direction: row;
`

export const Logo = styled(Link)`
    position: absolute;
    left: 75px;
    top: 25px;
`
export const FirstSection = styled.div`
    width: 70%;
`
export const Text = styled.p`
    color: ${ BColor };
    background-color: ${ BGColor };
    font-size: 1.625rem;
    line-height: 35px;
    margin: 30px 0px;

`
export const Form = styled.form`
    margin: 30px 0px;
    padding: 30px;
    width: 30%;
    height: min-content;
    border: .8px solid #44444432
`