import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import { categories } from './categories';

export interface IMarker{
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  description: string;
  contact: string;
  category: string;
}

export default function Home(){

  const [markers, setMarkers] = useState<IMarker[]>([])
  const [filter, setFilter] = useState('');

  const navigation = useNavigation();

  const filteredData = markers.filter(m => m.category === filter)

  useEffect(() => {
    fetch("http://192.168.0.122:3333/stores").then(async (request) => {
      const data = await request.json();

      setMarkers(data);
    })
  }, [])

  if(!markers || markers.length === 0) {
   return <ActivityIndicator />
  }

  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.headerContainer}>
      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.subTitle}>Encontre no mapa um ponto de comércio local</Text>
     </View>

     <MapView 
      style={styles.map}
      initialRegion={{
        latitude: markers[0].latitude,
        longitude: markers[0].longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
     >
       {(filter ? filteredData : markers).map((item) => {
         return (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            onPress={() => {
              navigation.navigate('Detail', item);
            }}
          />
        );
       })}
     </MapView>

     <View style={styles.categoryContainer}>
       <FlatList
       data={categories}
       horizontal
       showsHorizontalScrollIndicator={false}
       ItemSeparatorComponent={() => <View style={{width: 10}} />}
       contentContainerStyle={{
         alignItems: 'center'
       }}
       renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            setFilter(filter === item.key ? "" : item.key)
          }}
          style={[
            styles.categoryItem,
            filter === item.key ? styles.selectedCategory : null
          ]}
          key = {item.key}
        >
          <Image
            style={styles.categoryImage}
            source={item.image}
          />
          <Text style={styles.categoryText}>{item.label}</Text>
        </TouchableOpacity>
       )}

       />
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  headerContainer: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 30: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#253238"
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: "#6C6C80"
  },
  map: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  categoryContainer: {
    padding: 10,
  },
  categoryItem: {
    height: 140,
    backgroundColor: "#F0F0F5",
    width: 120,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryImage: {
    marginBottom: 15,
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: 'center',
    color: "#6C6C80"
  },
  selectedCategory: {
    backgroundColor: "#e4d6ff",
    borderWidth: 1,
    borderColor: '#7e57c2',
  }
})