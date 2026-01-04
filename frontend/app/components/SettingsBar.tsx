import React from "react";
import { View, useWindowDimensions,TouchableOpacity,Linking,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const BAR_BG = "#000000ff";
const CONTENT_MAX_W = 480;

export default function SettingsBar() {
  const { width } = useWindowDimensions();
  const REPO_URL      = "https://github.com/europanite/dummy_page";
  const REPO_URL_PAGE = "https://europanite.github.io/dummy_page/";
  
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: BAR_BG }}>
      <StatusBar style="dark" backgroundColor={BAR_BG} />
      <View style={{ backgroundColor: BAR_BG, paddingHorizontal: 12, paddingVertical: 10 }}>
        <View style={{ alignItems: "center" }}>
          <View
              style={{
                alignSelf: "center",
                width: "100%",
                paddingHorizontal: 12,
                paddingVertical: 10,
                gap: 8,
              }}
          >
            <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "800",
                  marginBottom: 12,
                  color: "#fff",
                  textDecorationLine: "underline",
                }}
              >
                Dummy Page
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
