/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from 'react';
import {
  I18nManager,
  ImageBackground,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from 'color';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

// import components
import Avatar from '../../components/avatar/Avatar';
import GradientContainer from '../../components/gradientcontainer/GradientContainer';
import {
  Caption,
  Heading5,
  Subtitle1,
  Subtitle2,
} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';
import FontFamily from '../../theme/FontFamily';

//import responsive screen
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

// AboutUsA Config
const isRTL = I18nManager.isRTL;
const FACEBOOK_ICON = 'facebook';
const INSTAGRAM_ICON = 'instagram';
const YELP_ICON = 'yelp';
const OVERLAY_COLOR = 'rgba(185, 0, 57, 0.4)';
const AVATAR_SIZE = hp(8.5);

// AboutUsA Styles
const styles = StyleSheet.create({
  pb6: { paddingBottom: 6 },
  pl8: { paddingLeft: 8 },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: hp(2.2),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  swiperContainer: {
    width: '100%',
    height: hp(35),
    backgroundColor: Colors.AboutUsColor
  },
  paginationStyle: {
    bottom: hp(2),
    transform: [{ scaleX: isRTL ? -1 : 1 }],
  },
  dot: { backgroundColor: Color(Colors.white).alpha(0.48) },
  activeDot: { backgroundColor: Colors.white },
  bgImg: {
    flex: 1,
    resizeMode: 'cover',
  },
  swiperContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: hp(3),
  },
  swiperContent2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: hp(3),
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: AVATAR_SIZE + 2,
    height: AVATAR_SIZE + 2,
    borderRadius: (AVATAR_SIZE + 4) / 2,
    // backgroundColor: Colors.white,
  },
  info: {
    // fontWeight: '700',
    fontFamily: FontFamily.SemiBold,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    textAlign: 'left',
    fontSize: hp(2.4),
  },
  info1: {
    fontFamily: FontFamily.SemiBold,
  },
  infoText: {
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    textAlign: 'left',
    fontSize: hp(2.4),
    fontFamily: FontFamily.Regular

  },
  caption: {
    color: Color(Colors.white).alpha(0.87),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    textAlign: 'left',
    fontFamily: FontFamily.Regular
  },
  description: {
    maxWidth: '82%',
  },
  phone: {
    marginTop: 8,
    color: '#003f5f',
    fontFamily:FontFamily.SemiBold
  },
  social: {
    flexDirection: 'row',
    marginTop: 8,
    fontWeight: '500',
    marginBottom: 20,
  },
  socialButton: {
    margin: 8,
    borderRadius: 22,
    backgroundColor: Colors.primaryColor,
  },
  socialIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
  },
  footer: {
    width: '100%',
    backgroundColor: Colors.background,
  },
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(8.5),
  },
  footerButtonText: {
    fontWeight: '500',
    color: Colors.orangeLight,
  },
});

