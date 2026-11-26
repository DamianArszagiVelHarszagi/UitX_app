import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Header() {
	return (
		<View style={StyleSheet.header}>
			<Text style={styles.logo}>UitX</Text>
			<View style={styles.profile}>
				<Image
					source={require("@/assets/icons/profile_white.svg")}
					style={styles.profileIcon}
					contentFit="contain"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingVertical: 12,
	},
	logo: {
		width: 200,
		height: 65,
	},
	profile: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#1EFF00",
		alignItems: "center",
		justifyContent: "center",
	},
	profileIcon: {
		width: 20,
		height: 20,
	},
});
