import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToList } from '../../action/index';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';

const myCustomShare = async (image) => {
    const base64String = await ImgToBase64.getBase64String(image);
    const shareOptions = {
        //Passing the encoded base 64 image here
        url: `data:image/gif;base64,${base64String}`,
    };
    try {
        const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
        console.log('Error', error);
    }
};

export default function Search({ navigation: { navigate } }) {

    const [gifs, setGifs] = useState([]);
    const [term, updateTerm] = useState('');
    const dispatch = useDispatch();
    const fav = useSelector(state => state.listReducer.favouriteGIFSList)

    const [addedToFavourite, setAddedToFavourite] = useState(false);
    const AddedToFav = () => {
        if (addedToFavourite) {
            return (
                <View
                    style={{
                        position: 'absolute',
                        zIndex: 99,
                        backgroundColor: 'red',
                        top: 0,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 24 }}>Added To Favorite</Text>
                </View>
            );
        } else {
            return <></>;
        }
    };

    const apiGif = async () => {
        try {
            const result = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${'Hc1pZ6enqUzYZh6XXxVwIHxANWt0JVb2'}&q=${term}`);
            const res = await result.json();
            setGifs(res.data);
        }
        catch (error) {
            console.warn(error)
        }
    }
    function onEdit(newTerm) {
        updateTerm(newTerm);
        apiGif();
    }


    return (
        <View style={styles.view}>
            <View style={{ backgroundColor: '#ffa5b1', margin: 5, }}>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <Text style={styles.text1}>Go Back</Text>
                </TouchableOpacity>
                <AddedToFav />

            </View>
            <Text style={styles.text3}>Search GIFs</Text>
            <TextInput
                placeholder=' Search Giphy'
                placeholderTextColor='black'
                style={styles.textInput}
                onChangeText={(text) => onEdit(text)}
            />
            <FlatList
                data={gifs}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.touchCard}
                        onPress={() => navigate('Description', { desc: item })}>
                        <Text style={styles.text}>Title - {`${item.title}`}</Text>
                        <Image
                            resizeMode='cover'
                            style={styles.image}
                            source={{ uri: item.images.original.url }}
                        />
                        <View style={styles.touchButton}>

                            <TouchableOpacity style={styles.Button}
                                onPress={() => {
                                    if (fav.length < 5) {
                                        if (!fav.includes(item.images.original.url)) {
                                            dispatch(addToList(item.images.original.url));
                                            setAddedToFavourite(true);
                                            setTimeout(() => {
                                                setAddedToFavourite(false);
                                            }, 3000);
                                        } else {
                                            Alert.alert(
                                                "Alert",
                                                "Already Added To Favorite",
                                                [{ text: "OK" }],
                                                { cancelable: false }
                                            );
                                        }
                                    } else {
                                        Alert.alert(
                                            "Alert",
                                            "Maximum 5 Allowed",
                                            [{ text: "OK" }],
                                            { cancelable: false }
                                        );
                                    }
                                }}
                            >
                                <Text style={styles.text2}> Add to Favorite </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.Button}
                                onPress={() => { myCustomShare(item.images.original.url) }}
                            >
                                <Text style={styles.text2}> Share Image </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff1f3'
    },
    text3: {
        color: '#483d8b',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        paddingBottom: 10
    },
    textInput: {
        width: '100%',
        height: 50,
        color: 'black',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 3,
        fontSize: 20,
    },
    touchButton: {
        margin: 10,
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Button: {
        width: '48%',
        alignSelf: 'center',
        backgroundColor: '#ffbec7',
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'black',
        fontSize: 15,
        color: '#fff',
        padding: 10,
    },
    text1: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    touchCard: {
        margin: 5,
        alignItems: 'center',
        borderRadius: 6,
        borderColor: 'black',
        borderWidth: 2
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    image: {
        width: '95%',
        height: 150,
        margin: 5
    },
});