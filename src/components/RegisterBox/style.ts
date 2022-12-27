import styled from "styled-components";

export const StyledRegisterBox = styled.div`
    width: 500px;
    height: 577px;
    border: 2px solid var(--grey-0);
    border-radius: var(--radius-1);

    .register-header {
        width: 90%;
        margin-bottom: 20px;
    }

    .register-header > h1 {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--grey-6);
    }

    .register-header > a {
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-6);
        color: var(--grey-3);
    }
`