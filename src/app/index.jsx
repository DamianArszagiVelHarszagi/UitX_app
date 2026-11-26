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
		<SafeAreaView style={styles.screen} edges={["top"]}>
			<Header />
			<EventFeed key={Feedkey} events={events} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
