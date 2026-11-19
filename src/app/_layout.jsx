import { Tabs } from "expo-router/js-tabs";
import Navbar from "@/components/nav";

export default function AppLayout() {
	return (
		<Tabs tabBar={() => <Navbar />}>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="browse" options={{ title: "Browse" }} />
			<Tabs.Screen name="map" options={{ title: "Map" }} />
			<Tabs.Screen name="friends" options={{ title: "Friends" }} />
		</Tabs>
	);
}
