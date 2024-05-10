import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {them} from "../../styles/Them";

//Footer

const Footer = styled.footer`

`
//Footer-Top

const FooterTop = styled.div`
    min-height: 100px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(66, 68, 110);

    ${FlexWrapper} {
        gap: 20px;
        flex: 0 1 760px;
        @media (max-width: 480px) {
            justify-content: flex-end;
        }
    }

`

const Contacts = styled.div`
    display: flex;
    flex: 1 1 auto;
    gap: 10px;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    a:hover {
        text-decoration: underline;
    }
`

//Footer-Bottom

const FooterBottom = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    min-height: 100px;
    position: relative;
    background-color: ${them.color.mainBG};
`

const Copyright = styled.p`
    text-align: right;

`

export const S = {
    Footer,
    FooterTop,
    Contacts,
    FooterBottom,
    Copyright,
}