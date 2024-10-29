import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  getActionMovies,
  getAdventureMovies,
  getAnimationMovies,
  getComedyMovies,
  getCrimeMovies,
  getDocumentaryMovies,
  getDramaMovies,
  getFamilyMovies,
  getFantasyMovies,
  getHistoryMovies,
  getHorrorMovies,
  getMysteryMovies,
  getPopularMovies,
  getPopularTv,
  getRomanceMovies,
  getScienceFictionMovies,
  getThrillerMovies,
  getTVMovieMovies,
  getUpComingMovies,
  getWarMovies,
  getWesternMovies,
  getMusicMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';
const dimensions = Dimensions.get('screen');
const Home = ({navigation}) => {
  //console.log(dimensions);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [adventureMovies, setAdventureMovies] = useState();
  const [animationMovies, setAnimationMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [crimeMovies, setCrimeMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();
  const [dramaMovies, setDramaMovies] = useState();
  const [fantasyMovies, setFantasyMovies] = useState();
  const [historyMovies, setHistoryMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [musicMovies, setMusicMovies] = useState();
  const [mysteryMovies, setMysteryMovies] = useState();
  const [romanceMovies, setRomanceMovies] = useState();
  const [scienceFictionMovies, setScienceFictionMovies] = useState();
  const [thrillerMovies, setThrillerMovies] = useState();
  const [warMovies, setWarMovies] = useState();
  const [westernMovies, setWesternMovies] = useState();
  const [tvMovieMovies, setTVMovienMovies] = useState();
  const getData = () => {
    return Promise.all([
      getUpComingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getActionMovies(),
      getAdventureMovies(),
      getAnimationMovies(),
      getComedyMovies(),
      getCrimeMovies(),
      getDocumentaryMovies(),
      getDramaMovies(),
      getFantasyMovies(),
      getHistoryMovies(),
      getHorrorMovies(),
      getMusicMovies(),
      getMysteryMovies(),
      getRomanceMovies(),
      getScienceFictionMovies(),
      getTVMovieMovies(),
      getThrillerMovies(),
      getWarMovies(),
      getWesternMovies(),
    ]);
  };
  useEffect(() => {
    getData()
      .then(
        ([
          upComingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          actionMoviesData,
          adventureMoviesData,
          animatinMoviesData,
          comedyMoviesData,
          crimeMoviesData,
          documentoryMoviesData,
          dramaMoviesData,
          fantasyMoviesData,
          historyMoviesData,
          horrorMoviesData,
          musicMoviesData,
          mistryMoviesData,
          romenceMoviesData,
          scienceFictionMoviesData,
          tvMovieMoviesData,
          thrillerMoviesData,
          warMoviesData,
          westernMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upComingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });

          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setActionMovies(actionMoviesData);
          setAdventureMovies(adventureMoviesData);
          setAnimationMovies(animatinMoviesData);
          setComedyMovies(comedyMoviesData);
          setCrimeMovies(crimeMoviesData);
          setDocumentaryMovies(documentoryMoviesData);
          setDramaMovies(dramaMoviesData);
          setFantasyMovies(fantasyMoviesData);
          setHistoryMovies(historyMoviesData);
          setHorrorMovies(horrorMoviesData);
          setMusicMovies(musicMoviesData);
          setMysteryMovies(mistryMoviesData);
          setRomanceMovies(romenceMoviesData);
          setScienceFictionMovies(scienceFictionMoviesData);
          setTVMovienMovies(tvMovieMoviesData);
          setThrillerMovies(thrillerMoviesData);
          setWarMovies(warMoviesData);
          setWesternMovies(westernMoviesData);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}

          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}

          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular TV Shows"
                content={popularTv}
              />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Family Movies"
                content={familyMovies}
              />
            </View>
          )}

          {actionMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Action Movies"
                content={actionMovies}
              />
            </View>
          )}

          {adventureMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Adventure Movies"
                content={adventureMovies}
              />
            </View>
          )}

          {animationMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Animation Movies"
                content={animationMovies}
              />
            </View>
          )}

          {comedyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Comedy Movies"
                content={comedyMovies}
              />
            </View>
          )}

          {crimeMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Crime Movies"
                content={crimeMovies}
              />
            </View>
          )}

          {documentaryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Documentary Movies"
                content={documentaryMovies}
              />
            </View>
          )}

          {dramaMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Drama Movies"
                content={dramaMovies}
              />
            </View>
          )}

          {fantasyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Fantasy Movies"
                content={fantasyMovies}
              />
            </View>
          )}

          {historyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="History Movies"
                content={historyMovies}
              />
            </View>
          )}

          {horrorMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Horror Movies"
                content={horrorMovies}
              />
            </View>
          )}
          {mysteryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Mystary Movies"
                content={mysteryMovies}
              />
            </View>
          )}

          {romanceMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Romance Movies"
                content={romanceMovies}
              />
            </View>
          )}

          {scienceFictionMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Science Fiction Movies"
                content={scienceFictionMovies}
              />
            </View>
          )}

          {tvMovieMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="TV Movies"
                content={tvMovieMovies}
              />
            </View>
          )}

          {thrillerMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Thriller Movies"
                content={thrillerMovies}
              />
            </View>
          )}

          {warMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="War Movies"
                content={warMovies}
              />
            </View>
          )}

          {westernMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Western Movies"
                content={westernMovies}
              />
            </View>
          )}

          {musicMovies && (
            <View navigation={navigation} style={styles.carousel}>
              <List
                navigation={navigation}
                title="Music Movies"
                content={musicMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator size="large" style={styles.sliderContainer} />
      )}
      {error && <Error />}
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
