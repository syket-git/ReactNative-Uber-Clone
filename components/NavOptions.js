import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

function NavOptions() {
  const data = [
    {
      id: '1',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '2',
      title: 'Order food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen',
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40 text-center`}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                source={{
                  uri: item?.image,
                }}
              />
              <Text style={tw`mt-2 text-center text-lg font-semibold`}>
                {item?.title}
              </Text>
              <Icon
                style={tw`bg-black mx-auto w-10 p-2  mt-4 rounded-full`}
                name="arrowright"
                type="antdesign"
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default NavOptions;
