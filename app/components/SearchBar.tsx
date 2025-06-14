import { icons } from '@/constants/icons'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

interface ISearch{
    onPress?: ()=>void,
    placeHolder: string
}

const SearchBar = ({ onPress, placeHolder }: ISearch) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-2 gap-2'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff"/>
      <TextInput 
        onPress={onPress}
        placeholder={placeHolder}
        onChangeText={()=>{}}
        placeholderTextColor="#a8b5db"
        className='text-white'
      />
      <Text className='text-light-300'></Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})