import styled from "styled-components"
import { MdFacebook } from "react-icons/md";
import { FaInstagram,FaTwitter,FaPinterestSquare } from "react-icons/fa";

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0;
`;
const Soialcontainer = styled.div`
    display: flex;
`;
const Soialicon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color:#${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    
`
const List = styled.ul`
    
` 
const Listitem = styled.li`
    
`
const Right = styled.div`
    flex:1;
    padding: 20px;
`
const Footer = () => {
    return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit unde quis esse dignissimos illo rem odio quod nobis aliquid eius, quasi sunt quam accusantium ipsam at mollitia! Excepturi, deserunt.
            </Desc>
            <Soialcontainer>
                <Soialicon color="3B5999">
                    <MdFacebook/>
                </Soialicon>
                <Soialicon color="E4405f">
                    <FaInstagram/>
                </Soialicon>
                <Soialicon color="55ACEE">
                    <FaTwitter/>
                </Soialicon>
                <Soialicon color="E60023">
                    <FaPinterestSquare/>
                </Soialicon>
            </Soialcontainer>
        </Left>
        <Center>
            <Title>
                <List>
                    <Listitem>Home</Listitem>
                    <Listitem>Cart</Listitem>
                    <Listitem>Man fashion</Listitem>
                    <Listitem>Woman Fashion</Listitem>
                    <Listitem>Accessories</Listitem>
                    <Listitem>My Account</Listitem>
                    <Listitem>Order Tracking</Listitem>
                    <Listitem>Wishlist</Listitem>
                    <Listitem>Terms</Listitem>
                </List>
            </Title>
        </Center>
        <Right></Right>
    </Container>
)
}

export default Footer