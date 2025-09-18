import { type FC } from "react"
import { View, Text, StyleSheet } from "react-native"
import { type ViewStyle, type ImageStyle, type TextStyle } from "react-native/types_generated/index"

type MealTagsProps = {
  duration: number
  affordability: string
  complexity: string
  style?: Record<string, ViewStyle>
  textStyle?: Record<string, TextStyle>
}

const MealTags: FC<MealTagsProps> = ({
  duration,
  affordability,
  complexity,
  style = {},
  textStyle = {}
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.tag, textStyle]}>{duration}m</Text>
      <Text style={[styles.tag, textStyle]}>{affordability.toUpperCase()}</Text>
      <Text style={[styles.tag, textStyle]}>{complexity.toUpperCase()}</Text>
    </View>
  )
}

export default MealTags

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8
  },
  tag: {
    fontSize: 10
  },
})