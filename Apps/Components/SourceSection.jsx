import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import { useNavigation } from '@react-navigation/native';

export default function SourceSection({course,userEnrollment}) {
  
  const [isMember,setIsMember]=useState(false);
  const navigation=useNavigation();
  const onSourceClick=(url)=>{
    if(isMember)
    {
      Linking.openURL(url)

    }
    else{
      navigation.navigate('membership');
    }
  }
  return (
    <View style={{display:'flex',gap:10, flexDirection:'row',justifyContent:'space-around',
    marginTop:20,marginBottom:10}}>
      <TouchableOpacity 
      onPress={()=>onSourceClick(course.sourceCode)}
      style={{padding:15,backgroundColor:Colors.WHITE,
    alignItems:'center',borderRadius:10,width:100,height:100, borderWidth:0.4}}>
        <Image source={require('./../../assets/images/open-source.png')}
        style={{width:40,height:40}}
        />
        <Text style={{fontSize:14,fontFamily:'outfit'}}>
            Источник</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>onSourceClick(course.demoUrl)}
      style={{padding:15,backgroundColor:Colors.WHITE,
    alignItems:'center',borderRadius:10,width:100,
    height:100,
    borderWidth:0.4}}>
        <Image source={require('./../../assets/images/web-design.png')}
        style={{width:40,height:40}}
        />
        <Text style={{fontSize:14,fontFamily:'outfit'}}>
            Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>onSourceClick(course.youtubeUrl)}
      style={{padding:15,backgroundColor:Colors.WHITE,
    alignItems:'center',borderRadius:10,width:100,borderWidth:0.4}}>
        <Image source={require('./../../assets/images/youtube.png')}
        style={{width:40,height:40}}
        />
        <Text style={{fontSize:14,fontFamily:'outfit'}}>
            Youtube</Text>
      </TouchableOpacity>
    </View>
  )
}