import React from 'react';
import { View, Image, Text } from 'react-native'

import styles from './styles'


function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'http://github.com/leandross86.png'}} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Leandro Souza</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;