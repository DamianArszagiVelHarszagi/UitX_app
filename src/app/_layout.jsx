import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Tabs } from "expo-router/js-tabs";
import Navbar from "@/components/nav";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	const [loaded] = useFonts({
		"Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Black": require("@/assets/fonts/Poppins-Black.ttf"),
		"Reservation-Wide": require("@/assets/fonts/Reservation-Wide-Bold.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hide();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Tabs
			tabBar={() => <Navbar />}
			screenOptions={{
				sceneStyle: { backgroundColor: "white" },
				headerShown: false,
			}}
		>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="browse" options={{ title: "Browse" }} />
			<Tabs.Screen name="map" options={{ title: "Map" }} />
			<Tabs.Screen name="friends" options={{ title: "Friends" }} />
		</Tabs>
	);
}
