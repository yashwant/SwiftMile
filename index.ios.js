import React, { Component } from 'react'
import ZoomableImage from './app/components/ZoomableImage'
import { AppRegistry,ScrollView, Image, TouchableHighlight,Dimensions} from 'react-native'

//const { deviceWidth, deviceHeight } = Dimensions.get('window');
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
export default class ZoomView extends Component {
static defaultProps = {
  doAnimateZoomReset: false,
  maximumZoomScale: 2,
  minimumZoomScale: 1,
  zoomHeight: deviceHeight, 
  zoomWidth: deviceWidth,
}
handleResetZoomScale = (event) => {
  this.scrollResponderRef.scrollResponderZoomTo({
     x: 0, 
     y: 0, 
     width: this.props.zoomWidth, 
     height: this.props.zoomHeight, 
     animated: true 
  });
}
setZoomRef = node => { //the ScrollView has a scrollResponder which allows us to access more methods to control the ScrollView component
  if (node) {
    this.zoomRef = node
    this.scrollResponderRef = this.zoomRef.getScrollResponder()
  }
}
render() {
  return (
          <ZoomableImage 
            source={require('./app/assets/Northlandia-Map-No-POIs-No-Bubbles-v3.png')}
            imageWidth={792}
            imageHeight={612}
            x1={10}
            y1={10}
            x2={100}
            y2={100}
            x3={200}
            y3={200}
            x4={300}
            y4={250}
          >
          </ZoomableImage>
   )
  }
}
//{this.props.source}
AppRegistry.registerComponent('SwiftMile', () => ZoomView);