import { createGlobalStyle } from "styled-component";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        transform: background 0.3s;
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        padding-bottom: 100px;
        background: ${({ theme }) => theme.colors.site.background};
        color: ${({ theme }) => theme.colors.site.text};

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 30px;
        }
    }
`;
