import { Image, View } from "react-native";
import Header from "../../components/header";

export default function Index() {
  return (
    <View className="flex-1">
      <Header />
      <View className="flex-1 justify-center items-center mt-6 mx-auto w-4/5">
        <View className="flex-row justify-center items-center">
          <Image
            source={require('../../assets/images/hi.png')}
            style={{ width: 200, height: 200 }}
            alt="hi"
          />
        </View>
      </View>
    </View>
  );
}
