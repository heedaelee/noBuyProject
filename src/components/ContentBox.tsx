import styled from 'styled-components/native';

const backgroundColor = '#ffffff';
const borderRadius = '10px';

/**
 * 제목 컨텐츠 박스
 */
export const TitleContent = styled.View`
  width: 80vw;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
`;
/**
 * 리스트 컨텐츠 박스, (제목 컨텐츠 상속)
 */
export const ListContent = styled(TitleContent)`
  cursor: pointer;
  display: flex;
`;

export default {
  TitleContent: TitleContent,
  ListContent: ListContent,
};
