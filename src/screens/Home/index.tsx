import { API_URL } from '@env';

import { View, Image, FlatList } from 'react-native';

import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    fetch(`${API_URL}/games`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
