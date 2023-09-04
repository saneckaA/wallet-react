import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: 800px 400px;
   margin-top: 30px;
   justify-content: center;
`;

export const Item = styled.div`
`;

export const ItemMain = styled.div`
   border: 1px solid ${({theme}) => theme.borderColor};
   height: 400px;
   width: 400px;
   box-shadow: ${({theme}) => theme.boxshadowColor};
   background-color: ${({theme}) => theme.mainPanelBcg};
`;