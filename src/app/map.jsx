import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen() {
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: 50.8503,
				longitude: 4.3517,
				latitudeDelta: 0.03,
				longitudeDelta: 0.03,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
