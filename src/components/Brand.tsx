import React from 'react';
import {Pressable} from 'react-native';
import {BrandItem} from 'store/brand-list';
import {styled} from 'styled-components/native';
import {ListContent} from './ContentBox';

interface BrandType extends BrandItem {
  onPress: (id: string | number[]) => void;
}

const Brand = ({id, name, content, onPress}: BrandType) => {
  return (
    <Pressable onPress={() => onPress(id)}>
      <ListContent>
        <Title>{name}</Title>
        <Content>{content}</Content>
      </ListContent>
    </Pressable>
  );
};

const Title = styled.View`
  width: 40%;
  color: #2962ff;
  font-size: 1.1rem;
  font-weight: 800;
`;
const Content = styled.View`
  width: 60%;
  text-align: center;
`;

export default Brand;
