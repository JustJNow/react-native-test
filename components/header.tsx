import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Header: React.FC = () => {
  return (
    <View className="p-3 mb-3 bg-gradient-to-br from-gray-900 to-gray-600 flex flex-col items-center">
      <Text className="mb-2 md:mb-5 text-3xl text-gray-300">
        Penguin Project
      </Text>
      <View className="items-center flex md:flex-row flex-col">
        <Link href="/" asChild>
          <TouchableOpacity className="px-4 rounded-lg">
            <Text className="text-xl text-white">Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/players" asChild>
          <TouchableOpacity className="px-4 rounded-lg">
            <Text className="text-xl text-white">Players</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Header;