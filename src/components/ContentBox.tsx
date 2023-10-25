import {_WIDTH} from 'config/style-config';
import styled from 'styled-components/native';

const backgroundColor = '#ffffff';
const borderRadius = '10px';

/**
 * 제목 컨텐츠 박스
 */
export const TitleContent = styled.View`
  //TODO:
  /* width: 80vw;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16); */
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
`;
/**
 * 리스트 컨텐츠 박스, (제목 컨텐츠 상속)
 */
//TODO:
// export const ListContent = styled(TitleContent)`
//   cursor: pointer;
//   display: flex;
// `;
export const ListContent = styled.View`
  cursor: pointer;
  display: flex;
  width: ${_WIDTH}px;
  /* background-color: red; */
`;

export default {
  TitleContent: TitleContent,
  ListContent: ListContent,
};
