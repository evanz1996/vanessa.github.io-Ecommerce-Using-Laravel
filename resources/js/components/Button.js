import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize,
font-size: 1.4rem,
background: yellow;    
border: 0.5 prem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${prop => (prop.cart ? "green" : "orange")};
    color: white;
}
&:focus{
    outline:yellow;

}
`;
