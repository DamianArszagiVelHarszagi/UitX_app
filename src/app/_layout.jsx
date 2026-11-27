import Navbar from "@/components/nav";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router/js-tabs";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	const [loaded, error] = useFonts({
		"Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
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
			<Tabs.Screen name="profile" options={{ title: "Profile" }} />
		</Tabs>
	);
}
