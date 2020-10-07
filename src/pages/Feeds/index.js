import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  Post,
  Avatar,
  Name,
  Description,
  Loading,
} from './styles';

import FeedImage from '../../components/FeedImage';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function LoadPage() {
    setLoading(true);
    const { data } = await api.get('/feed?_expand=author');

    setLoading(false);
    setFeed(data);
  }

  useEffect(() => {
    LoadPage();
  }, []);

  async function refleshListem() {
    setRefreshing(true);
    await LoadPage();
    setRefreshing(false);
  }

  return (
    <Container>
      <FlatList
        key="List"
        data={feed}
        keyExtractor={(item) => String(item.id)}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refleshListem}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>
            <FeedImage
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.image }}
              source={{ uri: item.small }}
            />
            <Description>
              <Name>{item.author.name}</Name> - {item.description}
            </Description>
          </Post>
        )}
      />
    </Container>
  );
}
