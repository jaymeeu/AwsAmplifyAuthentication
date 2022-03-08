import React from 'react';
import {View, Text} from 'react-native';
import { Auth } from 'aws-amplify';

const Index = () => {

  const signOut = ()=>{
    Auth.signOut()
  }

  return (
    <View style={{flex:1}}>
      <Text style={{fontSize: 36, alignSelf: 'center'}}>Welcome Home</Text>
      <Text
        onPress={signOut}
        style={{
          width:'100%',
          textAlign:'center',
          color:'red',
          marginTop:'auto',
          marginVertical:20,
          fontSize:20
        }}>
        Sign out
      </Text>
    </View>
  );
};

export default Index;
