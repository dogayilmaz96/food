import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from "../api/yelp";
import { Layout } from "react-native-reanimated";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) return null
    return (
        <View>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginVertical: 10
    }
});

export default ResultsShowScreen;

