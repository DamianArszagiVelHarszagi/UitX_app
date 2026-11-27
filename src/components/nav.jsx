import { Link, usePathname } from "expo-router";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";

export const navHeight = 135;
const tabs = [
	{
		href: "/",
		label: "Home",
		greenIcon: require("@/assets/icons/home_green.svg"),
		whiteIcon: require("@/assets/icons/home_white.svg"),
	},
	{
		href: "/browse",
		label: "Browse",
		greenIcon: require("@/assets/icons/browse_green.svg"),
		whiteIcon: require("@/assets/icons/browse_white.svg"),
	},
	{
		href: "/map",
		label: "Map",
		greenIcon: require("@/assets/icons/map_green.svg"),
		whiteIcon: require("@/assets/icons/map_white.svg"),
	},
	{
		href: "/friends",
		label: "Friends",
		greenIcon: require("@/assets/icons/friends_green.svg"),
		whiteIcon: require("@/assets/icons/friends_white.svg"),
	},
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<View style={styles.nav}>
			{tabs.map((tab) => {
				const isActive = pathname === tab.href;

				return (
					<Link key={tab.href} href={tab.href} asChild>
						<Pressable style={isActive ? styles.activeTab : styles.tab}>
							<Image
								source={isActive ? tab.greenIcon : tab.whiteIcon}
								style={styles.icon}
								contentFit="contain"
							/>
							{isActive && <Text style={styles.label}>{tab.label}</Text>}
						</Pressable>
					</Link>
				);
			})}
		</View>
	);
}
const styles = StyleSheet.create({
	nav: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: navHeight,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
		backgroundColor: "#40404A",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	tab: {
		width: 55,
		height: 55,
		borderRadius: 28,
		backgroundColor: "#1EFF00",
		alignItems: "center",
		justifyContent: "center",
	},
	activeTab: {
		height: 48,
		paddingHorizontal: 20,
		borderRadius: 30,
		borderWidth: 1.5,
		borderColor: "#1EFF00",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
	},
	icon: {
		width: 24,
		height: 24,
	},
	label: {
		color: "#1EFF00",
		fontFamily: "Poppins-Regular",
		fontSize: 18,
	},
});
