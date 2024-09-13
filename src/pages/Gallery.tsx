import React from 'react'
import {  StyleSheet, View } from 'react-native'
import LabelComponent from '../components/Atoms/Label'
import CarouselView from '../components/Organisms/CarouselView';

const data = [
  { title: 'Item 1', image: require('../../assets/images/bussines/image-1.jpg') },
  { title: 'Item 2', image: require('../../assets/images/bussines/image-2.jpg') },
  { title: 'Item 3', image: require('../../assets/images/bussines/image-3.jpeg') },
  { title: 'Item 4', image: require('../../assets/images/bussines/image-1.jpg') },
];
//todo get dates of details page at labelcomponent and caroulse View
const Gallery = () => {
  return (
    <View style={styles.container}>
        <LabelComponent text='hi, this is section gallery.'/>
        <CarouselView data={data}/>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#FCE6C5",
        alignItems: "center",
        justifyContent: "center",
      },
})
export default Gallery