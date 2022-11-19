import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``;
const Tittle = styled.h1`
    margin: 20px;
`;
const FillterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px 5px;
    margin-right: 20px;
    font-size: 18px;
    color: #60666d;
    border-radius: 10px;
    &:focus{
        outline: none;
    }
`;
const Option = styled.option``


const ProductList = () => {
    return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Tittle>Dresses</Tittle>
        <FillterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
            <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
            <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter><FilterText>sort products</FilterText>
            <Select>
            <Option selected>Newset</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
            </Filter>
        </FillterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
)
}

export default ProductList