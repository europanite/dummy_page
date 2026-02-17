import React, { useEffect, useMemo, useRef, useState } from "react";
import { 
  View, 
  Text, 
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
          style={{
            alignSelf: "center",
            width: "100%",
            padding: 12,
            gap: 8,
          }}
      >
        <Text>This Dummy Page can be used for everyone, anypurpose.</Text>
      </View>
    </View>

  );
}
















