import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {adaptiveFont} from "../../styles/GlobalSyles";
import {them} from "../../styles/Them";

const Header = styled.header`
    background-color: ${them.color.mainBG};
    width: 100%;
    padding: ${adaptiveFont(30,15)} 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    ${FlexWrapper}{
        gap: 20px;
    }

`
const HeaderMenu=styled.div`
    flex: 0 1 728px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`
export const S={
    Header,
    HeaderMenu
}