import React , {FunctionComponent , useRef, useState} from 'react'
import styled from 'styled-components/native'
import QuillEditor from 'react-native-cn-quill';

//components
import RegularButton from '../Buttons/RegularButton';
import RegularText from '../Text/RegularText';
import { colors } from '../colors';
import { GestureResponderEvent, StyleProp, TextInput, TextStyle } from 'react-native';


const EditorView = styled.View`
    width: 100% 
    flex: 2
    padding: 5% 5% 5% 5%
`

const InputView = styled.View`
    width: 97%
    height: 72%
    paddding: 2% 2% 2% 2% 
    border-radius: 30px
    align-self: center
    background-color: ${colors.offwhite}
`

const ButtonView = styled.View`
    flexDirection: row-reverse
    gap: 

`

const HeaderInput = styled.TextInput`
    font-size: 18px
    margin-left: 5%
    marginRight: 5%
    margin-top: 5%
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



interface ComposerProps {
    submitHandler: ((idea: string) => void)
}

  

const attachBtnStyleProps : StyleProp<TextStyle> = {
   marginTop: "4%",
   width: '25%', 
}

const logBtnStyleProps : StyleProp<TextStyle> = {
    marginTop: "4%",
    width: '30%' 
 }





//construct editor view for pop up modal with heading input , notes input , and submit button 
//connect to state.
const ComposerView: FunctionComponent<ComposerProps> = (props) => {
    // const editor = useRef()
    const [idea, setIdea] = useState('')
  return (
    <EditorView>
        <RegularText textStyles={{fontSize: 24, color:colors.graydark, paddingBottom: 5, marginLeft: '5%'}}>Draft Your Idea ...</RegularText>
        {/* <QuillEditor 
            ref={editor}
            autoSize={true}
            quill={{
                placeholder: "What are you thinking?",
                theme: 'snow',
                modules: { toolbar: [ { 'header': [1, 2, false, "large"] },'bold', 'italic', 'underline', 'strike', { 'list': 'ordered'}, { 'list': 'bullet' }, { 'color': [] },'image']}
                }}
        /> */}
        {/* <TextInput placeholder='Title Your Thought' style={headerStyleProps}/> */}
        <InputView>
            
            <HeaderInput placeholder='Title Your Thought...'/>
            <BodyInput multiline placeholder='What are you thinking?'></BodyInput>

            {/* <TextInput multiline numberOfLines={2} placeholder='What are you thinking?' style={inputStyleProps} onChangeText={(text) => {setIdea(text) , console.log(text)}}/> */}
        </InputView>
        <ButtonView>
        <RegularButton btnStyles={attachBtnStyleProps}>ATTACH</RegularButton>
        <RegularButton onPress={() => props.submitHandler(idea)} btnStyles={logBtnStyleProps}>LOG</RegularButton>
        </ButtonView>
       
    </EditorView>
  )
}

export default ComposerView