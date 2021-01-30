import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToList } from '../../action/index';

const Description = ({ navigation }) => {
    const fav = useSelector(state => state.listReducer.favouriteGIFSList);
    const dispatch = useDispatch();

    const [addedToFavourite, setAddedToFavourite] = useState(false);

    const imageURL = navigation.getParam('desc', 0).images.original.url;

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

    return (

        <View style={{ backgroundColor: '#fff1f3', paddingTop: 4, flex: 1 }}>
            <View style={{ backgroundColor: '#ffa5b1', margin: 5 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.text1}>Go Back</Text>
                </TouchableOpacity>
                <AddedToFav />
            </View>

            <Text style={styles.text}>Detail View</Text>

            <View style={styles.container}>

                <Image
                    style={styles.image}
                    resizeMode='cover'
                    source={{ uri: navigation.getParam('desc', 0).images.original.url }}
                />
                <Text style={styles.style}>Title:{navigation.getParam('desc', 0).title}
                </Text>
                <Text style={styles.style}>Slug:{navigation.getParam('desc', 0).slug}
                </Text>
            </View>
            <View style={styles.touchButton}>

                <TouchableOpacity style={styles.Button}
                    onPress={() => {
                        if (fav.length < 5) {
                            if (!fav.includes(imageURL)) {
                                dispatch(addToList(imageURL));
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
                    <Text style={styles.text2}>Add to Favorite </Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};


const styles = StyleSheet.create({
    style: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        backgroundColor: '#fff1f3',
    },
    container: {
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 3,
        margin: 5,
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text1: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    image: {
        width: '95%',
        height: 150,
        margin: 5,
        alignSelf: 'center'
    }, touchButton: {
        margin: 10,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Button: {
        width: '45%',
        alignSelf: 'center',
        backgroundColor: '#ffbec7',
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'black',
        fontSize: 15,
        color: '#fff',
        padding: 10,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});

export default Description;
