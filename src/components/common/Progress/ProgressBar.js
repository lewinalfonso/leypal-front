import React from 'react'
import styled from 'styled-components';

function ProgressBar({ title, width, text }) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{ width }}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
        margin-top: 30px;

    .progress-bar{
        display: flex;
        align-items: center;
        flex-direction: column;
        p{
            padding-right: 1.3rem;
            font-family: PFont-Regular;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: #ccc;
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                font-family: PFont-Light;
                height: 100%;
                background-color: #4890c7;
            }
        }
    }
`;

export default ProgressBar;