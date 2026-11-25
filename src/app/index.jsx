import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
import { events } from "@/data/events";
import SwipeCard from "@/components/swipecard";
import EventFeed from "@/components/eventfeed";

export default function HomeScreen() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const event = events[currentIndex];

	useFocusEffect(
		useCallback(() => {
			return () => {
				setCurrentIndex(0);
			};
		}, []),
	);

	function handleSwipe(answer) {
		console.log(answer, event.id);
		setCurrentIndex(currentIndex + 1);
	}

	if (!event) {
		return (
			<View style={styles.container}>
				<Text>Geen events meer</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<SwipeCard key={event.id} event={event} onSwipe={handleSwipe} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
