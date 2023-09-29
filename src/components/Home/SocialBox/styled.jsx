import styled from 'styled-components';
import { BGColor } from '../../../assets/colors';
import Team from '../../../assets/img/Home/bgOurTeam.jpg'

export const Container = styled.div`
    width: 100%;
    gap: 0;
    position: relative;
    align-items: center;
    padding: 4% 8%;
    background-image: url(${ Team });
    background-color: ${ BGColor };
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
export const ContentIcon = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: space-around;

`