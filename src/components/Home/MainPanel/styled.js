import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 50px 40px;
   margin-top: -40px;
   

   @media (max-width: 767px) {
     
   }
`;

export const Extra = styled.div`
   display: flex;
`;

export const Hour = styled.div`
   margin-top: 18px;
   font-size: 20px;
   font-weight: 600;
   color: ${({theme}) => theme.clockColor};
`;

export const Switcher = styled.div`

margin-left: 160px;

label {
   width: 70px;
   height: 35px;
   position: relative;
   display: block;
   background: #ebebeb;
   border-radius: 30px;
   border: 1px solid white;
   box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
   cursor: pointer;
   transition: 0.3s;
}

label:after {
   content: "";
   width: 25px;
   height: 25px;
   border-radius: 50%;
   position: absolute;
   top: 4px;
   left: 4px;
   background: linear-gradient(180deg, #ffcc89, #d8860b);
   box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
   transition: 0.3s;
}

input {
   width: 0;
   height: 0;
   visibility: hidden;
}

input:checked + label {
   background: #242424;
}

input:checked + label:after {
   left: 64px;
   transform: translateX(-100%);
   background: linear-gradient(180deg, #777, #3a3a3a);
}

label svg {
   position: absolute;
   width: 30px;
   z-index: 100;
}

label svg.sun {
   left: 5.5px;
   fill: #fff;
   transition: 0.3s;
}

label svg.moon {
   left: 40px;
   top: 2px;
   width: 25px;
   fill: #7e7e7e;
   transition: 0.3s;
}

input:checked + label svg.sun {
   fill: #7e7e7e;
}

input:checked + label svg.moon {
   fill: #fff ;
}
`;

export const Title = styled.div`
   margin-top: 30px;
   font-size: 33px;
   text-transform: uppercase;

   @media (max-width: 767px) {
       font-size: 25px;
   }
`;

export const Amount = styled.div`
   font-size: 45px;
   margin-top: 25px;

   span {
      color: ${({theme}) => theme.amountColor};
      font-weight: 600;
   }
`;

export const Buttons = styled.div`
   margin-top: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: ${({theme}) => theme.boxshadowColor};
   
   @media (max-width: 767px) {
       gap: 10px;
       flex-direction: column;
   }
`;

export const Add = styled.button`
   height: 35px;
   width: 150px;
   margin-right: 15px;
   border-radius: 4px;
   background: ${({theme}) => theme.buttonsColor};
   border: 1px solid ${({theme}) => theme.borderButtonColor};
   text-decoration: none;
   text-align: center;
   padding-top: 5px;
   cursor: pointer;
   transition: 1s;
 
   &:hover {
    color: ${({theme}) => theme.hoverButtonTextColor};
    background: ${({theme}) => theme.hoverButtonBcgColor};
    transform: scale(1.1);
   }
`;

export const Remove = styled(Add)`  
   margin-right: 0px;

   @media (max-width: 767px) {
       margin-right: 13px;
       
   }
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: black;

   &:hover {
      color: ${({theme}) => theme.hoverButtonTextColor};
   }
`;
