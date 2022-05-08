import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from './components/Card';
import {getCategory, getJoke} from '../redux/actions/category';

export default function MainApp() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    let array = [];
    dispatch(getCategory()).then(res => {
      res.map((el, index) => {
        if (index === 0) {
          array.push({
            ['title']: el,
            ['buttonTitle']: 'TOP',
            ['background']: '#caffff',
            ['show']: false,
          });
        } else {
          array.push({
            ['title']: el,
            ['buttonTitle']: 'Go Top',
            ['background']: '#fe9796',
            ['show']: false,
          });
        }
      });
      setAllCategories(array);
    });
  }, []);

  const renderCard = ({item, index}) => {
    return (
      <Card
        onPress={() => handleShowJoke(item, index)}
        onButton={() => handleToTop(item, index)}
        title={item.title}
        index={index + 1}
        buttonTitle={item.buttonTitle}
        background={item.background}
      />
    );
  };

  const handleToTop = (val, index) => {
    let newArr = allCategories;
    console.log(val, 'item', newArr);
    newArr = newArr.filter(item => item.title !== val.title);
    newArr.unshift(val);
    setAllCategories(newArr);
  };

  const handleJoke = (val, index) => {
    dispatch(getJoke(val.title));
  };

  // const handleShowJoke = (item, index) => {
  //   setAllCategories(...categories, categories[index]: "")
  // };

  useEffect(() => {
    console.log(allCategories, 'semua kategori');
  }, [allCategories]);

  return (
    <View style={{paddingHorizontal: 20, paddingTop: 50}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>My Application</Text>
      </View>
      <View style={{marginTop: 40}}>
        <FlatList
          data={allCategories}
          renderItem={renderCard}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  );
}
