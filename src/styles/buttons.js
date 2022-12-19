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
`