import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useLogin } from "../../store/authStore";

import MainText from "../mainText";

export function Logout() {
  const logout = useLogin((state) => state.setIsLogin);
  const onPressLogout = () => {
    Alert.alert("로그아웃", "로그아웃 하시나요?", [
      {
        text: "넹",
        onPress: () => {
          Alert.alert("로그아웃", "로그아웃 되었습니다.\n다음에 또 만나요!");
          logout();
        },
        style: "default",
      },
      {
        text: "아니오",
        style: "cancel",
      },
    ]);
  };
  return (
    <Pressable style={styles.container} onPress={onPressLogout}>
      <MaterialIcons name="logout" size={30} color="black" />
      <MainText style={styles.text}>로그아웃</MainText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  text: {
    fontSize: 17,
  },
});
