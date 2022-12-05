import React , {FunctionComponent , useRef, useState} from 'react'
import styled from 'styled-components/native'
import QuillEditor from 'react-native-cn-quill';

//components
import RegularButton from '../Buttons/RegularButton';
import RegularText from '../Text/RegularText';
import { colors, gradients } from '../colors';
import { GestureResponderEvent, StyleProp, TextInput, TextStyle } from 'react-native';
import ToggleIconButton from '../Buttons/ToggleIconButton';
import { processFontFamily } from 'expo-font';


const EditorView = styled.View`
    width: 100% 
    flex: 2
    padding: 5% 5% 5% 5%
`

const InputView = styled.View`
    width: 97%
    height: 75%
    marginTop: 2%
    border-radius: 30px
    align-self: center
    background-color: ${colors.offwhite}
`

const ButtonView = styled.View`
    marginTop: 5%
    flexDirection: row
    justifyContent: space-around

`

const HeaderInput = styled.TextInput`
    font-size: 18px
    margin-left: 5%
    marginRight: 5%
    margin-top: 8%
    borderBottomColor: ${colors.graylight}
    borderBottomWidth: 1px

`

const BodyInput = styled.TextInput`
    marginTop: 4%
    marginLeft: 5%
    marginRight: 5%
    marginBottom: 10%
    textAlign: justify
`

const logBtnStyleProps : StyleProp<TextStyle> = {
    width: "50%",
    borderRadius: 17,
    borderColor: colors.white,
    borderWidth: 1
 }


interface ComposerProps {
    submitHandler: ((idea: string) => void)
}





//construct editor view for pop up modal with heading input , notes input , and submit button 
//connect to state.
const ComposerView: FunctionComponent<ComposerProps> = (props) => {
    // const editor = useRef()
    const [idea, setIdea] = useState('')
  return (
    <EditorView>
        <RegularText textStyles={{fontSize: 24, color:colors.graydark, paddingBottom: 5, marginLeft: '5%'}}>Draft Your Idea ...</RegularText>
        <InputView>
            <HeaderInput placeholder='Title Your Thought...'/>
            <BodyInput multiline placeholder='What are you thinking?' onChange={() => setIdea}></BodyInput>
        </InputView>
        <ButtonView>
            <ToggleIconButton onPress={()=> {}} icon={'camera'} />
            <ToggleIconButton onPress={()=> {}} icon={'upload'} />
            <RegularButton gradient={gradients.landingsecondary} onPress={() => props.submitHandler(idea)} btnStyles={logBtnStyleProps} textStyles={{fontFamily:"ChakraPetch-Light", fontSize:20}}>LOG IDEA</RegularButton>
        </ButtonView>
    </EditorView>
  )
}

export default ComposerView