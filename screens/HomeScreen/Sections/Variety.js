import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
import {HomeAssets} from '../../../assets/images/HomeScreenAssets/HomeAssets';
HomeAssets;
const Variety = () => {
  return (
    <View>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={HomeAssets.logoTw}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      {/* About Section */}
      <View style={styles.HeadingContainer}>
        <Text style={styles.heading1}>Wide range of</Text>
        <Text style={styles.heading1}>brands to choose from</Text>
      </View>

      <View style={styles.brandContainer}>
        <View style={styles.arrowContainer}>
          <Image
            source={HomeAssets.leftArrow}
            resizeMode="contain"
            style={styles.arrow}
          />
        </View>

        <View style={styles.brandLogoContainer}>
          <Image
            source={HomeAssets.ceat}
            resizeMode="contain"
            style={styles.brandLogo}
          />
          <Image
            source={HomeAssets.tvseg}
            resizeMode="contain"
            style={styles.brandLogo}
          />
          <Image
            source={HomeAssets.mrf}
            resizeMode="contain"
            style={styles.brandLogo}
          />
          <Image
            source={HomeAssets.placeholder}
            resizeMode="contain"
            style={styles.brandLogo}
          />
        </View>

        <View style={styles.arrowContainer}>
          <Image
            source={HomeAssets.rightArrow}
            resizeMode="contain"
            style={styles.arrow}
          />
        </View>
      </View>
    </View>
  );
};

export default Variety;

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      logo: {
        width: 240,
        height: 130,  
      },
      HeadingContainer: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
      },
      heading1: {
        fontSize: 25,
        fontWeight: '300',
        color: '#000000',
      },
      brandContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      brandLogo: {
        width: 80,
        height: 80,
      },
      arrowContainer: {
        justifyContent: 'center',
      },
      arrow: {
        height: 15,
        width: 15,
      },
      brandLogoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 380
      },
});
