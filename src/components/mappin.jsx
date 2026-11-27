import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function MapPin() {
	return (
		<Image
			source={require("@/assets/icons/pin_green.svg")}
			style={styles.pin}
			contentFit="contain"
		/>
	);
}

const styles = StyleSheet.create({
	pin: {
		width: 32,
		height: 45,
	},
});
