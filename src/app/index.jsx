import { events } from "@/data/events";
import EventFeed from "@/components/eventfeed";

export default function HomeScreen() {
	return <EventFeed events={events} />;
}
