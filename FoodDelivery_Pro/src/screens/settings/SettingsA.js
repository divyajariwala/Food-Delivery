/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from 'react';
import {
  Alert,
  I18nManager,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  View,
} from 'react-native';

// import components
import Avatar from '../../components/avatar/Avatar';
import Divider from '../../components/divider/Divider';
import Icon from '../../components/icon/Icon';
import { Heading6, Subtitle1, Subtitle2 } from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// import colors
import Colors from '../../theme/colors';
import Iconss from "react-native-vector-icons/FontAwesome";
import FontFamily from '../../theme/FontFamily';

// SettingsA Config
const isRTL = I18nManager.isRTL;
const IOS = Platform.OS === 'ios';
const DIVIDER_MARGIN_LEFT = 60;
const ARROW_ICON = 'ios-arrow-forward';
const ADDRESS_ICON = IOS ? 'ios-pin' : 'md-pin';
const NOTIFICATION_OFF_ICON = IOS
  ? 'ios-notifications-off'
  : 'md-notifications-off';
const NOTIFICATION_ICON = IOS ? 'ios-notifications' : 'md-notifications';
const PAYMENT_ICON = IOS ? 'ios-card' : 'md-card';
const ORDERS_ICON = IOS ? 'ios-list' : 'md-list';
const TERMS_ICON = IOS ? 'ios-paper' : 'md-paper';
const DOLLAR_ICON = IOS ? 'dollar' : 'dollar';
const ABOUT_ICON = IOS
  ? 'ios-information-circle-outline'
  : 'md-information-circle-outline';
const LOGOUT_ICON = IOS ? 'ios-log-out' : 'md-log-out';

// SettingsA Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 24,
    fontWeight: '300',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileContainer: {
    paddingVertical: 16,
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileInfo: {
    paddingLeft: 16,
  },
  name: {
    // fontWeight: '500',
    textAlign: 'left',
    color: '#333f4b',
    fontFamily: FontFamily.SemiBold
  },
  email: {
    paddingVertical: 2,
    color: '#333f4b',
    fontFamily: FontFamily.Regular
  },
  mediumText: {
    //fontWeight: '500',
    color: '#333f4b',
    fontFamily: FontFamily.SemiBold
  },
  setting: {
    height: 56,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width: 28,
    height: 28,
  },
  extraDataContainer: {
    top: -8,
    marginLeft: DIVIDER_MARGIN_LEFT,
    paddingBottom: 8,
  },
  extraData: {
    textAlign: 'left',
    color: '#333f4b',
    fontFamily: FontFamily.Regular

  },
  extraData1: {
    textAlign: 'left',
    color: '#333f4b',
    fontFamily: FontFamily.Regular
  },
  logout: { color: Colors.secondaryColor },
});

// SettingsA Props
type Props = {
  icon: string,
  title: String,
  onPress: () => {},
  extraData: React.Node,
};

const IconSet = ({ icon, title }: Props) => {

  if (title === 'My Orders') {
    return (<Icons name={'format-list-bulleted'} size={24} color={Colors.orangeLight} />)
  } else if (title === 'Add Your Restaurant') {
    return (<Iconss name={icon} size={24} color={Colors.orangeLight} />)
  }
  else {
    return (<Icon name={icon} size={24} color={Colors.orangeLight} />)
  }
}

// SettingsA Components
const Setting = ({ icon, title, onPress, extraData }: Props) => (
  <TouchableItem onPress={onPress}>
    <View>
      <View style={[styles.row, styles.setting]}>
        <View style={styles.leftSide}>
          {icon !== undefined && (
            <View style={styles.iconContainer}>
              <IconSet icon={icon} title={title} />
              {/* {title === 'My Orders' ? (<Icons name={'format-list-bulleted'} size={24} color={Colors.orangeLight} />): (<Icon name={icon} size={24} color={Colors.orangeLight}  />) } */}
            </View>
          )}
          <Subtitle1 style={styles.mediumText}>{title}</Subtitle1>
        </View>

        <View style={isRTL && { transform: [{ scaleX: -1 }] }}>
          <Icon name={ARROW_ICON} size={18} color="rgba(0, 0, 0, 0.50)" />
        </View>
      </View>

      {extraData ? (
        <View style={styles.extraDataContainer}>{extraData}</View>
      ) : (
          <View />
        )}
    </View>
  </TouchableItem>
);

