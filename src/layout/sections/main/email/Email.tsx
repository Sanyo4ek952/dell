import React from 'react';
import styled from "styled-components";

export const Email = () => {
    return (
        <StyledEmail>
                <p>For any questions please mail me:</p>
                <a href="mailto:anyo4ek952@gmail.com">Sanyo4ek952@gmail.com</a>
        </StyledEmail>
    );
};


const StyledEmail = styled.div`
    margin-bottom: 200px;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    p {
        color: rgb(204, 204, 204);
    }

    a {
        color: rgb(231, 15, 170);
        &:hover{
            text-decoration: underline;
        }
        
    }
    @media (max-width: 820px) {
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        margin: 80px 0;
    }
    @media (max-width: 420px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 50px;
        margin: 80px 0;
    }
`