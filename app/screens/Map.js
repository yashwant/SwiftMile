import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class Map extends Component {
  render() {

    return (
      <ScrollView>
        <Tile
          title="GoogleMap"
        />

      </ScrollView>
    );
  }
}

export default Map;
