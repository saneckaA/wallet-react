import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-image: ${({theme}) => theme.newTransactionBcg};
    height: 81vh;
`;

export const Title = styled.div`
   margin-top: 40px;
   font-size: 25px;
   font-weight: 700;
   text-transform: uppercase;
   display: flex;
   justify-content: center;
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: black;
`;

export const Form = styled.form`
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   text-align: center;

`;

export const Header = styled.label`
   margin-top: 20px;
   display: block;
   margin-bottom: 20px;
   font-size: 20px;

   span {
       font-size: 15px;
   }

   @media (max-width: 767px) {
       margin-bottom: 5px;
   }
`;

export const Input = styled.input`
   display: block;
   width: 500px;
   margin-right: auto;
   margin-left: auto;
   margin-top: 20px;
   height: 25px;
   text-align: center;
   font: italic;

   @media (max-width: 767px) {
       width: 300px;
       height: 25px;
       margin-top: 10px;
   }
`;

export const Select = styled.select`
  display: block;
  color: grey;
  width: 500px;
  height: 25px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  font: inherit;
  text-align: center;

  @media (max-width: 767px) {
       width: 300px;
       margin-top: 10px;
   }
`;

export const Buttons = styled.div`
   display: flex;
   flex-direction: row;
   gap: 20px;
   justify-content: center;
   padding-bottom: 25px;

   @media (max-width: 767px) {
       margin-top: 15px;
   }
`;

export const Save = styled.button`
   padding: 10px;
   width: 90px;
   border-radius: 4px;
   border: 1px solid ${({theme}) => theme.newTransBorderColor};
   transition: 1s;
   cursor: pointer;
   &:hover {
    transform: scale(1.2);
   }
`;

export const Cancel = styled(Save)`

`;

