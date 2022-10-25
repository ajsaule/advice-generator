import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'

export default function App() {
  return (
    <Wrapper>
      <Card>
        <Heading>ADVICE #117</Heading>
        <Body></Body>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #202733;
`

const Card = styled.View`
    justify-content: center;
    align-items: center;
    height: 315px;
    width: 343px;
    border-radius: 10px;
    margin-bottom: 100px;
    border-radius: 10px;
    background: #313A48;
    box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
`

const Heading = styled.Text`
    // font-family: 'Manrope';
    // font-style: normal;
    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3.45714px;
    color: #53FFAA;
`

const Body = styled.Text`
    // font-family: 'Manrope';
    // font-style: normal;
    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3.45714px;
    color: #53FFAA;
`
