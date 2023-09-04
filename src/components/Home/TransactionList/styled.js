import styled, {css} from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const Title = styled.div`
    font-size: 35px;
    text-transform: uppercase;
`;

export const Transactions = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    grid-gap: 20px;
    margin-top: 30px;

    @media (max-width: 767px) {
        grid-template-columns: 300px;
    }
`;

export const Income = styled.div`
   border: 1px solid ${({theme}) => theme.borderColor};
   min-height: 80px;
   font-size: 30px;
   padding-top: 30px;
   color: ${({theme}) => theme.incomeTitleColor};
   font-weight: 700;
   display: flex;
   flex-direction: column;
   background: ${({theme}) => theme.backgroundTransColor};
   box-shadow: ${({theme}) => theme.boxshadowColor};
`;

export const Content = styled.span`
   color: ${({theme}) => theme.contentColor};
`;

export const Subtitle = styled.div`
   align-self: center;
`;

export const Expense = styled(Income)`
   color: ${({theme}) => theme.expenseTitleColor};
`;

export const List = styled.div`
   margin-top: 40px;
   display: flex;
   flex-direction: column;
   list-style-type: none;
   font-size: 20px;
   margin-right: 15px;
   margin-left: 15px;
   
   li {
      padding-bottom: 10px;
   }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
  padding-bottom: 5px;
  color: black;
`;


export const Amount = styled.div`
    color: ${({theme}) => theme.expenseTitleColor};

    ${({income}) => income && css`
    color: ${({theme}) => theme.incomeTitleColor};
    `}
`;

export const Select = styled.div`
`;

export const Con = styled.div`
   display: flex;
   gap: 5px;
`;

export const RemoveButton = styled.button`
   height: 20px;
   width: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   background-color: ${({theme}) => theme.removeTransactionColor};
   font-weight: 700;
   font-size: 16px;
`;

export const Total = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 5px;
   margin-right: 25px;
   `;