import { ScrollView, Text, View } from 'react-native';
import { User } from '../../types';

type Props = {
  users: User[]
}

const UserOverview: React.FC<Props> = ({ users }: Props) => {
  return (
    <View className="mt-5 w-full items-center">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="min-w-full">
          {/* Table Header */}
          <View className="flex-row bg-gray-100 border-b border-gray-300">
            <View className="flex-1 px-6 py-3">
              <Text className="font-semibold text-left">Name</Text>
            </View>
            <View className="flex-1 px-6 py-3">
              <Text className="font-semibold text-left">Age</Text>
            </View>
          </View>
          
          {/* Table Body */}
          {users && users.length > 0 && users.map((user, index) => (
            <View 
              key={index} 
              className={`flex-row border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <View className="flex-1 px-6 py-3">
                <Text className="text-sm">{user.name}</Text>
              </View>
              <View className="flex-1 px-6 py-3">
                <Text className="text-sm">{user.age}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserOverview;