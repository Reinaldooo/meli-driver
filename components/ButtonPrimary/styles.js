import styled from "styled-components/native";

// Colors used: red
export const Container = styled.TouchableHighlight`
  background-color: #E6363D;
  border-radius: 10px;
  padding: 10px 20px;
  opacity: ${props => props.disabled ? .4 : 1}
`

export const Title = styled.Text`
  color: white;
`