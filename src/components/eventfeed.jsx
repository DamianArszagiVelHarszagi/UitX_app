import { FlatList } from "react-native";
import SwipeCard from "./swipecard";

export default function EventFeed({ events }) {
	function handleSwipe(answer, event) {
		console.log(answer, event.id);
	}
	return (
		<FlatList
			data={events}
			keyExtractor={(event) => String(event.id)}
			renderItem={({ item }) => (
				<SwipeCard
					event={item}
					onSwipe={(answer) => handleSwipe(answer, item)}
				/>
			)}
		/>
	);
}
