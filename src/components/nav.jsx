import { Link } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Navbar() {
	const insets = useSafeAreaInsets();

	return (
		<View style={[styles.container]}>
			<View style={[styles.nav]}>
				<Link href={"/"} style={styles.link}>
					Home
				</Link>
				<Link href={"/browse"} style={styles.link}>
					Browse
				</Link>
				<Link href={"/map"} style={styles.link}>
					Map
				</Link>
				<Link href={"/friends"} style={styles.link}>
					Friends
				</Link>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {},
	nav: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#1EFF00",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
	},
	link: {
		fontSize: 18,
	},
});
