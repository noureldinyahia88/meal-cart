import { MdSend } from "react-icons/md";
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #168AAD;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
`

const Newsletter = () => {
    return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get Timely updates from favorite Products</Description>
        <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
            <MdSend/>
        </Button>
        </InputContainer>
    </Container>
)
}

export default Newsletter