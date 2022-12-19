import styled from "styled-components";

export const StyledBanner = styled.div`
    width: 377px;
    
    .slogan-box {
        width: 95%;
        height: 95px;
        border: 1px solid var(--grey-1);
        border-radius: var(--radius-1);
        margin-top: 22px;
        margin-bottom: 30px;
        box-shadow: 0px 4px 40px -20px #00000040;
    }

    .slogan-box > div{
        width: 60px;
        height: 60px;
        background-color: #27AE601A;
        border-radius: var(--radius-1);
    }

    .slogan-box > p {
        width: 230px;
        height: 66px;
        line-height: 22px;
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-4);
        color: var(--grey-3);
    }

    .slogan-box > p > span { 
        font-weight: var(--font-weight-2);
    }
`