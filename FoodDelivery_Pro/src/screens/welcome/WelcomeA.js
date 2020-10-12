/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View,Text } from 'react-native';

// import components
import Button from '../../components/buttons/Button';
import LinkButton from '../../components/buttons/LinkButton';
import Logo from '../../components/logo/Logo';

//import responsive screen
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import colors
import Colors from '../../theme/colors';

// WelcomeA Config

// WelcomeA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsGroup: {
    flex: 3,
    alignItems: 'center',
    paddingHorizontal: hp(6),
    width: '100%',
  },
  vspace16: {
    height: hp(3),
  },
  vspace32: {
    height: hp(3),
  },
  linkButtonText: {
    color: Colors.onSurface,
    textAlign: 'center',
  },
  companyName :{
    fontSize:hp(5),
    fontWeight:'700',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:hp(1.2),
    color:"#333F4B",
  },
});

// WelcomeA Screen
export default class WelcomeA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.logoContainer}>
          <Logo size={50} />
          <Text style={styles.companyName}>
            MD Deliver
          </Text>
        </View>

        <View style={styles.buttonsGroup}>
          <Button
            onPress={this.navigateTo('SignUp')}
            title={'I am new'.toUpperCase()}
          />

          <View style={styles.vspace16} />

          <Button
            onPress={this.navigateTo('SignIn')}
            title={'I have been here'.toUpperCase()}
            outlined
          />

          <View style={styles.vspace32} />

          <LinkButton
            onPress={this.navigateTo('HomeNavigator')}
            title="SKIP"
            titleStyle={styles.linkButtonText}
          />
        </View>
      </SafeAreaView>
    );
  }
}
