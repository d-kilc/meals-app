import { Fragment } from "react"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Categories from "./screens/Categories"
import MealsOverview from "./screens/MealsOverview"
import { RootStackParamList } from "./models/navigation"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <Fragment>
      <StatusBar style="dark"/>
      <View style={styles.appContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="MealsOverview" component={MealsOverview}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#24180f"
  }
});