// SetingsA
export default class SettingsA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsOn: true,
    };
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  toggleNotifications = value => {
    this.setState({
      notificationsOn: value,
    });
  };

  logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        { text: 'OK', onPress: () => { } },
      ],
      { cancelable: false },
    );
  };

  render() {
    const { notificationsOn } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.titleContainer}>
            <Heading6 style={styles.titleText}>Settings</Heading6>
          </View>

          <TouchableItem useForeground onPress={this.navigateTo('EditProfile')}>
            <View style={[styles.row, styles.profileContainer]}>
              <View style={styles.leftSide}>
                <Avatar
                  imageUri={require('../../assets/img/profile_1.jpeg')}
                  rounded
                  size={60}
                />
                <View style={styles.profileInfo}>
                  <Subtitle1 style={styles.name}>Kristin Evans</Subtitle1>
                  <Subtitle2 style={styles.email}>
                    kristin.evans@gmail.com
                  </Subtitle2>
                </View>
              </View>
            </View>
          </TouchableItem>

          <Divider />

          <Setting
            onPress={this.navigateTo('DeliveryAddress')}
            icon={ADDRESS_ICON}
            title="Delivery Address"
            extraData={
              <View>
                <Subtitle2 style={styles.extraData}>
                  1600 Pennsylvania Avenue
                </Subtitle2>
                <Subtitle2 style={styles.extraData}>
                  {"\t\t\t"}Washington DC, USA
                </Subtitle2>
              </View>
            }
          />
          <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} />

          <Setting
            onPress={this.navigateTo('PaymentMethod')}
            icon={PAYMENT_ICON}
            title="Payment Method"
            extraData={
              <View>
                <Subtitle2 style={styles.extraData}>Visa MasterCard</Subtitle2>
                <Subtitle2 style={styles.extraData}>
                  xxxx xxxx xxxx 3456
                </Subtitle2>
              </View>
            }
          />
          <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} />

          <TouchableItem onPress={this.navigateTo('Notifications')}>
            <View style={[styles.row, styles.setting]}>
              <View style={styles.leftSide}>
                <View style={styles.iconContainer}>
                  {notificationsOn ? (
                    <Icon
                      name={NOTIFICATION_ICON}
                      size={24}
                      color={Colors.orangeLight}
                    />
                  ) : (
                      <Icon
                        name={NOTIFICATION_OFF_ICON}
                        size={24}
                        color={Colors.orangeLight}
                      />
                    )}
                </View>
                <Subtitle1 style={styles.mediumText}>Notifications</Subtitle1>
              </View>

              {/*
                FIX: when android:supportsRtl="true" not added to AndroidManifest.xml
                <View style={isRTL && {transform: [{scaleX: -1}]}}> 
              */}
              <View>
                <Switch
                  trackColor={{
                    true: IOS && Colors.primaryColor,
                  }}
                  thumbColor={IOS ? Colors.submitColor : Colors.submitColor}
                  onValueChange={this.toggleNotifications}
                  value={notificationsOn}
                />
              </View>
            </View>
          </TouchableItem>
          <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} />

          <Setting
            onPress={this.navigateTo('Orders')}
            icon={ORDERS_ICON}
            title="My Orders"
          />
          <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} />

          {/* Option1 */}
          {/* <Setting
            icon={DOLLAR_ICON}
            title="Add Your Restaurant"
            onPress={this.navigateTo('AddNameRest')}
          /> */}

          {/* Option2 */}
          <Setting
            icon={DOLLAR_ICON}
            title="Add Your Restaurant"
            onPress={this.navigateTo('RestaurantNavigator')}
          />

          <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} />

          <Setting
            onPress={this.navigateTo('TermsConditions')}
            icon={TERMS_ICON}
            title="Terms and Conditions"
          />

          <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} />

          <Setting
            onPress={this.navigateTo('AboutUs')}
            icon={ABOUT_ICON}
            title="About Us"
          />
          {/* <Divider type="inset" marginLeft={DIVIDER_MARGIN_LEFT} /> */}

          {/* <TouchableItem onPress={this.logout}>
            <View style={[styles.row, styles.setting]}>
              <View style={styles.leftSide}>
                <View style={styles.iconContainer}>
                  <Icon
                    name={LOGOUT_ICON}
                    size={24}
                    color={Colors.secondaryColor}
                  />
                </View>
                <Subtitle1 style={[styles.logout, styles.mediumText]}>
                  Logout
                </Subtitle1>
              </View>
            </View>
          </TouchableItem> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
