import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

interface PokemonProps {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: PokemonProps) => {
  const partes = url.split('/');
  const id = partes.filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
   
    const move = Animated.sequence([
      Animated.timing(translateY, {
        toValue: -10, 
        duration: 1000,
        useNativeDriver: true, 
      }),
      Animated.timing(translateY, {
        toValue: 0, 
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);

    
    Animated.loop(move).start();
  }, [translateY]);

  return (
    <View style={styles.card}>
      {}
      <Animated.Image 
        source={{ uri: imageUrl }} 
        style={[
          styles.image, 
          { transform: [{ translateY }] } 
        ]} 
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    textTransform: 'capitalize',
    marginLeft: 10,
  },
});

export default PokemonCard;