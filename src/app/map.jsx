import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { events } from "@/data/events";
import MapPin from "@/components/mappin";

export default function MapScreen() {
	return (
		<MapView
			style={styles.map}
			userInterfaceStyle="dark"
			initialRegion={{
				latitude: 50.8503,
				longitude: 4.3517,
				latitudeDelta: 0.03,
				longitudeDelta: 0.03,
			}}
		>
			{events.map((event) => (
				<Marker key={event.id} coordinate={event.coordinate}>
					<MapPin />
				</Marker>
			))}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
