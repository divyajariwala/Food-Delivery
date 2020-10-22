import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TouchableItem from '../../components/TouchableItem';
import Colors from '../../theme/colors';
import Icons from 'react-native-vector-icons/Ionicons';
import { StackActions } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontFamily from '../../theme/FontFamily';

export default class ActivationSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {/* <Icons name="close" size={24} style={{position: 'absolute',right:'2%',top:'5%'}} /> */}
        <View
          style={{
            position: 'absolute',
            right: '5%',
            top: '6%',
            backgroundColor: 'rgb(239,239,239)',
            alignItems: 'center',
            width: 28,
            height: 28,
            borderRadius: 14,
            justifyContent: 'center',
          }}>
          <Icons
            onPress={() => this.props.navigation.navigate('HomeNavigator')}
            name={Platform.OS === 'android' ? 'md-close' : 'ios-close'}
            size={24}
          />
        </View>

        <Text style={{ fontSize: hp(3.6), fontFamily: FontFamily.Bold, color: '#333f4b' }}>
          Congratulations!
        </Text>
        <Text style={{ fontSize: hp(3.2), marginTop: '5%', color: '#333f4b', fontFamily: FontFamily.Regular }}>
          Your account has been activated.
        </Text>
        <Text style={{ fontSize: hp(3.2), color: '#333f4b', fontFamily: FontFamily.Regular }}>
          Please check your email for details.
        </Text>
        <TouchableItem
          onPress={() => this.props.navigation.navigate('SignIn')}
          style={{
            width: '55%',
            marginTop: '25%',
            backgroundColor: Colors.primaryColor,
            padding: 15,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: hp(2.5),
              textAlign: 'center',
              letterSpacing: 0.5,
              fontFamily: FontFamily.SemiBold
            }}>
            Log In to MenuDrive
          </Text>
        </TouchableItem>
      </View>
    );
  }
}
