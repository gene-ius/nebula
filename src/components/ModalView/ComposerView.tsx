import React , {FunctionComponent , useRef, useState} from 'react'
import styled from 'styled-components/native'
import QuillEditor from 'react-native-cn-quill';

//components
import RegularButton from '../Buttons/RegularButton';
import RegularText from '../Text/RegularText';
import { colors, gradients, positions } from '../colors';
import { GestureResponderEvent, Keyboard, StyleProp, TextInput, TextStyle, ViewStyle } from 'react-native';
import ToggleIconButton from '../Buttons/ToggleIconButton';
import { processFontFamily } from 'expo-font';



//types import 
import { Idea } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TransparentIconButton from '../Buttons/TransparentIconButton';


const EditorView = styled.View`
    flex-direction: column
    width: 100% 
    flex: 2
    padding: 5% 5% 5% 5%
`
const HeaderView = styled.View`
    flexDirection: row
    justify-content: space-between
    marginLeft: 5%
    marginRight: 5%

`

const InputView = styled.View`
    width: 97%
    height: 90%
    marginTop: 2%
    border-radius: 30px
    align-self: center
    background-color: ${colors.backdark}
    innerShadow: 0px 4px 4px ${colors.shadow}
    paddingBottom: -10%
`

const ButtonView = styled.View`
    flexDirection: row
    justifyContent: space-around
    top: -16%

`

const HeaderInput = styled.TextInput`
    font-size: 18px
    margin-left: 5%
    marginRight: 5%
    margin-top: 8%
    paddingBottom: 2%
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

const modalTitleTextProps : StyleProp<TextStyle> ={
    fontSize: 24, 
    color:colors.white, 
    paddingBottom: 5, 
    borderBottomColor: colors.white,
    borderBottomWidth: 3
}

const logBtnStyleProps : StyleProp<ViewStyle> = {
    width: "40%",
    borderRadius: 17,
    borderColor: colors.white,
    borderWidth: 1,
 }

 const toggleBtnStyleProps : StyleProp<ViewStyle> = {
    borderRadius: 18,
 }

const headerInputTextStyleProps : StyleProp<TextStyle> = {
    color: colors.white,
    fontSize: 18,
    fontFamily: "ChakraPetch-Regular"

}

const bodyInputTextStyleProps : StyleProp<TextStyle> = {
    color: colors.white,
    fontSize: 15,
    fontFamily: "ChakraPetch-Regular"
}


interface ComposerProps {
    submitHandler: ((idea: Idea) => void)
    backHandler:(() => void)
    moodData: string[]
}

const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{height: '90%'}}>
            {children}
    </TouchableWithoutFeedback>
)



//construct editor view for pop up modal with heading input , notes input , and submit button 
//connect to state.
const ComposerView: FunctionComponent<ComposerProps> = (props) => {
    const [header, setHeader] = useState('') 
    const [body, setBody] = useState('')

    const clearIdea = () => {
        setHeader('')
        setBody('')
    }


  return (
    <EditorView>
        <HeaderView>
            <RegularText textStyles={modalTitleTextProps}>Draft Your Idea ...</RegularText>
            <TransparentIconButton icon='back' onPress={() => {clearIdea; console.log('idea cleared'); props.backHandler}} viewBox={'0 0 24 24'} btnStyles={{}}/>
        </HeaderView>
        <HideKeyboard >
            <InputView>
                    <HeaderInput onChangeText={(text) => setHeader(text)} placeholder='Title Your Thought...' placeholderTextColor={colors.graylight} style={headerInputTextStyleProps}/>
                    <BodyInput onChangeText={(text) => setBody(text)}multiline placeholder='What are you thinking?' placeholderTextColor={colors.graylight}  style={bodyInputTextStyleProps}></BodyInput>
            </InputView>
        </HideKeyboard>
        <ButtonView>
            <ToggleIconButton onPress={()=> {}} icon={'image'} btnStyles={toggleBtnStyleProps} />
            <ToggleIconButton onPress={()=> {}} icon={'upload'} />
            <RegularButton 
                gradient={gradients.landingsecondary} 
                gradStart={positions.left}
                gradEnd={positions.right}
                onPress={() => {
                    if (header == '' || body == '') return
                    const newIdea : Idea = {title: header, body: body, mood: props.moodData}
                    props.submitHandler(newIdea)
                }} btnStyles={logBtnStyleProps} textStyles={{fontFamily:"ChakraPetch-Light", fontSize:20}}>LOG IDEA</RegularButton>
        </ButtonView>
    </EditorView>
  )
}

export default ComposerView