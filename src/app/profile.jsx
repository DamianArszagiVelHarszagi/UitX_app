import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const DAYS_HEADER = ["M", "D", "W", "D", "V", "Z", "Z"];

// November 2026 (begint op zondag 1 nov, dus 26-31 okt ervoor)
const CALENDAR_DAYS = [
	{ day: 26, current: false }, { day: 27, current: false }, { day: 28, current: false },
	{ day: 29, current: false }, { day: 30, current: false }, { day: 31, current: false },
	{ day: 1, current: true },
	{ day: 2, current: true }, { day: 3, current: true }, { day: 4, current: true },
	{ day: 5, current: true, hasEvent: true }, { day: 6, current: true }, { day: 7, current: true },
	{ day: 8, current: true },
	{ day: 9, current: true }, { day: 10, current: true }, { day: 11, current: true },
	{ day: 12, current: true }, { day: 13, current: true }, { day: 14, current: true, hasEvent: true },
	{ day: 15, current: true },
	{ day: 16, current: true }, { day: 17, current: true }, { day: 18, current: true },
	{ day: 19, current: true }, { day: 20, current: true }, { day: 21, current: true },
	{ day: 22, current: true },
	{ day: 23, current: true }, { day: 24, current: true }, { day: 25, current: true },
	{ day: 26, current: true }, { day: 27, current: true }, { day: 28, current: true },
	{ day: 29, current: true },
	{ day: 30, current: true }, { day: 1, current: false }, { day: 2, current: false },
	{ day: 3, current: false }, { day: 4, current: false }, { day: 5, current: false },
	{ day: 6, current: false },
];

const MOCK_EVENTS = [
	{
		event_id: "1",
		day: "05",
		month: "NOV",
		title: "Spongebob party",
		city: "Anderlecht",
		time: "19:30",
		is_going: true,
		is_saved: true,
	},
	{
		event_id: "2",
		day: "14",
		month: "NOV",
		title: "Spongebob expo",
		city: "Saint-Gilles",
		time: "16:30",
		is_going: true,
		is_saved: true,
	},
];

