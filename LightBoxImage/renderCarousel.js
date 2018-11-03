import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, FlatList
} from 'react-native';
import ImageSlider from "react-native-image-slider";
import dataImage from "../datas/dataImage";
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;


const { height, width } = Dimensions.get('window');

const renderCarousel = (album, currentPage) => (
    <ImageSlider
        loopBothSides
        autoPlayWithInterval={3000}
        images={this.props.images}
        customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, { flex: 1 }]}>
                <Image
                    source={{ uri: item }}
                    style={{ flex: 1, resizeMode: 'contain' }} />
            </View>
        )}
    />
);
export default renderCarousel