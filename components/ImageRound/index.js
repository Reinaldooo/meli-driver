import styled from "styled-components/native";

export const ImageRound = styled.Image`
margin-top: 5%;
width: ${props => props.wt ? `${props.wt}px` : "150px"};
height: ${props => props.ht ? `${props.ht}px` : "150px"};
border-radius: 75px;
`;

export default ImageRound;