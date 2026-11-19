import { Link } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Navbar() {
	const insets = useSafeAreaInsets();

	return (
		<View style={[styles.nav, { paddingBottom: insets.bottom }]}>
			<Link href={"/"}>Home</Link>
			<Link href={"/browse"}>Browse</Link>
			<Link href={"/map"}>Map</Link>
			<Link href={"/friends"}>Friends</Link>
		</View>
	);
}
const styles = StyleSheet.create({
	nav: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
