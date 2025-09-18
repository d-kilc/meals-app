import { type FC } from "react"
import { FlatList, type ListRenderItemInfo } from "react-native"
import { type NativeStackScreenProps } from "@react-navigation/native-stack"

import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"
import { Category } from "../models/category"
import { RootStackParamList } from "../models/navigation"


type CategoriesProps = NativeStackScreenProps<RootStackParamList, "Categories">

const Categories: FC<CategoriesProps> = ({ navigation }) => {

  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => navigation.navigate(
          "MealsOverview",
          { categoryId: itemData.item.id }
        )}
      />
    )
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  )
}

export default Categories