import { type FC } from "react"
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Meal from "../models/meal"

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../models/navigation'; // adjust path as needed
import MealTags from "./MealTags";

type MealItemProps = {
  meal: Meal
  index: number
}

const MealItem: FC<MealItemProps> = ({meal, index}) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "MealDetail">>();

  const handlePress = () => navigation.navigate("MealDetail", { meal })

  return (
    <View
      style={[
        { flex: 1 },
        index % 2 === 0
          ? { paddingRight: 10 }
          : { paddingLeft: 10 }
      ]}
    >
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({pressed}) => pressed ? styles.buttonPressed : null}
          onPress={handlePress}
        >
          <View style={{ overflow: "hidden", borderRadius: 8 }}>
            <View style={{ gap: 8 }}>
              <Image
                style={styles.image}
                source={{ uri: meal.imageUrl }}
              />
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {meal.title}
              </Text>
            </View>
            <MealTags
              duration={meal.duration}
              affordability={meal.affordability}
              complexity={meal.complexity}
            />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    height: 100
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
    paddingHorizontal: 4
  },
  buttonPressed: {
    opacity: 0.5
  }
})