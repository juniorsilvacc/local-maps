import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {IMarker} from '../Home'

type DetailRoute = RouteProp<{detail: IMarker}, "detail">;

export default function Detail(){

  const {params} = useRoute<DetailRoute>()

  return (
   <View>
     <Text>Detail</Text>
   </View>
  );
}