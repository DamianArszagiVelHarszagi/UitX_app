import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { events } from "@/data/events";
import EventFeed from "@/components/eventfeed";
import { StyleSheet, View } from "react-native";
import Header from "@/components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	const [Feedkey, setFeedkey] = useState(0);

	useFocusEffect(
		useCallback(() => {
			return () => {
				setFeedkey((key) => key + 1);
			};
		}, []),
	);
	return (
		<View style={styles.screen}>
			<SafeAreaView style={styles.feed} edges={["top"]}>
				<EventFeed key={Feedkey} events={events} />
			</SafeAreaView>
			<Header />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#40404A",
	},
	feed: {
		flex: 1,
	},
});
