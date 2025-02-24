import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Diary } from "./diary";
import { DiaryDetail } from "./diaryDetail";
import { Text } from "react-native";

export type DiaryStackParamList = {
  Diary: undefined;
  DiaryDetail: { date: string };
};

const Stack = createNativeStackNavigator<DiaryStackParamList>();

export function DiaryStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: "", headerBackButtonMenuEnabled: true }}
    >
      <Stack.Screen
        name="Diary"
        component={Diary}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DiaryDetail"
        component={DiaryDetail}
        options={{
          headerTitle: "나의 긍정일기",
        }}
      />
    </Stack.Navigator>
  );
}
