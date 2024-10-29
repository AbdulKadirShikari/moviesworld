import React, {useState} from 'react';
import Error from '../components/Error';
import Card from '../components/Card';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieTv} from '../services/services';
const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);
  const onSubmit = query => {
    Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
      //console.log(query);

      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
        // console.log(searchResults);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder={'Search moive or TV Show'}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search'} size={30} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchItems}>
          {/*Searched item result */}
          {searchResults && (
            <FlatList
              numColumns={3}
              data={searchResults}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
            />
          )}
          {/*when search but no result */}
          {searchResults && searchResults.lenght == null && (
            <View sty le={[styles.empty, {paddingTop: 20}]}>
              <Text>No Result Matching your Criteria</Text>
              <Text>Try diffrent Keyword</Text>
            </View>
          )}
          {/*when nothing search  */}
          {!searchResults && (
            <View style={[styles.empty, {paddingTop: 20}]}>
              <Text>Type something to start Searching</Text>
            </View>
          )}
          {/*Error */}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    //paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },
  searchItems: {
    padding: 5,
  },
});
export default Search;
