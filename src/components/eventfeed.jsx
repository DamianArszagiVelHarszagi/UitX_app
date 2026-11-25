import SwipeCard from "./swipecard";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function EventFeed({ events }) {
	const [pageHeight, setPageHeight] = useState(0);
	function handleSwipe(answer, event) {
		console.log(answer, event.id);
	}
	return (
		<FlatList
			pagingEnabled
			showsVerticalScrollIndicator={false}
			windowSize={3}
			onLayout={(e) => setPageHeight(e.nativeEvent.layout.height)}
			data={events}
			keyExtractor={(event) => String(event.id)}
			renderItem={({ item }) => (
				<View style={[styles.page, { height: pageHeight }]}>
					<SwipeCard
						event={item}
						onSwipe={(answer) => handleSwipe(answer, item)}
					/>
				</View>
			)}
		/>
	);
}
const styles = StyleSheet.create({
	page: {
		alignItems: "center",
		justifyContent: "center",
	},
});
