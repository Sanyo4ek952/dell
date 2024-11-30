import styled from "styled-components";
import {adaptiveFont} from "../../../../styles/GlobalSyles";
import {Container} from "../../../../styles/Container";

const Email = styled.div`
    padding-top: ${adaptiveFont(100, 50)};
    padding-bottom: ${adaptiveFont(100, 50)};
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    p {
        color: rgb(204, 204, 204);
    }

    ${Container} {
        text-align: center;
    }

    @media (max-width: 820px) {
        font-weight: 700;
        font-size: 35px;
        line-height: 50px;
    }
    @media (max-width: 420px) {
        font-weight: 700;
        font-size: 25px;
        line-height: 50px;
    }
`

export const S ={
    Email
}