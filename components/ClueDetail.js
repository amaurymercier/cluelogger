// Components/ClueDetail.js

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Share,
  Dimensions,
} from 'react-native';

import moment from 'moment/min/moment-with-locales';
import numeral from 'numeral';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PacmanIndicator, WaveIndicator } from 'react-native-indicators';

import my_colors from '../helpers/Colors.js';

class ClueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Clue: [],
      isLoading: true,
      isLoadingImage: true,
    };
  }

  _displayClueImage(Image_path) {
    const completeImagePath =
      'https://olympyxt.herokuapp.com/rectangle_' + Image_path;

    return (
      <Image
        style={styles.image}
        source={{ uri: completeImagePath }}
        onLoadEnd={() => this.setState({ isLoadingImage: false })}
      />
    );
  }

  _displayClueFavIcon() {
    const Clue = this.state.Clue;

    if (
      this.props.favoriteClues.findIndex((item) => Clue._id === item._id) !== -1
    ) {
      return (
        <TouchableOpacity onPress={() => this._toggleFavorite()}>
          <Icon name="heart" color="red" solid style={styles.icon} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this._toggleFavorite()}>
          <Icon name="heart" color="grey" light style={styles.icon} />
        </TouchableOpacity>
      );
    }
  }

  // pour ajouter ou retirer une Clue des favorites
  _toggleFavorite() {
    const action = { type: 'TOGGLE_FAVORITE_Clue', value: this.state.Clue };
    this.props.dispatch(action);
  }

  _displayShareIcon() {
    return (
      <TouchableOpacity onPress={() => this._shareClue()}>
        <Icon name="share-square" color="grey" style={styles.icon} />
      </TouchableOpacity>
    );
  }

  _shareClue() {
    const Clue = this.state.Clue;
    const shared_text =
      '🏆 Des nouvelles des Olympiades ! 🏆 \n \n' + Clue.description;
    Share.share({ message: shared_text });
  }

  _adaptDatabaseText(text_to_be_adapted) {
    let adapted_text = '';
    if (text_to_be_adapted != undefined) {
      adapted_text = text_to_be_adapted.replace(/\\n/g, '\n');
    }
    return adapted_text;
  }

  componentDidMount() {
    getClueWithIdFromApi(this.props.navigation.state.params.idClue).then(
      (data) => {
        // console.log(data)
        this.setState(
          {
            Clue: data,
            isLoading: false,
          },
          () => {
            console.log('Clue chargée \n');
          },
        );
      },
    );
  }

  _displayImageLoading() {
    if (this.state.isLoadingImage) {
      return (
        <View style={styles.loading_image_container}>
          <WaveIndicator size={30} color={my_colors[3]} />
        </View>
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <PacmanIndicator size={60} color={my_colors[3]} />
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.main_container} stickyHeaderIndices={[1]}>
        <View style={styles.top_image}>
          {this._displayClueImage(this.state.Clue.image_path)}
          {this._displayImageLoading()}
        </View>

        <View style={styles.top_container}>
          <View style={styles.white_top}>
            <View style={styles.title_container}>
              <Text style={styles.title_text} numberOfLines={2}>
                {this.state.Clue.titre}{' '}
              </Text>
            </View>
            <View style={styles.icon_bar}>
              {this._displayClueFavIcon()}
              {this._displayShareIcon()}
              <Text style={styles.date_text}>
                {moment(new Date(this.state.Clue.date)).format('LL')}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.description_container}>
          <Text style={styles.description_text}>
            {this._adaptDatabaseText(this.state.Clue.texte)}
          </Text>
        </View>

        {this._displayLoading()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginBottom: 10,
  },

  top_image: {
    height: 200,
    width: Dimensions.get('window').width,
    backgroundColor: '#EEE',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },

  top_container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  white_top: {
    backgroundColor: 'white',
    paddingTop: 20,
  },

  bottom_gradient: {
    height: 30,
  },

  title_container: {
    marginTop: 10,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'Avenir',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginBottom: 15,
  },

  icon_bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },

  date_text: {
    textAlign: 'right',
    justifyContent: 'center',
    fontSize: 14,
    marginLeft: 50,
  },

  description_container: {
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    paddingBottom: 20,
  },

  description_text: {
    color: '#666666',
    fontFamily: 'Avenir',
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 25,
  },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loading_image_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClueDetail;
