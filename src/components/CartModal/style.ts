import styled from "styled-components";

export const StyledModal = styled.div`

    background-color: #000000b3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;

    .modal-cart {
    background-color: var(--grey-0);
    width: 95%;
    max-width: 500px;
    min-width: 300px;
    height: 362px;
    border-radius: var(--radius-1);
    margin-top: 80px;
    }   

    .header-modal {
        width: 100%;
        height: 54px;
        border-radius: var(--radius-1) var(--radius-1) 0 0;
        background-color: var(--color-primary);
        margin-bottom: 20px;
    }

    .header-modal > p {
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-1);
        color: var(--white);
        margin-left: 22px;
    }

    .header-modal > button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-5);
        color: var(--white);
        margin-right: 22px;
    }

    .waring-modal {
        height: 246px;
    }

    .waring-cart-1 {
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-1);
        color: var(--grey-6);
        margin-bottom: 20px;
    }

    .waring-cart-2 {
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-4);
        color: var(--grey-3);
    }

    .products-list {
        width: 100%;
        overflow-y: scroll;
        max-height: 150px;   
    }

    .products-list::-webkit-scrollbar {
        width: 9px;               
    }
  
    .products-list::-webkit-scrollbar-track {
        background: transparent;        
    }
  
    .products-list::-webkit-scrollbar-thumb {
        border-radius: var(--radius-1);
        background-color:var(--grey-3);   
    }

    .total-value-box {
        margin-top: 10px;
        border-top: 2px solid var(--grey-1);
        width: 90%;
    }

    .cart-infos {
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .cart-infos > p {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-6);
        color: var(--grey-6);
    }

    .cart-infos > .total-value {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-6);
        color: var(--grey-3);
    }
`