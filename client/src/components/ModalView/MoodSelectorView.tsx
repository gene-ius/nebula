import React, {FunctionComponent, useState} from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import TransparentIconButton from '../Buttons/TransparentIconButton'
import MoodButton from '../Buttons/MoodButton'


import { colors, gradients, positions , moods } from '../colors'
import RegularText from '../Text/RegularText'
import RegularButton from '../Buttons/RegularButton'
import { BackHandler } from 'react-native'

const SelectorView = styled.View`
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
const ScrollView = styled.View`
    flexDirection: column
    alignItems: center
    width: 100%
    height: 85%
    marginBottom: 2%
`

const FooterView = styled.View`
    flexDirection: row-reverse
    height: 10%
    margin-right: 65%
    marginBottom: 10px
`

const MoodData = [
  {
    tag: 'joy',
    text: 'JOYFUL', 
    mood: moods.joy
  },
  {
    tag:'pensi',
    text: "PENSIVE",
    mood: moods.pensi,
  },
  {
    tag: 'mad',
    text: "FRUSTRATED",
    mood: moods.frust,
  },
  {
    tag: 'curi',
    text: "CURIOUS",
    mood: moods.curi,
  },
  {
    tag: 'creat',
    text: "CREATIVE",
    mood: moods.creat
  },
  {
    tag: 'love',
    text: "LOVING",
    mood: moods.love,
  },
  {
    tag: 'great',
    text: "GRATEFUL",
    mood: moods.great,
  },
  {
    tag: 'plan',
    text: "STRATEGIC",
    mood: moods.plan
  },
  {
    tag: 'faith',
    text: "FAITHFUL",
    mood: moods.faith
  },
  {
    tag: 'innov',
    text: "INNOVATIVE",
    mood: moods.innov
  }
]

interface MoodSelectorProps {
  submitHandler: ((moods: string[], seq: number) => void)
  backHandler: (() => void)
  seq?: number
}


const MoodSelectorView : FunctionComponent<MoodSelectorProps> = (props) => {

  const [moodTags, setMoodTags] = useState(new Set<string>())

  const addTag = (tag: string) => {
    setMoodTags((prev) => new Set(prev.add(tag)))
  }

  const removeTag = (tag: string) => {
    setMoodTags((prev) => new Set([...prev].filter(t => t !== tag)))
  }

  return (
    <SelectorView>
      <HeaderView>
          <RegularText>What is Your Mood?</RegularText>
          <TransparentIconButton icon='back' onPress={props.backHandler} viewBox={'0 0 24 24'} btnStyles={{}}/>
      </HeaderView>
      <ScrollView>
        {MoodData.map((v, idx) => {
                return <MoodButton 
                        key={idx}
                        onPress={moodTags.has(v.tag) ? () => {removeTag(v.tag)} : () => {addTag(v.tag)}} 
                        gradient={moodTags.has(v.tag) ? v.mood : moods.disabled} 
                        gradStart={positions.twothirds}
                        gradEnd={positions.bottom}
                        btnStyles={{borderRadius: 13, width: '100%', }}
                        textStyles={{fontFamily: moodTags.has(v.tag) ? 'ChakraPetch-SemiBold' : 'ChakraPetch-Regular' , fontSize: 20}}
                        >
                          {v.text}
                        </MoodButton>
          })}
      </ScrollView>
      <FooterView>
          <RegularButton 
            onPress={moodTags.size > 0 ? () => {props.submitHandler(Array.from(moodTags), props.seq)} : () =>{}} 
            gradient={moodTags.size !== 0 ?  gradients.landingsecondary : gradients.disabled} 
            gradStart={positions.top} 
            gradEnd={positions.bottom}
            btnStyles={{borderRadius: 12}}
            textStyles={{fontFamily: "ChakraPetch-Bold"}}
            >
              NEXT
            </RegularButton>
      </FooterView>
    </SelectorView>
  )
}



export default MoodSelectorView