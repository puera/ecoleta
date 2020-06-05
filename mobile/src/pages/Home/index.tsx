import React, { useState, ReactText, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker';
import { ibge } from '../../services/api';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    ibge.get<IBGEUFResponse[]>('estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);
    })
    
  }, []);

  useEffect(() => {
    if (uf === '0') setCities([]);
    
    ibge.get<IBGECityResponse[]>(`estados/${uf}/municipios`).then(response => {
      const cityNames = response.data.map(city => city.nome);

      setCities(cityNames);
    })
    
  }, [uf]);

  function handeNavigationToPoints() {
    navigation.navigate('Points', {
      uf,
      city, 
    });
  }

  function handleSelectUf(value: ReactText) {
    setUf(String(value));
  }

  function handleSelectCity(value: ReactText) {
    setCity(String(value));
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1  }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground 
        style={styles.container} 
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
        >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <View>
          <Text style={styles.title}>Seu marketplace de coleto de resíduos</Text>
          <Text style={styles.description}>Ajudamos pessoas encontrarem pontos de coleta de forma eficiente. </Text>
        </View>
      </View>
        <Picker
          style={styles.input}
          selectedValue={uf}
          onValueChange={(itemValue, _) => handleSelectUf(itemValue)}
        >
          <Picker.Item label="Selecione uma UF" value="0" />
          {ufs.map(uf => (
            <Picker.Item key={uf} label={uf} value={uf} />
          ))}
        </Picker>

        <Picker
          style={styles.input}
          selectedValue={city}
          onValueChange={(itemValue, _) => handleSelectCity(itemValue)}
        >
          <Picker.Item label="Selecione uma Cidade" value="0" />
          {cities.map(city => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>

      <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handeNavigationToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={24} />
            </View> 
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
      </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;