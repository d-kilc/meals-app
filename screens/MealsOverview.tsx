import { type FC, useLayoutEffect } from "react"
import { View, FlatList, StyleSheet, ListRenderItemInfo } from "react-native"
import { type NativeStackScreenProps } from "@react-navigation/native-stack"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { RootStackParamList } from "../models/navigation"
import Meal from "../models/meal"
import MealItem from "../components/MealItem"

type MealsOverviewProps = NativeStackScreenProps<RootStackParamList, "MealsOverview">

const MealsOverview: FC<MealsOverviewProps> = ({ navigation, route }) => {
  const categoryId = route.params.categoryId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((c) => c.id === route.params.categoryId)!.title
    })
  }, [categoryId, navigation])

  const meals = MEALS.filter((m) => m.categoryIds.indexOf(categoryId) >= 0)

  const renderListItem = (item: ListRenderItemInfo<Meal>) => (
    <MealItem meal={item.item} index={item.index}/>
  )
  
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
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
  container: { flex: 1 }
})