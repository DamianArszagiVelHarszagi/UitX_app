import { View, StyleSheet } from "react-native";

export default function MapPin() {
	return <View style={styles.pin} />;
}

const styles = StyleSheet.create({
	pin: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: "#340C7F",
		borderWidth: 3,
		borderColor: "white",
	},
});
