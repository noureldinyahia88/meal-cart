import styled from "styled-components"
import { MdFacebook } from "react-icons/md";
import { FaInstagram,FaTwitter,FaPinterestSquare,FaMapMarkerAlt, FaPhoneAlt,FaMailBulk } from "react-icons/fa";
import { Mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${Mobile({ flexDirection: "column" })}
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
    cursor: pointer;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${Mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
` 
const Listitem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${Mobile({ backgroundColor: "#eee" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
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
                    <FaPinterestSquare />
                </Soialicon>
            </Soialcontainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
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
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FaMapMarkerAlt style={{marginRight:"10px"}}/>
                622 Dixie Path , South tobinchester 98336
            </ContactItem>
            <ContactItem>
                <FaPhoneAlt style={{marginRight:"10px"}}/>
                +201200417308
            </ContactItem>
            <ContactItem>
                <FaMailBulk style={{marginRight:"10px"}}/>
                noureldinyahia@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
)
}

export default Footer