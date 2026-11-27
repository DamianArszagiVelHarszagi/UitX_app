import { useEffect, useRef } from "react";
import { Animated, PanResponder, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SwipeCard({ event, onSwipe }) {
	const swipe = useRef(new Animated.ValueXY()).current;

	const onSwipeRef = useRef(onSwipe);
	useEffect(() => {
		onSwipeRef.current = onSwipe;
	}, [onSwipe]);

	function springBack() {
		Animated.spring(swipe, {
			toValue: { x: 0, y: 0 },
			friction: 5,
			useNativeDriver: true,
		}).start();
	}
	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (_, g) =>
				Math.abs(g.dx) > Math.abs(g.dy) && Math.abs(g.dx) > 10,
			onPanResponderMove: (_, g) => swipe.setValue({ x: g.dx, y: 0 }),
			onPanResponderTerminationRequest: () => false,
			onPanResponderTerminate: () => springBack(),
			onPanResponderRelease: (_, g) => {
				const direction = Math.sign(g.dx);
				if (Math.abs(g.dx) > 100) {
					Animated.timing(swipe, {
						toValue: { x: direction * 500, y: 0 },
						duration: 300,
						useNativeDriver: true,
					}).start(() => onSwipeRef.current(direction > 0 ? "join" : "save"));
					return;
				}
				springBack();
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
			<LinearGradient
				colors={["transparent", "#340C7F"]}
				locations={[0.1, 0.7]}
				style={StyleSheet.absoluteFill}
			/>
			<Text>{event.title}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "100%",
		maxWidth: 450,
		flex: 1,
		backgroundColor: "#ddd",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
		boxShadow: "0 0 30px 5px rgba(255, 255, 255, 0.5)",
	},
});
