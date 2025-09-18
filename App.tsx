import { Fragment } from "react"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Categories from "./screens/Categories"
import MealsOverview from "./screens/MealsOverview"
import { RootStackParamList } from "./models/navigation"
import MealDetail from "./screens/MealDetail"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#ffffff",
              contentStyle: { backgroundColor: "#3f2f25" }
            }}
          >

            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{ title: "All Categories" }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverview}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetail}
            />
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
