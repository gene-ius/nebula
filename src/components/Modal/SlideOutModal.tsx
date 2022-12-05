import React , { FunctionComponent, useState } from 'react'
import styled from 'styled-components/native'
import Modal , { Direction , OnSwipeCompleteParams}  from 'react-native-modal'
import { colors } from '../colors'
import { GestureResponderEvent, PanResponderGestureState, Text } from 'react-native'
import SideTabButton from '../Buttons/SideTabButton'


const CardContainer = styled.View`
  width: 90%
  height: 25%
  background-color: ${colors.white}
  border-bottom-left-radius: 20px
  box-shadow: 0px 3px 1px ${colors.shadow}
`

const ModalView = styled.View`
  flex-direction: row
  width: 100%
  height: 85%%
  margin-left: 10%
  margin-top: 20%


`
interface SwipeModalProps {
  isVisible: boolean
  animationIn: any
  animationOut: any
  swipeDirection: Direction | Direction[]
  swipeThreshold: number
  onSwipeComplete: ((params: OnSwipeCompleteParams, gestureState: PanResponderGestureState) => void) | undefined
  closeHandler: ((event: GestureResponderEvent) => void)
  hasBackdrop: boolean
  tab?: string | null
  children?: React.ReactNode
  modalStyle?: any

}


const SlideOutModal: FunctionComponent<SwipeModalProps>  = (props) => {

  return (
    
        <Modal 
          isVisible={props.isVisible} 
          animationIn={props.animationIn} 
          animationOut={props.animationOut}
          swipeDirection={props.swipeDirection}
          swipeThreshold={props.swipeThreshold} 
          onSwipeComplete={props.onSwipeComplete}
          style={props.modalStyle}
          hasBackdrop={props.hasBackdrop}
        >
          <ModalView>
            {props.tab !== null ? <SideTabButton icon='filter' onPress={props.closeHandler}/> : null}
            <CardContainer>
              {props.children}
            </CardContainer>
          </ModalView>
        </Modal>
    
  )
}

export default SlideOutModal