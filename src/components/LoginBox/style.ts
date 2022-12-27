import styled from "styled-components";

export const StyledLoginBox = styled.div`
    width: 500px;
    height: 521px;
    border: 2px solid var(--grey-0);
    border-radius: var(--radius-1);

    .title-box {
        width: 90%;
    }

    > p {
        width: 327px;
        text-align: center;
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-4);
        color: var(--grey-5);
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h1 {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--grey-6);
        margin-top: 26px;
        margin-bottom: 20px;
    }
`