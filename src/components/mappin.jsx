import { StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function MapPin() {
	return (
		<Image
			source={require("@/assets/icons/map_pin_event.svg")}
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
