import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 50px 40px;

   @media (max-width: 767px) {
     
   }

`;

export const Title = styled.div`
   margin-top: 30px;
   font-size: 35px;
   text-transform: uppercase;

   @media (max-width: 767px) {
       font-size: 25px;
   }
`;

export const Amount = styled.div`
   font-size: 45px;
   margin-top: 25px;

   span {
      color: red;
      font-weight: 600;
   }
`;

export const Buttons = styled.div`
   margin-top: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   

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
   background: white;
   border: 1px solid rgb(156, 158, 161);
   text-decoration: none;
   text-align: center;
   padding-top: 5px;

   &:hover {
    color: white;
    background: black;
   }
`;

export const Remove = styled(Add)`  
   margin-right: 0px;

   @media (max-width: 767px) {
       margin-right: 13px;
       
   }
`;

export const Styles = styled.div`
   margin-top: 40px;
   font-size: 35px;
   text-transform: uppercase;

   @media (max-width: 767px) {
       font-size: 25px;
   }
`;

export const ThemeButton = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
`;

export const Light = styled.button`
   height: 45px;
   width: 45px;
   border-radius: 50%;
   margin-right: 20px;
   background: white;
   border: 1px solid rgb(156, 158, 161);
   transition: 1s;

   &:hover {
    transform: scale(0.85);
   }
`;

export const Dark = styled(Light)`
   margin-right: 0px;
   background: black;
`;