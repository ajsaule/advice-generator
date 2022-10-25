import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import ButtonIcon from './svgs/ButtonIcon';
import Divider from './svgs/Divider';

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getAdvice()
  }, [])

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((json) => {
        setData(json.slip);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Wrapper>
      <Card>
        <Heading>ADVICE #{data?.id}</Heading>
        <Body>"{data?.advice}"</Body>
        <DividerWrapper>
          <Divider/>
        </DividerWrapper>
        <Button activeOpacity={0.5} onPress={getAdvice}>
          <ButtonIcon/>
        </Button>
      </Card>
    </Wrapper>
  );
}

export default App;

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
    height: auto;
    width: 343px;
    padding: 24px;
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
    margin-top: 50px;
    text-align: center;
    letter-spacing: 3.45714px;
    color: #53FFAA;
`

const Body = styled.Text`
    // font-family: 'Manrope';
    // font-style: normal;
    font-weight: 800;
    font-size: 24px;
    padding-top: 24px;
    line-height: 33px;
    min-height: 132px;
    text-align-vertical: center;
    width: 295px;
    text-align: center;
    letter-spacing: -0.257143px;
    color: #CEE3E9;
`

const DividerWrapper = styled.View`
    margin-top: 24px;
`

const Button = styled.TouchableOpacity`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 55px;
    background: #53FFAA;
    height: 64px;
    width: 64px;
    border-radius: 50%;
`