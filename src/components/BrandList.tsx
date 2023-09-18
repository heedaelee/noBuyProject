import React from 'react';
import {View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {BrandListState} from 'store/brand-list';
import Brand from './Brand';

const BrandList = () => {
  const brandList = useRecoilValue(BrandListState);

  console.log('brandList : ');
  console.log(brandList);

  const handlePress = (id: string | number[]) => {
    console.log(`id : ${id}`);
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
