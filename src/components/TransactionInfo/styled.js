import styled from "styled-components";

export const Container = styled.div`
   width: 500px;
   height: auto;
   border: 1px solid ${({theme}) => theme.borderColor};
   background: ${({theme}) => theme.backgroundTransColor};
   margin-left: auto;
   margin-right: auto;
   margin-top: 30px;
   box-shadow: ${({theme}) => theme.boxshadowColor};
   display: flex;
   flex-direction: column;
`;

export const NotFound = styled.div`
height: 300px;
width: 1000px;
font-size: 30px;
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
margin-top: 120px;
color: black;

svg {
   height: 150px;
   margin-top: 25px;
}

`;

export const Title = styled.div`
   font-size: 30px;
   color: ${({theme}) => theme.transactionTitleColor};
   align-self: center;
   margin-bottom: 15px;
`;

export const Content = styled.div`
   margin-left: 20px;
   margin-right: 20px;
   margin-bottom: 10px;
   font-size: 20px;
   border-bottom: 1px dotted grey;

   span {
      font-weight: 600;
      color: ${({theme}) => theme.transactionInfo};
   }
`;

export const Amount = styled(Content)`

`;

export const Category = styled(Content)`

`;

export const Type = styled(Content)`

`;

export const Date = styled(Content)`

`;

