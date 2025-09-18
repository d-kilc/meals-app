import { type FC } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

type IconButtonProps = {
  name: any
  color?: string
  onPress(): void
}

const IconButton: FC<IconButtonProps> = ({
  name,
  onPress,
  color="white"
}) => {
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={name} size={24} color={color}/>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  button: {},
  pressed: { opacity: 0.7 }
})