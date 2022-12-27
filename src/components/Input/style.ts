import styled from "styled-components";

export const StyledInput = styled.div`
    
    .input-box {
        width: 100%;
        height: 48px;
        border: 1px solid var(--grey-6);
        border-radius: var(--radius-2);
        margin-top: 10px;
    }

    .input-box:focus-within {
        outline: 1px solid var(--grey-6);
    }

    .input-box > button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    label {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        color: var(--grey-5);
    }

    input {
        background-color: transparent;
        border: none;
        width: 92%;
        height: 100%;
    }
    
    input:-webkit-autofill, input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }

    input:focus {
        outline: none;
    }
`