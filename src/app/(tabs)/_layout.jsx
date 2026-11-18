import { Tabs } from "expo-router/js-tabs";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarIconStyle: { display: "none" },
			}}
		>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="list" options={{ title: "Browse" }} />
			<Tabs.Screen name="map" options={{ title: "Map" }} />
			<Tabs.Screen name="friends" options={{ title: "Friends" }} />
		</Tabs>
	);
}
