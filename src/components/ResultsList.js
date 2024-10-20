import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) return null
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail
                                result={item}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);