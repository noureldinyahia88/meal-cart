import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "..//components/Footer"
import { GoDash,GoPlus } from "react-icons/go";
import { Mobile } from "../responsive"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${Mobile({ padding:"10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=> props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${Mobile({ display:"none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${Mobile({ flexDirection:"column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${Mobile({ flexDirection:"column" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    
`
const ProductID = styled.span`
    
`
const Productcolor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`
const Productsize = styled.span`
    
`
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${Mobile({ margin: "5px 15px" })}
`
const ProductAmountcontainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${Mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1 ;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 40vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryitemText = styled.span``
const SummaryitemPrice = styled.span``
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
    return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                            <Details>
                                <ProductName><b>Product:</b> T-Shirt</ProductName>
                                <ProductID><b>ID:</b> 5648989568256</ProductID>
                                <Productcolor color="gray" />
                                <Productsize><b>size:</b> 38</Productsize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountcontainer>
                            <GoPlus/>
                            <ProductAmount>2</ProductAmount>
                            <GoDash/>
                            </ProductAmountcontainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
        <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductID><b>ID:</b> 746532359747</ProductID>
                                <Productcolor color="black" />
                                <Productsize><b>size:</b> M</Productsize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountcontainer>
                            <GoPlus/>
                            <ProductAmount>1</ProductAmount>
                            <GoDash/>
                            </ProductAmountcontainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                    <SummaryitemText>Subtotal</SummaryitemText>
                    <SummaryitemPrice>$ 80</SummaryitemPrice>
                    </SummaryItem>

                    <SummaryItem>
                    <SummaryitemText>Estimated Shipping</SummaryitemText>
                    <SummaryitemPrice>$ 5.90</SummaryitemPrice>
                    </SummaryItem>

                    <SummaryItem>
                    <SummaryitemText>Shipping Discount</SummaryitemText>
                    <SummaryitemPrice>$ -5.90</SummaryitemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                    <SummaryitemText>Total</SummaryitemText>
                    <SummaryitemPrice>$ 80</SummaryitemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
)
}

export default Cart