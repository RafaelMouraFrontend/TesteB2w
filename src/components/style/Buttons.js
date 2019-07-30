import styled from 'styled-components';

const Buttons= styled.div`
   display: flex;
   justify-content: space-between;
   align-content: space-between;
   button{
      font-family: 'Teko',sans-serif;
      font-size: 3.4rem;
      border: 2px solid #FFE81F;
      background: transparent;
      color: #fff;
      cursor: pointer;
      flex-basis: 49%;
      margin-top: 10px;
      padding: 05px 30px;
      box-sizing:border-box;   
   }
   .link{
      flex-basis: 49%;
      color: #fff;
   }
   .btn {
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%;   
      &:hover { text-decoration: none; }  
      }
      .btn-4 {
      border: 1px solid;
      overflow: hidden;
      position: relative;
         span {
            z-index: 20;
         }  
         &:after {
            background: #fff;
            content: "";
            height: 155px;
            left: -75px;
            opacity: .2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            width: 50px;
            z-index: -10;
         }
      }
      .btn-4:hover {         
         &:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
         }
      }   
`

export default Buttons



