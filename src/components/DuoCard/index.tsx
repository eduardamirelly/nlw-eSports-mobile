import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

interface DuoCardProps {}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Eduarda Mirelly" />
      <DuoInfo label="Nome" value="Eduarda Mirelly" />
      <DuoInfo label="Nome" value="Eduarda Mirelly" />
      <DuoInfo label="Nome" value="Eduarda Mirelly" />
    </View>
  );
}
