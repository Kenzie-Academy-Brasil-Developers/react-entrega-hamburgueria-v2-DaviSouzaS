import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    background-color: var(--grey-0);
    display: flex;
    align-items: center;
    margin-bottom: 23px;

    .header-box {
        width: 100%;
    }

    .cart-icon-box {
        margin-left: 23px;
        margin-right: 38px;
        position: relative;
    }

    .quantity-cart {
        position: absolute;
        top: 5px;
        left: 15px;
        width: 20px;
        height: 24px;
        background-color: var(--color-primary);
        font-weight: var(--font-weight-0);
        font-size: var(--font-size-6);
        color: var(--white);
        border-radius: var(--radius-2);
    }
`