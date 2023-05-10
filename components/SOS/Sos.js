import * as React from 'react';
import { View, Text } from 'react-native';

const Sos = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 26, fontWeight: 'bold' }}>
            SOS Alert Page
        </Text>
    </View>
  )
}

export default Sos;