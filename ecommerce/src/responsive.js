import { css } from "styled-components";

export const Mobile = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
        ${props}
        }
    `;
};

export const Tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
        ${props}
        }
    `;
};

export const Laptop = (props) => {
    return css`
        @media only screen and (max-width: 1023px) {
        ${props}
        }
    `;
};