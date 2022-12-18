import React , {FunctionComponent, useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import styled from 'styled-components/native'
import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'

import { colors, moods, positions } from '../colors'
import MoodButton from '../Buttons/MoodButton'


const ButtonView = styled.View`
    width: 100%
    height: 60%
    flex-direction: row
    flexWrap: wrap
    justify-content: space-around
    align-content: space-around
    gap: 10px
    paddingRight: 3%
  

`

const CheckContainer = styled.ScrollView`
  flexDirection: column
  paddingTop: 8px

`

const FilterView = () => {
  
  const [selectedInterval, setSelectedInterval] = useState('');

  const [moodTags, setMoodTags] = useState(new Set())

  const addTag = (tag: string) => {
    setMoodTags((prev) => new Set(prev.add(tag)))
  }

  const removeTag = (tag: string) => {
    setMoodTags((prev) => new Set([...prev].filter(t => t !== tag)))
  }

  const MoodData = [
    {
      tag: 'joy',
      text: 'JOY', 
      mood: moods.joy
    },
    {
      tag:'pensi',
      text: "PENSIVE",
      mood: moods.pensi,
    },
    {
      tag: 'mad',
      text: "MAD",
      mood: moods.frust,
    },
    {
      tag: 'curi',
      text: "CURIOUS",
      mood: moods.curi,
    },
    {
      tag: 'creat',
      text: "CREATE",
      mood: moods.creat
    },
    {
      tag: 'love',
      text: "LOVING",
      mood: moods.love,
    },
    {
      tag: 'great',
      text: "GR8FUL",
      mood: moods.great,
    },
    {
      tag: 'plan',
      text: "PLAN",
      mood: moods.plan
    },
    {
      tag: 'faith',
      text: "FAITH",
      mood: moods.faith
    },
    {
      tag: 'innov',
      text: "INNOV8",
      mood: moods.innov
    }
  ]

  

  return (
    <CheckContainer>
      <RegularText textStyles={{textAlign: 'center',fontSize: 20 , zIndex: 1}}>
        Your Mind...
      </RegularText>
      <Picker
        itemStyle={{color: 'white', fontSize: 15, fontFamily: 'ChakraPetch-Bold'}}
        style={{alignSelf: 'center',width: '90%', height: '10%', position: 'relative', top: '-15%'}}
        mode='dropdown'
        selectedValue={selectedInterval}
        onValueChange={(val, idx) => 
          setSelectedInterval(val)
        }>
           <Picker.Item label='Today' value={'today'}/>
           <Picker.Item label='This Week' value={'week'}/>
           <Picker.Item label='This Month' value={'month'}/>
           <Picker.Item label='This Year' value={'year'}/>
           <Picker.Item label='All Time' value={'all'}/>
        </Picker>
        <SmallText textStyles={{textAlign: 'center',fontSize: 18 , zIndex: 1, paddingTop: '40%'}}>
          Mood Filter
        </SmallText>
        <ButtonView>
          {MoodData.map((v) => {
              return <MoodButton 
                        onPress={moodTags.has(v.tag) ? () => {removeTag(v.tag)} : () => {addTag(v.tag)}} 
                        gradient={moodTags.has(v.tag) ? v.mood : moods.disabled} 
                        gradStart={positions.twothirds}
                        gradEnd={positions.bottom}
                        btnStyles={{borderRadius: 10}}
                        textStyles={{fontFamily: moodTags.has(v.tag) ? 'ChakraPetch-SemiBold' : 'ChakraPetch-Regular' , fontSize: 15}}
                        >
                          {v.text}
                        </MoodButton>
          })}
        </ButtonView>

    </CheckContainer>
  )
}

export default FilterView


