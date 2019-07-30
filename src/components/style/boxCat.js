import styled from 'styled-components';

const BoxCat = styled.div`
    max-width: 900px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    position: relative;
    .card{
        background: transparent;
        border: 2px solid #FFE81F;
        color: #fff;   
        width: 120px;
        height: 120px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        img{
            max-width: 40px;
            margin: 0 auto 15px;
        }
        p{
            font-family: 'Teko',sans-serif;
            font-size: 4rem;
            margin: 0;
            line-height: 0.5;
        }
    }
`;

export default BoxCat;