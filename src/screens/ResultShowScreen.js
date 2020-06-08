import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultShowScreen = ({navigation}) => {
    //const id = props.navigation.state.params.id;
    const id = navigation.getParam('id');
    //console.log(id);

    const [result, setResult] = useState(null);
    //console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return <View >
        <Text >{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image source={{uri: item}} style={styles.imageStyle}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
});

export default ResultShowScreen;