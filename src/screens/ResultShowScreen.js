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
        <Text style={styles.titleStyle}>{result.name}</Text>
        <Text style={styles.contents}>{result.display_phone}</Text>
        <Text style={styles.contents}>
            {result.location.address1 
                + (result.location.address2 ? ' ' + result.location.address2 : '')
                + (result.location.address3 ? ' ' + result.location.address3 : '')
                + (result.location.city ? ' ' + result.location.city : '')
            }
        </Text>
        <Text style={styles.contents}>{result.rating} Stars, {result.review_count} Reviews</Text>
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
    titleStyle: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    contents: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
        marginLeft: 15,
    },
});

export default ResultShowScreen;