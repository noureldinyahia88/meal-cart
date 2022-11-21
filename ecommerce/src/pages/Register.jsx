import { Mobile } from "../responsive"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Warpper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #fff;
    ${Mobile({ width:"75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    &:focus{
        outline: none;
        border: 2px solid teal;
    }
`
const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
    font-weight: 500;
`
const Button = styled.button`
    font-weight: bolder;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 0 auto;
`


const Register = () => {
    return (
    <Container>
        <Warpper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod exercitationem impedit <b>provident eum odio </b>.</Agreement>
                <Button>CREATE</Button>
            </Form>
        </Warpper>
    </Container>
)
}

export default Register