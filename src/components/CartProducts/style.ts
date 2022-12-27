import styled from "styled-components";

export const StyledcartProdcutCard = styled.div`
    width: 90%;
    margin-bottom: 10px;

    .img-box {
        width: 82px;
        height: 80px;
        background-color: var(--grey-1);
        border-radius: var(--radius-1);
    }

    .img-box > img {
        width: 55px;
        height: 53px;
    }

    .product-infos {
        width: 80%;
    }

    .product-infos > p {
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-1);
        color: var(--grey-6);
        margin-left: 10px;
    }

    .product-infos > button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        width: 22px;
        height: 22px;
    }
`
