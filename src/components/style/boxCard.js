import styled from 'styled-components';

const BoxCard= styled.div`
    max-width: 400px;
    height: 70%;
    margin: 0 auto;
    background: transparent;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .loading{
        max-width:400px;
    }
    .card{
        width: 100%;
        border: 2px solid #FFE81F;
        color: #fff; 
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
            padding: 0;
        }
        li{
            font-family: 'Roboto', sans-serif;
            list-style: none;
            text-align: center;
            span{
                font-weight: 700;
            }
           
        }
        
    }
   
`;

export default BoxCard;