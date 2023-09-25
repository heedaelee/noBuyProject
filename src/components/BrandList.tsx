import React from 'react';
import {View} from 'react-native';
import {useRecoilState} from 'recoil';
import {BrandListState} from 'store/brand-list';
import Brand from './Brand';

const BrandList = () => {
  const [initialState, setInitialState] = useRecoilState(BrandListState);

  console.log('initialState : ');
  console.log(initialState);

  const {brandList, page, selectedI} = initialState;

  const handlePress = (id: string | number[]) => {
    console.log(`id : ${id}`);
    setInitialState({...initialState, selectedI: id, page: 'editor'});
  };

  return (
    <View>
      {brandList.map((brand, index) => (
        <Brand
          key={index}
          id={brand.id}
          name={brand.name}
          content={brand.content}
          onPress={handlePress}
        />
      ))}
    </View>
  );
};
export default BrandList;
