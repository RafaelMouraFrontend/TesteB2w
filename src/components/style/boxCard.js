import styled from 'styled-components';

const BoxCard= styled.div`
    max-width: 400px;
    margin: 0 auto;
    background: transparent;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    .loading{
        max-width:400px;
    }
    .card{
        width: 100%;
        border: 2px solid #FFE81F;
        color: #fff;
        background: rgba(9, 10, 15, 0.83);
        h1{
            font-family: 'Teko',sans-serif;
            font-size: 4rem;
            background: #FFE81F;
            color: #F60505;
            margin: 0;
            text-align: center;
            line-height: 1.5;
            padding-top: 10px;
            border: 1px solid #FFE81F;
        }  
        ul{
            padding: 15px 0;
        }
        li{
            font-family: 'Roboto', sans-serif;
            list-style: none;
            text-align: center;
            span{
                font-weight: 700;
            }
        }
        p{
            text-align: center;
            font-family: 'Teko',sans-serif;
            font-size: 4rem;
            color: #F60505;
            margin:0;

        }
    }
    .card-complete{
        width: 100%;
        border: 2px solid #FFE81F;
        color: #fff;
        background: rgba(9, 10, 15, 0.83);
        display: flex;
        flex-flow: column;
        text-align: center;
    }   
   
`;

export default BoxCard;