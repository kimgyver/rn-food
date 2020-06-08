import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChanged, onTermSubmitted }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder='search'
            value={term}
            onChangeText={onTermChanged}
            onEndEditing={onTermSubmitted}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle : {
        //borderWidth: 1,
        //borderColor: 'black',
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;