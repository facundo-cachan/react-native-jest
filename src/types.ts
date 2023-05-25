import { RouteProp } from '@react-navigation/native'

import type { ParamListBase, StackNavigationState } from '@react-navigation/native'
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack'


type Params = { itemId: number; otherParam?: unknown }
type RootStackParamList = ParamListBase & {
  Demo?: undefined
  Details: undefined
  Item: Params
}

export type Screen = {
  name: string
  screen: StackNavigationState<ParamListBase>
  title?: string
}
export type ScreenProps = NativeStackScreenProps<RootStackParamList>
export type ScreenPropsDetails = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>
  route: RouteProp<RootStackParamList, 'Item'>
}
