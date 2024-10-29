import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text,Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const placeholderImage = require('../assets/images/placeholder.png');
const dimensions = Dimensions.get('screen');
const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Detail', {movieId: item.id})}
        style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.moviesName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 20,
  },
  moviesName: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
  },
});
Card.PropTypes = propTypes;
export default Card;
