import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

export const headerHeight = 110;

export default function Header() {
	return (
		<SafeAreaView style={styles.header} edges={["top"]}>
			<View style={styles.row}>
				<Text style={styles.logo}>UitX</Text>
				<View style={styles.profile}>
					<Image
						source={require("@/assets/icons/profile_white.svg")}
						style={styles.profileIcon}
						contentFit="contain"
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
	},
	row: {
		height: headerHeight,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	logo: {
		fontFamily: "Reservation-Wide",
		fontSize: 100,
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
