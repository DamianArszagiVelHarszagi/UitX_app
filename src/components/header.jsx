import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Header() {
	return (
		<View style={styles.header}>
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
		fontFamily: "Reservation-Wide",
		fontSize: 64,
		color: "#1EFF00",
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
