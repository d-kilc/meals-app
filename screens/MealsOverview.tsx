import { type FC } from "react"
import { MEALS } from "../data/dummy-data"
import { View, Text, StyleSheet } from "react-native"

const MealsOverview: FC = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview</Text>
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})