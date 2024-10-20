import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container
        }>
            <Image
                style={styles.imageStyle}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 6,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: '16',
        fontWeight: 'bold'
    }
});

export default ResultsDetail;