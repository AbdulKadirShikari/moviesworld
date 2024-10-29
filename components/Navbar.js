import React from 'react';

import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
const propsTypes = {main: PropTypes.bool};
const defaultProps = {
  main: false,
};
class Navbar extends React.PureComponent {
  state = {};
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Image
              style={styles.logo}
              source={require('../assets/images/movies.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icon name={'search'} size={30} color={'#00000'} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-back'} size={30} color={'#00000'} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainNav: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 40,
    height: 40,
  },
});
Navbar.propsTypes = PropTypes;
Navbar.defaultProps = defaultProps;
export default Navbar;
