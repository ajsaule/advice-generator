import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import ButtonIcon from './svgs/ButtonIcon';
import Divider from './svgs/Divider';

const App = () => {

  
  return (
    <Wrapper>
      <Card>
        <Heading>ADVICE #117</Heading>
        <Body>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</Body>
        <DividerWrapper>
          <Divider/>
        </DividerWrapper>
        <Button activeOpacity={0.5}>
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
    height: 315px;
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
    text-align: center;
    letter-spacing: -0.257143px;
    color: #CEE3E9;
`

const DividerWrapper = styled.View`
    margin-top: 24px;
`

const Button = styled.TouchableOpacity`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 25px;
    background: #53FFAA;
    height: 64px;
    width: 64px;
    border-radius: 50%;
`