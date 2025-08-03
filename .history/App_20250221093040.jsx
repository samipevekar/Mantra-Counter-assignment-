import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const App = () => {
  return (
    <GestureHandlerRootView>
      <View>
        <HomeScreen/>
      </View>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})