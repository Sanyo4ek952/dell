import React from 'react';
import myPhotoPng from "../../../../../assets/image/foto.png";
import myPhotoWebp from "../../../../../assets/image/foto.webp";
import styled from "styled-components";

type MyPhotoTypeProps = {
    width: number
    height: number
}

const MyPhoto = (props: MyPhotoTypeProps) => {
    return (
        <StylesMyPhoto width={props.width}
                       height={props.height}>
            <div>
                <picture>
                    <source srcSet={myPhotoWebp} type="image/webp"/>
                    <source srcSet={myPhotoPng} type="image/jpeg"/>
                    <img src={myPhotoPng} alt="Мое Фото"/>
                </picture>
            </div>


        </StylesMyPhoto>
    );
};

export default MyPhoto;

type StylesMyPhotoTypeProps = {
    width: number
    height: number


}

const StylesMyPhoto = styled.div<StylesMyPhotoTypeProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        width: ${props => {
            let sum = props.width + 20 + "px"
            return sum
        }};
        height: ${props => {
            let sum = props.height + 20 + "px"
            return sum
        }};
        border-radius: 50%;
        background: linear-gradient(180deg, rgb(231, 15, 170) 0%, rgb(0, 192, 253) 100%);
        @media (max-width: 820px) {
            width: 270px;
            height: 270px;
        }
    }
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        object-fit: cover;
        border-radius: 50%;
        
        @media (max-width: 820px) {
            width: 250px;
            height: 250px;
        }
    }
`