import React , { FunctionComponent, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'

//custom components 
import { colors ,gradients , positions} from '../components/colors'
import { Container } from '../components/shared'
import BigText from '../components/Text/BigText'
import RegularText from '../components/Text/RegularText'
import LoginForm from '../components/Forms/LoginForm'

import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'
import RegisterForm from '../components/Forms/RegisterForm'


type Props = StackScreenProps<RootStackParamList, 'Welcome'>

const Gradient = styled(LinearGradient).attrs({
    colors: gradients.background,
    start:  positions.twothirds,
    end: positions.bottom
})`
    width: 100%
    height: 100%

`
const WelcomeContainer = styled(Container)`
    justify-content: space-between;
    width: 100%
    height 100%
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 60%;
    align-items: center;
    margin-top: 60%
`

const FormSection = styled.View`
    width: 100%;
    flex: 1; 
    padding: 50px;
`  

const Input = styled.TextInput`
    color: ${colors.white}
`





// TODO : Add 3D Visual Animation Canvas onto Welcome Screen
const Login: FunctionComponent<Props> = ({ navigation }) => {

    const [isNewUser , setIsNewUser] = useState(true)

    return (
        <>
            <StatusBar style='light'/>
            <WelcomeContainer>
                <Gradient>
                <TopSection>
                        <BigText>NEB</BigText>
                        <BigText>ULA</BigText>
                        <RegularText>your thoughts, visualized.</RegularText>
                </TopSection>
                <FormSection>
                    {isNewUser ? <RegisterForm/> : <LoginForm/>}
                </FormSection>
                </Gradient>
            </WelcomeContainer>
        </>
    )
}

export default Login