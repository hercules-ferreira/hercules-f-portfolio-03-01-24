import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}


:root{
--white: #fff;
--black: #000;
--dark-900: #101026;
--dark-700: #1D1D2e;

--header: #DFF4FF;
--gray-100: #8A8A8A;
--gray-500: #0c0a0a8b;
--gray-000: #dedede;

--green-900: #3fffa3;
--red-900: #FF3F4B;
--red-500: #ef747c;

--gray-body: #F2F2F2;

--sub-title-table: #F9F9F9;

--button-1: #E6E6E6;
--button-2: #F2F2F2;
--button-3: #E0E0E0;
--button-4: #EEEEEE;


--gray100: #E1E1E6;
--gray200: #A9A9B2;
--gray400: #7C7C8A;
--gray500: #505059;
--gray600: #323238;
--gray700: #29292E;
--gray800: #202024;
--gray900: #121214;

--ignite300: #00B37E;
--ignite500: #00875F;
--ignite700: #015F43;
--ignite900: #00291D;

}

body{
    place-items: center;
    max-width: 1200px;
        margin: 0 auto;
    background-color: var(--gray-body);
    color: var(--gray900);
    -webkit-font-smoothing: antialiased;
}

body input-security, textarea, button{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    outline: none;
}

a, li{
    text-decoration: none;
    list-style-type: none;
    color: inherit; 

}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);}

`;
