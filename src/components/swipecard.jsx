import { useEffect, useRef } from "react";
import { Animated, PanResponder, StyleSheet, Text } from "react-native";

export default function SwipeCard({ event, onSwipe }) {
	const swipe = useRef(new Animated.ValueXY()).current;

	const onSwipeRef = useRef(onSwipe);
	useEffect(() => {
		onSwipeRef.current = onSwipe;
	}, [onSwipe]);

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (_, g) =>
				Math.abs(g.dx) > Math.abs(g.dy) && Math.abs(g.dx) > 10,
			onPanResponderMove: (_, g) => swipe.setValue({ x: g.dx, y: 0 }),
			onPanResponderRelease: (_, g) => {
				const direction = Math.sign(g.dx);
				if (Math.abs(g.dx) > 100) {
					Animated.timing(swipe, {
						toValue: { x: direction * 500, y: 0 },
						duration: 300,
						useNativeDriver: true,
					}).start(() => onSwipeRef.current(direction > 0 ? "ja" : "nee"));
					return;
				}
				Animated.spring(swipe, {
					toValue: { x: 0, y: 0 },
					friction: 5,
					useNativeDriver: true,
				}).start();
			},
		}),
	).current;

	const rotate = swipe.x.interpolate({
		inputRange: [-100, 0, 100],
		outputRange: ["-10deg", "0deg", "10deg"],
	});

	return (
		<Animated.View
			style={[
				styles.card,
				{ transform: [{ translateX: swipe.x }, { rotate }] },
			]}
			{...panResponder.panHandlers}
		>
			<Text>{event.title}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: 350,
		height: 550,
		marginTop: 100,
		backgroundColor: "#ddd",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
});
