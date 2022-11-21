import React from 'react';
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import styled from 'styled-components';
import { Mobile } from "../responsive";


    const Container = styled.div`
    height: 60px;
    /* width: 100%;
    position: fixed;
    z-index: 1000;
    background-color: #fff; */
    color: #555;
    ${Mobile({height: "50px" })}
    `;

    const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${Mobile({ padding: "10px 0px" })}
    `;

    const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    `;

    const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${Mobile({ display: "none" })}
    `;

    const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
    `;

    const Input = styled.input`
    border: none;
    &:focus{
        outline: none;
    }
    ${Mobile({ width: "50px" })}
    `;

    const Center = styled.div`
    flex: 1;
    text-align: center;
    `;

    const Logo = styled.h1`
    font-weight: bold;
    color: #000;
    ${Mobile({ fontSize: "24px" })}
    `;
    const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({ flex: 2, justifyContent: "center" })}
    `;

    const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${Mobile({ fontSize: "12px", marginLeft: "10px" })}
    `;

    const Navbar = () => {
    return (
        <Container>
        <Wrapper>
            <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="Search" />
                <FaSearch style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
            </Left>
            <Center>
            <Logo>LAMA.</Logo>
            </Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <FaShoppingCart />
            </MenuItem>
            </Right>
        </Wrapper>
        </Container>
    );
};

export default Navbar;