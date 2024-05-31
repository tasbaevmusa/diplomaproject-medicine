import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Utils/Colors'

export default function EnrollmentSection({ userEnrollment, onEnrollmentPress, onContinuePress,course }) {
  // const [isEnrolled,setIsEnrolled]=useState(false);
  useEffect(() => {
    console.log("--", userEnrollment)
  }, [])

  const watchOnYoutube=()=>{
    Linking.openURL(course.youtubeUrl);
  }

  return course&&(
    <View style={{
      padding: 15,
      backgroundColor: Colors.PRIMARY,
      borderRadius: 10
    }}>
      {!course?.chapter[0]&& <TouchableOpacity 
      onPress={() => watchOnYoutube()}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 15, color: Colors.WHITE
          }}> Посмотреть с Ютуба</Text>
        </TouchableOpacity>}
      {course?.chapter[0]&&userEnrollment?.length>0 ?
        <TouchableOpacity onPress={() => onContinuePress()}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 15, color: Colors.WHITE
          }}>Продолжить</Text>
        </TouchableOpacity>
        :
        course?.chapter[0]&& <TouchableOpacity
          onPress={() => onEnrollmentPress()}
        >
          <Text style={{
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 15, color: Colors.WHITE
          }}>Записаться на курс</Text>
        </TouchableOpacity>}
    </View>
  )
}