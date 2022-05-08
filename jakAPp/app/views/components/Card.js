import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';

export default function Card({onPress, onButton, title, index}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: '#e6e6e6',
        padding: 20,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View style={{flexDirection: 'row', width: '50%'}}>
        <Text style={{width: '20%'}}>{index}</Text>
        <Text>{title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          disabled={index === 1 ? true : false}
          style={{
            backgroundColor: index === 1 ? '#caffff' : '#fe9796',
            padding: 10,
            width: 80,
            borderRadius: 10,
          }}
          onPress={onButton}>
          <Text style={{textAlign: 'center'}}>
            {index === 1 ? 'TOP' : 'Go Top'}
          </Text>
        </TouchableOpacity>
        <Text>X</Text>
      </View>
    </Pressable>
  );
}
