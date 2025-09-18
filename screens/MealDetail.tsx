import { type FC, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../models/navigation";
import MealTags from "../components/MealTags";
import List from "../components/List";
import IconButton from "../components/IconButton";

type SectionTitleProps = { text: string }

type MealDetailProps = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const SectionTitle: FC<SectionTitleProps> = ({ text }) => (
  <View style={styles.sectionTitleContainer}>
    <Text style={styles.sectionTitle}>{text}</Text>
  </View>
)

const MealDetail: FC<MealDetailProps> = ({ navigation, route }) => {
  const meal = route.params.meal;

  const handleHeaderButtonPressed = () => {
    console.log("pressed")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          name="star"
          onPress={handleHeaderButtonPressed}
        />
      )
    });
  }, [navigation, meal]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealTags
          textStyle={{ color: "#ffffff", fontWeight: "bold" }}
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
        />
        <View style={styles.listContainer}>
          <SectionTitle text="Ingredients"/>
          <List items={meal.ingredients}/>
          <SectionTitle text="Steps"/>
          <List items={meal.steps}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    color: "#ffffff",
    textAlign: "center"
  },
  sectionTitleContainer: {
    margin: 16,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 8
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center"
  },
  listContainer: {
    maxWidth: "90%"
  }
});
