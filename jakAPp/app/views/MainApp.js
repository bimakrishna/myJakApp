import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

export default function MainApp() {
  const tes = useSelector(state => state.categories.categories);

  useEffect(() => {
    console.log(tes, 'tes');
  }, [tes]);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
