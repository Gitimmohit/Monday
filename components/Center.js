import styled from "styled-components"

const StyledDiv = styled.div`
max-width:90%;
height:auto;
margin: 0 auto;
display:flex;
flex-direction:column;
padding: 0 20px;
// border:1px solid black;
// background:#fff;
`;

export default function Center({children}){
    return(
        <StyledDiv>{children}</StyledDiv>
    )
}