import SwipeCard from "./swipecard";
import { useState, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function EventFeed({ events }) {
	const listRef = useRef(null);
	const [pageHeight, setPageHeight] = useState(0);

	function handleSwipe(answer, event, index) {
		console.log(answer, event.id);
		const nextIndex = index + 1;
		if (nextIndex < events.length) {
			listRef.current.scrollToOffset({ offset: nextIndex * pageHeight });
		}
	}
	return (
		<FlatList
			ref={listRef}
			pagingEnabled
			showsVerticalScrollIndicator={false}
			windowSize={3}
			onLayout={(e) => setPageHeight(e.nativeEvent.layout.height)}
			data={events}
			keyExtractor={(event) => String(event.id)}
			renderItem={({ item, index }) => (
				<View style={[styles.page, { height: pageHeight }]}>
					<SwipeCard
						event={item}
						onSwipe={(answer) => handleSwipe(answer, item, index)}
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
