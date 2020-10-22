/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import HeaderIconButton from '../components/navigation/HeaderIconButton';

// import Onboarding screen
import Onboarding from '../screens/onboarding/OnboardingA';

// import Welcome screen
import Welcome from '../screens/welcome/WelcomeA';

// import SignUp screen
import SignUp from '../screens/signup/SignUpA';

// import Verification screen
import Verification from '../screens/verification/VerificationA';

// import SignIn screen
import SignIn from '../screens/signin/SignInA';

// import ForgotPassword screen
import ForgotPassword from '../screens/forgotpassword/ForgotPasswordA';

// import TermsConditions screen
import TermsConditions from '../screens/terms/TermsConditionsA';

// import HomeNavigator
import HomeNavigator from './HomeNavigatorA';

// import Product screen
import Product from '../screens/product/ProductA';

// import Categories screen
import Categories from '../screens/categories/CategoriesA';
import Category from '../screens/categories/CategoryA';

// import Search results screen
import SearchResults from '../screens/search/SearchResultsA';

// import Checkout screen
import Checkout from '../screens/checkout/CheckoutA';

// import EditProfile screen
import EditProfile from '../screens/profile/EditProfileA';

// import DeliveryAddress screen
import DeliveryAddress from '../screens/address/DeliveryAddressA';

// import AddAddress screen
import AddAddress from '../screens/address/AddAddressA';
const backButton =
  Platform.OS === 'ios' ? 'ios-chevron-back-sharp' : 'chevron-back';

// import EditAddress screen
import EditAddress from '../screens/address/EditAddressA';

// import Payment screen
import PaymentMethod from '../screens/payment/PaymentMethodA';

// import AddCreditCard screen
import AddCreditCard from '../screens/payment/AddCreditCardA';

// import Notifications screen
import Notifications from '../screens/notifications/NotificationsA';

// import Orders screen
import Orders from '../screens/orders/OrdersA';

// import AboutUs screen
import AboutUs from '../screens/about/AboutUsA';

// import Add RestaurantNavigator
import RestaurantNavigator from '../screens/addRestaurant/RestaurantNavigator';

// import colors
import Colors from '../theme/colors';
import FontFamily from '../theme/FontFamily';

import Icons from 'react-native-vector-icons/MaterialIcons';
// MainNavigatorA Config
const SAVE_ICON = Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark';
import AddNameRest from '../screens/addRestaurant/AddNameRest';
import AddDetailsRest from '../screens/addRestaurant/AddDetailsRest';
import ActivationSuccess from '../screens/addRestaurant/ActivationSuccess';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// create stack navigator
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
// MainNavigatorA
function MainNavigatorA() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardOverlayEnabled: false,
          headerStyle: {
            elevation: 1,
            shadowOpacity: 0,
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: Colors.onBackground,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Create Account',
            headerShown: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'Sign In',
            headerShown: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            title: 'Forgot Password?',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={({ navigation }) => ({
            title: 'Terms and Conditions',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={({ navigation }) => ({
            title: 'All Categories',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.navigate('Search')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ navigation }) => ({
            title: 'Pizza',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.navigate('Search')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={({ navigation }) => ({
            title: 'Search Results',
            headerTitleStyle: { fontWeight: '400' },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.navigate('Search')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={({ navigation }) => ({
            title: 'Checkout',
            headerTitleStyle: { fontWeight: '400' },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={({ navigation }) => ({
            title: 'Edit Profile',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerRight: () => (
              <HeaderIconButton
                onPress={() => navigation.goBack()}
                name={SAVE_ICON}
                color={Colors.primaryColor}
              />
            ),
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="DeliveryAddress"
          component={DeliveryAddress}
          options={({ navigation }) => ({
            title: 'Delivery Address',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <HeaderIconButton
                onPress={() => navigation.goBack()}
                name={SAVE_ICON}
                color={Colors.primaryColor}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={({ navigation }) => ({
            title: 'Add New Address',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="EditAddress"
          component={EditAddress}
          options={({ navigation }) => ({
            title: 'Edit Address',
            headerTitleStyle: { fontWeight: '400' },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={({ navigation }) => ({
            title: 'Payment Method',
            headerTitleStyle: { fontWeight: '400' },
            // headerRight: () => (
            //   <HeaderIconButton
            //     onPress={() => navigation.goBack()}
            //     name={SAVE_ICON}
            //     color={Colors.primaryColor}
            //   />
            // ),
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddCreditCard"
          component={AddCreditCard}
          options={({ navigation }) => ({
            title: 'Add Credit Card',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.navigate('HomeNavigator')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={({ navigation }) => ({
            title: 'Notifications',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={({ navigation }) => ({
            title: 'My Orders',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="RestaurantNavigator"
          component={RestaurantNavigator}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />

        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={({ navigation }) => ({
            title: 'About Us',
            headerTitleStyle: { fontFamily: FontFamily.SemiBold },
            headerLeft: () => (
              <Icons
                size={35}
                style={{ marginLeft: 5 }}
                name={'keyboard-arrow-left'}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigatorA;
