import { GoDash,GoPlus } from "react-icons/go";
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgConatainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FillterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    &:focus{
        outline: none;
    }

`
const FilterSizeOption = styled.option``
const Addcontainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AoumntContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f8;
    }
`



const Product = () => {
    return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgConatainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgConatainer>
            <InfoContainer>
                <Title>Lorem, ipsum dolor.</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias hic dolore, amet explicabo commodi nostrum doloremque blanditiis aliquam dolorum sed rerum consectetur exercitationem. Officia ullam dolor cupiditate nemo temporibus odio aliquid illum consequatur, quod eius a aliquam facilis, vero magnam explicabo repellat rem velit deserunt neque quaerat enim expedita.</Desc>
                <Price>$ 20</Price>
                <FillterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FillterContainer>
                <Addcontainer>
                    <AoumntContainer>
                        <GoDash/>
                        <Amount>1</Amount>
                        <GoPlus/>
                    </AoumntContainer>
                    <Button>ADD TO CART</Button>
                </Addcontainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
)
}

export default Product