import styled from "styled-components";

export const StyledProduct = styled.li`
    width: 260px;
    min-width: 260px;
    height: 326px;
    background-color: var(--white);
    border: 2px solid var(--grey-1);
    border-radius: var(--radius-1);

    button {
        cursor: pointer;
        width: 106px;
        height: 40px;
        background-color: var(--grey-4);
        color: var(--white);
        border: none;
        border-radius: var(--radius-2);
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-6);
    }

    :hover {
        transition-duration: 0.5s;
        border: 2px solid var(--color-primary);

        button {
            background-color: var(--color-primary);
        }
    }

    button:hover {
        transition-duration: 0.5s;
        background-color: var(--green-1);
    }
    
    .img-product-box {
        background-color: var(--grey-0);
        width: 100%;
        height: 150px;
    }

    p {
        margin-bottom: 14px;
    }

    .product-infos-box {
        padding: 0 19px 0 21px;
    }

    img {
        width: 162px;
        height: 162px;
    }

    .product-name {
        margin-top: 26px;
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
    }

    .product-category {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-7);
        color: var(--grey-3);
    }

    .product-price {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-6);
        color: var(--color-primary);
    }

`