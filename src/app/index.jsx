import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { events } from "@/data/events";
import EventFeed from "@/components/eventfeed";

export default function HomeScreen() {
	const [Feedkey, setFeedkey] = useState(0);

	useFocusEffect(
		useCallback(() => {
			return () => {
				setFeedkey((key) => key + 1);
			};
		}),
	);
	return <EventFeed key={Feedkey} events={events} />;
}
