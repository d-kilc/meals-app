import { type FC } from "react"
import { View, Text, FlatList, StyleSheet, ListRenderItemInfo } from "react-native"
import { type NativeStackScreenProps } from "@react-navigation/native-stack"
import { MEALS } from "../data/dummy-data"
import { RootStackParamList } from "../models/navigation"
import Meal from "../models/meal"
import MealItem from "../components/MealItem"

type MealsOverviewProps = NativeStackScreenProps<RootStackParamList, "MealsOverview">

const MealsOverview: FC<MealsOverviewProps> = ({ navigation, route }) => {
  const categoryId = route.params.categoryId
  const meals = MEALS.filter((m) => m.categoryIds.indexOf(categoryId) >= 0)

  const renderListItem = (item: ListRenderItemInfo<Meal>) => (
    <MealItem meal={item.item}/>
  )
  
  return (
    <View style={styles.container}>
      <FlatList
        style={{ padding: 16, gap: 16 }}
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
      />
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16
  }
})