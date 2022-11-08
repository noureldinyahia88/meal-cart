import styled from "styled-components"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import {sliderItems} from '../data'
import { useState } from "react";

const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transform: translateX(${(props)=>props.slidIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide= styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg}
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
const Slider = () => {
    const [slidIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slidIndex > 0 ? slidIndex - 1 : 2);
        } else {
            setSlideIndex(slidIndex < 2 ? slidIndex + 1 : 0)
        }
    }
    setTimeout(handleClick,6000)
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <FaArrowLeft/>
            </Arrow>
            <Wrapper slidIndex={slidIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <FaArrowRight/>
            </Arrow>
        </Container>
)
}

export default Slider