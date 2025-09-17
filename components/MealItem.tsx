import { type FC } from "react"
import { View, Text, StyleSheet, Pressable, Image, Platform, FlatList } from "react-native"
import Meal from "../models/meal"

type MealItemProps = { meal: Meal }

type TagProps = {
  text: string
  color?: string
}

const MealItem: FC<MealItemProps> = ({meal}) => {

  const { isGlutenFree, isLactoseFree, isVegan, isVegetarian } = meal

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({pressed}) => pressed ? styles.buttonPressed : null}
      >
        <View style={{ overflow: "hidden", borderRadius: 8 }}>
          <View style={{ gap: 8}}>
            <Image
              style={styles.image}
              source={{ uri: meal.imageUrl }}
            />
            <Text style={styles.title}>
              {meal.title}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    gap: 0,
    elevation: 4,
    shadowColor: "",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8
  },
  detailItem: {
    fontSize: 12
  },
  buttonPressed: {
    opacity: 0.5
  }
})