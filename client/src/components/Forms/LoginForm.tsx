import React , { FunctionComponent } from 'react'
import styled from "styled-components/native"
import RegularButton from '../Buttons/RegularButton'

import { colors , gradients, positions } from '../colors'



const Input = styled.TextInput`
    color: ${colors.white}
    fontFamily: ChakraPetch-Regular
    fontSize: 18
`

const FormContainer = styled.View`
    height: 60%
    flexDirection: column
    justifyContent: space-around
`

const InputContainer = styled.View`
    width: 100%
    height: 24px
    alignSelf: center
    borderBottomWidth: 0.5px
    borderColor: ${colors.white}
    marginLeft: 10%
    marginRight: 10%
`

const ButtonsContainer = styled.View`
    width: 100%
    height: 20%
    alignSelf: center
    marginTop: 8%
    marginLeft: 25%
    marginRight: 25%
    box-shadow: 0px 4px 4px ${colors.shadow} 

`


const LoginForm: FunctionComponent = () => {
  return (
    <>
        <FormContainer>
            <InputContainer>
                <Input placeholder='username' placeholderTextColor={colors.white}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='password' placeholderTextColor={colors.white}/>
            </InputContainer>
        </FormContainer>
       
        <ButtonsContainer>
            <RegularButton onPress={()=> {}} gradient={gradients.landingsecondary} gradStart={positions.left} gradEnd={positions.right} btnStyles={{borderRadius: 25}}>
                LOGIN
            </RegularButton>
            <RegularButton onPress={()=> {}} gradient={gradients.landingprimary} gradStart={positions.left} gradEnd={positions.right} btnStyles={{borderRadius: 25}}>
                REGISTER
            </RegularButton>
        </ButtonsContainer>
    </>
  )
}

export default LoginForm