import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
    --color-primary: #27AE60;
    --color-secondary: #EB5757;
    --green-1: #219653;
    --grey-6: #333333;
    --grey-5: #999999;
    --grey-4: #BDBDBD;
    --grey-3: #828282;
    --grey-1: #E0E0E0;
    --grey-0: #F5F5F5;
    --white: #FFFFFF;
    --color-negative: #E60000;
    --color-waring: #FFCD07;
    --color-success: #168821;
    --color-information: #155BCB;

    --font-size-1: 26px;
    --font-size-2: 22px;
    --font-size-3: 18px;
    --font-size-4: 16px;
    --font-size-6: 14px;
    --font-size-7: 12px;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;

    --radius-1: 5px;
    --radius-2: 8px;


    --principal-font: 'Inter', sans-serif;;
}

*{
    font-family: var(--principal-font);
    margin: 0;
    padding: 0;
}

.container {
    margin: 0 auto;
    max-width: 1100px;
}
`