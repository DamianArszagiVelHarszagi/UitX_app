import { StyleSheet, Text, View } from "react-native";
import { events } from "@/data/events";
import SwipeCard from "@/components/swipecard";

export default function HomeScreen() {
	const event = events[0];

	function handleSwipe(answer) {
		console.log(answer, event.id);
	}
	return (
		<View style={styles.container}>
			<SwipeCard event={event} onSwipe={handleSwipe} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
