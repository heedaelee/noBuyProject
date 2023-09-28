import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {BrandListState} from 'store/brand-list';
import Brand from './Brand';

const BrandList = () => {
  const [initialState, setInitialState] = useRecoilState(BrandListState);

  console.log('initialState : ');
  console.log(initialState);

  const {brandList, page, selectedI} = initialState;

  console.log(`BrandList.tsx 페이지 brandList : `);
  console.log(brandList);

  const handlePress = (id: string | number[]) => {
    console.log(`id : ${id}`);
    setInitialState({...initialState, selectedI: id, page: 'editor'});
  };

  return (
    <View style={styles.listView}>
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
const styles = StyleSheet.create({
  listView: {
    width: '100%',
    // backgroundColor: 'red',
    // flex: 1,
    alignItems: 'center',
  },
});
export default BrandList;
