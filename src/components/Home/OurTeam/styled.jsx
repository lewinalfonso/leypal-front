import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    gap: 0;
    position: relative;
    align-items: center;
    padding: 4% 8%;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    `
export const Box = styled.div`
    border: 1px solid;
    padding: 3%;
    display: flex;
    width: 100%;
    height: 500px;
    
    `