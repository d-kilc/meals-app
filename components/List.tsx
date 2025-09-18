import { type FC } from "react"
import { StyleSheet, View, Text } from "react-native"

type ListProps = {
  items: Array<string>
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, i) => (
        <View key={i} style={styles.listItemContainer}>
          <Text style={styles.listItem}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {},
  listItemContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497" 
  },
  listItem: {
    color: "#351401",
    textAlign: "center"
  }
})