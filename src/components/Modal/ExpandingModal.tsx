import React , { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import Modal , { Direction , OnSwipeCompleteParams}  from 'react-native-modal'
import { colors } from '../colors'
import { GestureResponderEvent, PanResponderGestureState, Text } from 'react-native'

const ModalView = styled.View`
    width: 95%
    height: 65%
    align-self: center
`

const ComposerCard = styled.View`
    width: 100%
    height: 100%
    border-radius: 45px
    background-color: ${colors.white}
    justify-content: center
    align-items:center
`



interface ExpandingModalProps {
  isVisible: boolean
  animationIn: any
  animationOut: any
//   onSwipeComplete: ((params: OnSwipeCompleteParams, gestureState: PanResponderGestureState) => void) | undefined
  dismissAction: (() => void)
  hasBackdrop: boolean
  tab?: string | null
  children?: React.ReactNode
  modalStyle?: any
}


const ExpandingModal : FunctionComponent<ExpandingModalProps> = (props) => {
  return (
    <Modal
        isVisible={props.isVisible} 
        animationIn={props.animationIn} 
        animationOut={props.animationOut}
        onBackdropPress={props.dismissAction}
        style={props.modalStyle}
        hasBackdrop={props.hasBackdrop}
        backdropOpacity={0.2}
        >
        <ModalView>
            <ComposerCard>
                {props.children}
            </ComposerCard>
        </ModalView>
    </Modal>
  )
}

export default ExpandingModal