import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => {
                    onTermSubmit()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        backgroundStyle: {
            marginTop: 15,
            backgroundColor: '#DFDEDE',
            height: 40,
            borderRadius: 5,
            marginHorizontal: 15,
            flexDirection: 'row',
            marginBottom: 10
        },

        inputStyle: {
            flex: 1,
            fontSize: 18
        },

        iconStyle: {
            fontSize: 30,
            alignSelf: 'center',
            marginHorizontal: 10

        }
    }
);

export default SearchBar;