import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Navbar() {
	return (
		<View style={[styles.container]}>
			<View style={[styles.nav]}>
				<Link href={"/"} style={styles.linkHome}>
					Home
				</Link>
				<Link href={"/browse"} style={styles.linkBrowse}>
					Browse
				</Link>
				<Link href={"/map"} style={styles.linkMap}>
					Map
				</Link>
				<Link href={"/friends"} style={styles.linkFriends}>
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
	linkHome: {
		fontSize: 15,
		fontFamily: "Poppins-Regular",
		padding: 10,
		borderRadius: 30,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
