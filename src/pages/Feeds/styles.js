import Styled from 'styled-components/native';

export const Container = Styled.View`

`;

export const Header = Styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Post = Styled.View`
  margin-top: 10px;
`;

export const Avatar = Styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = Styled.Text`
  font-weight: 600;
`;

export const Description = Styled.Text`
  padding: 15px;
  line-height: 15px;
`;

export const Loading = Styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
