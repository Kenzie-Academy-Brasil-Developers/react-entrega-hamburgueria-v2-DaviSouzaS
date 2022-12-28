import { createGlobalStyle } from "styled-components";

export const Displays = createGlobalStyle`

.display-flex {
    display: flex;
}

.flex-direction-column {
    flex-direction: column;
}

.justify-content-center {
    justify-content: center;
}

.align-item {
    align-items: center;
}

.justify-content-between {
    justify-content: space-between;
}

.justify-content-around {
    justify-content: space-around;
}

.flex-warp {
    flex-wrap: wrap;
}

.gap-16 {
    gap: 16px;
}

.gap-20 {
    gap: 20px;
}

.gap-25 {
    gap: 25px;
}

.gap-30 {
    gap: 30px;
}

.gap-50 {
    gap: 50px;
}

.gap-60 {
    gap: 60px;
}

@media (min-width: 900px) {
    .display-none {
        display: none;
    }
}

@media(max-width: 900px) {
    
    .column-mobile {
        flex-direction: column;
    }

    .column-reverse-mobile {
        flex-direction: column-reverse;
    }

    .display-none-mobile {
        display: none;
    }

    .banner-mobile {
        margin-top: 40px;
        max-width: 377px;
        width: 95%;
    }

    .login-box-mobile {
        max-width: 500px;
        width: 95%;
        height: 450px;
        margin-bottom: 20px;
    }

    .form-box-mobile {
        width: 95%;
    }

    .p-mobile {
        width: 95%;
    }

    .page-mobile {
        height: 100%;
    }

    .gap-14-moblie {
        gap: 14px;
    }

    .gap-20-mobile {
        gap: 20px;
    }

    .bag-icon-mobilde {
        margin-left: 10px;
    }

    .register-box-moblie {
        max-width: 500px;
        width: 95%;
        height: 500px;
        margin-bottom: 20px;
    }

    .product-list-mobile {
        overflow-x: scroll;
        width: 95%;
        margin-right: 0;
    }

    .product-mobile {
        margin-right: 10px;
    }

    .flex-no-warp {
        flex-wrap: nowrap;
    }

    .header-box-mobile {
        padding: 0 10px;
    }

    .quantity-cart-mobile {
        top: -10px;
    }

    .search-input-mobile-box {
        width: 100%;
    }

    .search-input-mobile {
        width: 95%;
    }
}

`