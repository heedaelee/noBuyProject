import {globalStyles} from 'config/style-config';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BrandItem} from 'store/brand-list';

interface BrandType extends BrandItem {
  onPress: (id: string | number[]) => void;
}

const Brand = ({id, name, content, onPress}: BrandType) => {
  return (
    <Pressable onPress={() => onPress(id)}>
      <View style={styles.listView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listView: {
    ...globalStyles.contentView,
    marginTop: 10,
  },
  titleView: {
    // backgroundColor: 'red',
    width: '40%',
  },
  titleText: {
    color: '#2962ff',
    textAlign: 'center',
    fontFamily: 'Cafe24Dangdanghae-v2.0',
  },
  contentView: {
    width: '60%',
  },
  contentText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Cafe24Dangdanghae-v2.0',
  },
});

export default Brand;
