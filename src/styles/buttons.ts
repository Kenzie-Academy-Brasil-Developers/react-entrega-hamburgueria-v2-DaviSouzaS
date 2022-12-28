import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`

    .form-box > button {
        cursor: pointer;
        width: 100%;
        height: 48px;
        border-radius: var(--radius-2);
        border: none;
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
    }

    .login-form > button {
        background-color: var(--color-primary);
        color: var(--white);
        margin-top: 10px;
    }

    .login-form > button:hover {
        transition-duration: 0.3s;
        background-color: var(--green-1);
    }

    .register-form > button {
        background-color: var(--grey-0);
        color: var(--grey-5);
        margin-top: 10px;
    }

    .register-form > button:hover {
        transition-duration: 0.3s;
        background-color: var(--grey-1);
    }

    .button-register {
        background-color: var(--grey-0);
        color: var(--grey-5);
        text-decoration: none;
        cursor: pointer;
        width: 90%;
        height: 48px;
        border-radius: var(--radius-2);
        border: none;
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
    }

    .button-register:hover {
        transition-duration: 0.3s;
        background-color: var(--grey-1);
    }

    .visibility-btn {
        height: 16px;
        width: 16px;
        opacity: 50%;
    }

    .login-form .loading-icon {
        animation: loadingIcon 2s;
    }

    @keyframes loadingIcon {
    to {
       transform: rotate(2turn);
    }
    }

    .cart-btn {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    .logout-btn {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    .fake-search-button {
        cursor: pointer;
        width: 53px;
        height: 40px;
        margin-right: 10px;
        background-color: var(--color-primary);
        border: none;
        border-radius: var(--radius-2);
    }

    .fake-search-button:hover {
        transition-duration: 0.3s;
        background-color: var(--green-1);
    }

    .clean-cart-btn {
        cursor: pointer;
        width: 100%;
        height: 60px;
        border: none;
        border-radius: var(--radius-2);
        background-color: var(--grey-1);
        color: var(--grey-3);
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
    }

    .clean-cart-btn:hover {
        transition-duration: 0.3s;
        background-color: var(--grey-4);
        color: var(--grey-0);
    }

    .search-btn {
        border: none;
        background-color: transparent;
    }
`