export default function ProfileScreen() {
	const [activeTab, setActiveTab] = useState("upcoming");

	const visibleEvents = MOCK_EVENTS.filter((event) =>
		activeTab === "upcoming" ? event.is_going : event.is_saved
	);

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.pageTitle}>Profile</Text>
				<Link href="/settings" asChild>
					<TouchableOpacity style={styles.iconButton}>
						<Ionicons name="settings-outline" size={24} color="#000" />
					</TouchableOpacity>
				</Link>
			</View>

			{/* Avatar & User Info */}
			<View style={styles.profileSection}>
				<View style={styles.avatarWrapper}>
					<View style={styles.avatarPlaceholder} />
					<TouchableOpacity style={styles.editBadge}>
						<Ionicons name="pencil" size={14} color="#000" />
					</TouchableOpacity>
				</View>
				<Text style={styles.userName}>Abdoul Hussein</Text>
				<Text style={styles.userCity}>Molenbeek</Text>
			</View>

			{/* Kalender */}
			<View style={styles.calendarCard}>
				<View style={styles.calendarHeader}>
					<Text style={styles.monthLabel}>November 2026</Text>
					<View style={styles.calendarArrows}>
						<TouchableOpacity style={styles.arrowButton}>
							<Ionicons name="chevron-back" size={18} color="#000" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.arrowButton}>
							<Ionicons name="chevron-forward" size={18} color="#000" />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.weekRow}>
					{DAYS_HEADER.map((day, index) => (
						<Text key={index} style={styles.weekDayText}>
							{day}
						</Text>
					))}
				</View>

				<View style={styles.daysGrid}>
					{CALENDAR_DAYS.map((item, index) => (
						<View key={index} style={styles.dayCell}>
							<View
								style={[
									styles.dayCircle,
									item.hasEvent && styles.dayCircleActive,
								]}
							>
								<Text
									style={[
										styles.dayText,
										!item.current && styles.dayTextMuted,
										item.hasEvent && styles.dayTextActive,
									]}
								>
									{item.day}
								</Text>
							</View>
						</View>
					))}
				</View>
			</View>

			{/* Tabs: Upcoming / Saved */}
			<View style={styles.tabRow}>
				<TouchableOpacity
					style={[styles.tabButton, activeTab === "upcoming" && styles.tabButtonActive]}
					onPress={() => setActiveTab("upcoming")}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === "upcoming" && styles.tabTextActive,
						]}
					>
						Upcoming
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.tabButton, activeTab === "saved" && styles.tabButtonActive]}
					onPress={() => setActiveTab("saved")}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === "saved" && styles.tabTextActive,
						]}
					>
						Saved
					</Text>
				</TouchableOpacity>
			</View>

			{/* Event lijst */}
			<View style={styles.eventList}>
				{visibleEvents.map((event) => (
					<View key={event.event_id} style={styles.eventCard}>
						<View style={styles.dateBox}>
							<Text style={styles.dateDay}>{event.day}</Text>
							<Text style={styles.dateMonth}>{event.month}</Text>
						</View>

						<View style={styles.eventInfo}>
							<Text style={styles.eventTitle}>{event.title}</Text>
							<Text style={styles.eventMeta}>
								{event.city} | {event.time}
							</Text>
						</View>

						{activeTab === "upcoming" && (
							<View style={styles.goingBadge}>
								<Text style={styles.goingText}>✓ Going</Text>
							</View>
						)}
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {

        
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		paddingTop: 60,
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	pageTitle: {
		fontSize: 28,
		fontFamily: "Poppins-Bold",
		color: "#000",
	},
	iconButton: {
		padding: 6,
	},
	profileSection: {
		alignItems: "center",
		marginBottom: 24,
	},
	avatarWrapper: {
		position: "relative",
		marginBottom: 12,
	},
	avatarPlaceholder: {
		width: 96,
		height: 96,
		borderRadius: 48,
		backgroundColor: "#D9D9D9",
	},
	editBadge: {
		position: "absolute",
		bottom: 0,
		right: 0,
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#fff",
		borderWidth: 1.5,
		borderColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	userName: {
		fontSize: 20,
		fontFamily: "Poppins-Bold",
		color: "#000",
	},
	userCity: {
		fontSize: 14,
		fontFamily: "Poppins-Regular",
		color: "#666",
	},
	calendarCard: {
		borderWidth: 1,
		borderColor: "#E5E5E5",
		borderRadius: 16,
		padding: 16,
		marginBottom: 24,
	},
	calendarHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 14,
	},
	monthLabel: {
		fontSize: 16,
		fontFamily: "Poppins-Bold",
		color: "#000",
	},
	calendarArrows: {
		flexDirection: "row",
		gap: 12,
	},
	arrowButton: {
		padding: 4,
	},
	weekRow: {
		flexDirection: "row",
		marginBottom: 8,
	},
	weekDayText: {
		flex: 1,
		textAlign: "center",
		fontSize: 12,
		fontFamily: "Poppins-Bold",
		color: "#888",
	},
	daysGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	dayCell: {
		width: "14.28%",
		alignItems: "center",
		marginVertical: 4,
	},
	dayCircle: {
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	dayCircleActive: {
		backgroundColor: "#000",
	},
	dayText: {
		fontSize: 13,
		fontFamily: "Poppins-Regular",
		color: "#000",
	},
	dayTextMuted: {
		color: "#C4C4C4",
	},
	dayTextActive: {
		color: "#fff",
		fontFamily: "Poppins-Bold",
	},
	tabRow: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: "#E5E5E5",
		marginBottom: 16,
	},
	tabButton: {
		flex: 1,
		paddingVertical: 10,
		alignItems: "center",
		borderBottomWidth: 2,
		borderBottomColor: "transparent",
	},
	tabButtonActive: {
		borderBottomColor: "#000",
	},
	tabText: {
		fontSize: 15,
		fontFamily: "Poppins-Regular",
		color: "#888",
	},
	tabTextActive: {
		fontFamily: "Poppins-Bold",
		color: "#000",
	},
	eventList: {
		gap: 12,
	},
	eventCard: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E5E5E5",
		borderRadius: 14,
		padding: 12,
		gap: 12,
	},
	dateBox: {
		width: 48,
		height: 48,
		borderRadius: 10,
		backgroundColor: "#F3F3F3",
		alignItems: "center",
		justifyContent: "center",
	},
	dateDay: {
		fontSize: 16,
		fontFamily: "Poppins-Bold",
		color: "#000",
		lineHeight: 18,
	},
	dateMonth: {
		fontSize: 11,
		fontFamily: "Poppins-Regular",
		color: "#555",
	},
	eventInfo: {
		flex: 1,
	},
	eventTitle: {
		fontSize: 15,
		fontFamily: "Poppins-Bold",
		color: "#000",
	},
	eventMeta: {
		fontSize: 13,
		fontFamily: "Poppins-Regular",
		color: "#666",
	},
	goingBadge: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 20,
		backgroundColor: "#F0F0F0",
	},
	goingText: {
		fontSize: 12,
		fontFamily: "Poppins-Bold",
		color: "#000",
	},
});