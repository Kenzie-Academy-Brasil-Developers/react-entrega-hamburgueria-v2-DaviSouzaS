import styled from "styled-components";

export const StyledInputSearch = styled.form`
    width: 365px;
    height: 60px;
    background-color: var(--white);
    border: 2px solid var(--grey-1);
    border-radius: var(--radius-2);

    input {
        background-color: transparent;
        border: none;
        margin-left: 15px;
        width: 203px;
        height: 19px;
    }
    
    input::placeholder {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-4);
        color: var(--grey-1);
    }

    input:focus {
        outline: none;
    }
`