// AboutUsA
export default class AboutUsA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  callPhone = () => {
    Linking.openURL(`tel:${1601234567}`);
  };

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.content}>
          <View style={styles.swiperContainer}>
            <Swiper
              loop={false}
              index={isRTL ? 2 : 0} // number of slides - 1
              paginationStyle={styles.paginationStyle}
              activeDotStyle={styles.activeDot}
              dotStyle={styles.dot}>
              {/* <ImageBackground
                source={require('../../assets/img/about_1.jpg')}
                style={styles.bgImg}>
                <GradientContainer
                  colors={
                    isRTL
                      ? ['transparent', OVERLAY_COLOR]
                      : [OVERLAY_COLOR, 'transparent']
                  }
                  start={isRTL ? { x: 0, y: 0 } : { x: 0.1, y: 0 }}
                  end={isRTL ? { x: 0.4, y: 0 } : { x: 1, y: 0 }}
                  containerStyle={styles.swiperContent}> */}
              <View style={styles.swiperContent}>
                <View style={styles.row}>
                  <View style={styles.avatarWrapper}>
                    <Avatar
                      imageUri={require('../../assets/img/logo1.png')}
                      size={AVATAR_SIZE}
                    // rounded
                    />
                  </View>
                  <View style={styles.pl8}>
                    <Subtitle1 style={[styles.info,]}>
                      MD Deliver
                      </Subtitle1>
                    <Caption style={styles.caption}>Food Delivery Service</Caption>
                  </View>
                </View>

                <View style={styles.description}>
                  <Subtitle2 style={styles.infoText}>
                    It's the easiest way to order the food you
                    want, when you want it, wherever you are
                    from Restaurants that use Menudrive to run
                    their online orders.
                    </Subtitle2>
                </View>
              </View>
              {/* </GradientContainer>
              </ImageBackground> */}


              {/* <ImageBackground
                source={require('../../assets/img/about_2.jpg')}
                style={styles.bgImg}>
                <GradientContainer
                  colors={
                    isRTL
                      ? ['transparent', OVERLAY_COLOR]
                      : [OVERLAY_COLOR, 'transparent']
                  }
                  start={isRTL ? { x: 0, y: 0 } : { x: 0.1, y: 0 }}
                  end={isRTL ? { x: 0.4, y: 0 } : { x: 1, y: 0 }}
                  containerStyle={styles.swiperContent}> */}

              <View style={styles.swiperContent2}>
                <View style={styles.description}>
                  <Subtitle1 style={styles.infoText}>
                    Our street-style food is bold, imaginative, and
                    deliciously messy. We use locally sourced ingedients, and
                    offer vegan-friendly dishes.
                    </Subtitle1>
                </View>
              </View>
              {/* </GradientContainer>
              </ImageBackground> */}

              {/* <ImageBackground
                source={require('../../assets/img/about_3.jpg')}
                style={styles.bgImg}>
                <GradientContainer
                  colors={
                    isRTL
                      ? ['transparent', OVERLAY_COLOR]
                      : [OVERLAY_COLOR, 'transparent']
                  }
                  start={isRTL ? { x: 0, y: 0 } : { x: 0.1, y: 0 }}
                  end={isRTL ? { x: 0.4, y: 0 } : { x: 1, y: 0 }}
                  containerStyle={styles.swiperContent}> */}
              <View style={styles.swiperContent2}>
                <View style={styles.row}>
                  <View>
                    <Caption style={[styles.caption, styles.pb6]}>
                      ADDRESS
                      </Caption>
                    <Subtitle1 style={[styles.info, styles.infoText]}>
                      384 K Las Vegas Blvd,
                      </Subtitle1>
                    <Subtitle1 style={[styles.info, styles.infoText]}>
                      Las Vegas, MS 85701
                      </Subtitle1>
                  </View>
                </View>
                <View style={styles.description}>
                  <Subtitle1 style={styles.infoText}>
                    We are not just a team, we are family. Visit us.
                    </Subtitle1>
                </View>
              </View>
              {/* </GradientContainer>
              </ImageBackground> */}
            </Swiper>
          </View>

          <View style={styles.center}>
            <Subtitle2 style={[styles.info1, { color: Colors.orangeLight }]}>CALL US</Subtitle2>
            <Heading5 style={styles.phone} onPress={this.callPhone}>
              877-787-6368
            </Heading5>
          </View>

          <View style={styles.center}>
            <Subtitle2 style={[styles.info1, { color: Colors.orangeLight, }]}>FOLLOW US</Subtitle2>
            <View style={styles.social}>
              <View style={styles.socialButton}>
                <TouchableItem rippleColor={Colors.white} borderless>
                  <View style={styles.socialIconContainer}>
                    <FAIcon
                      name={FACEBOOK_ICON}
                      size={20}
                      color={Colors.white}
                    />
                  </View>
                </TouchableItem>
              </View>

              <View style={styles.socialButton}>
                <TouchableItem rippleColor={Colors.white} borderless>
                  <View style={styles.socialIconContainer}>
                    <FAIcon
                      name={INSTAGRAM_ICON}
                      size={22}
                      color={Colors.white}
                    />
                  </View>
                </TouchableItem>
              </View>

              <View style={styles.socialButton}>
                <TouchableItem rippleColor={Colors.white} borderless>
                  <View style={styles.socialIconContainer}>
                    <FAIcon name={YELP_ICON} size={21} color={Colors.white} />
                  </View>
                </TouchableItem>
              </View>
            </View>
          </View>
        </View>

        <TouchableItem style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp(4) }}>
          <Text style={{ color: Colors.orangeLight, fontSize: hp(2.5),fontFamily:FontFamily.Regular }}>www.menudrive.com</Text>
        </TouchableItem>
      </SafeAreaView>
    );
  }
}
