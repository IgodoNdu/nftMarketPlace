import { useState } from 'react';
//for text rendering
import { View, SafeAreaView, FlatList, Text } from 'react-native';

//Import Components
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

//importing our local assets for use
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar background={COLORS.primary} />
          
          <View style={{ flex: 1 }}>
            {/** View (div) to contain all the NFT list */}
            <View style={{ zIndex: 0 }}>
              <FlatList data={NFTData} renderItem={({ item }) => <Text>{item.name}</Text>} 
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader />} />
            </View>

            {/** View cover displayed behind the NFT list */}
            <View style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}>
              <View style={{ height: 300, backgroundColor: COLORS.primary }} />
              <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>

          </View>
      </SafeAreaView>
  )
}

export default Home;
