import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {
  const router = useRouter();
  const togglehasfinishedOnboarding = useUserStore(
    (state) => state.toggleHasFinishedOnboarding
  );
  const handlePress = () => {
    togglehasfinishedOnboarding();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Welcome to Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>

      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  heading: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
