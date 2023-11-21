import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomProfessor = ({ image, professorName }) => {
    return (

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={image} style={{ width: 70, height: 70, borderRadius: 100 }} />
        <Text style={{ textAlign: 'center', marginTop: 8 }}>{professorName}</Text>
    </View>
    
    )
}

export default CustomProfessor