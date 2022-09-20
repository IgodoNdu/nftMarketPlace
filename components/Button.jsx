import { Text, View, Image, TouchableOpacity } from 'react-native'
//import for styling
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
      <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>

        <Image source={imgUrl} resizeMode='contain' style={{ widt: 24, height: 24 }} />

      </TouchableOpacity>
    )
}

export const RectButton = () => {
    return (
      <View>
        <Text> Button </Text>
      </View>
    )

}


