import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';

export const CardCharacters = ({ character, onPress }) => {

  console.log("character", character);

  return (
    <TouchableOpacity onPress={() => onPress(character)}>
      <View style={styles.item}>
        <View style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.img} />
          <View style={styles.textContainer}>
            <Text variant="titleLarge" style={styles.titleItem}>{character.charname}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Definindo cor de fundo com opacidade
  },
  titleItem: {
    marginBottom: 10,
    textAlign: 'center', // Centralizar o texto
    color: '#fff', // Definir cor do texto como branco
  },
  img: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject, // Preencher completamente o contêiner pai
    justifyContent: 'center',
    alignItems: 'center',
  },
});