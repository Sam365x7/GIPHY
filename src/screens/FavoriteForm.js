import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromList } from '../../action/index';

const FavoriteForm = () => {
    const fav = useSelector(state => state.listReducer.favouriteGIFSList)

    const dispatch = useDispatch();
    const List = ({ GIFS }) => {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: GIFS }}
                    style={{ width: 325, height: 225 }}
                    resizemode="cover"
                />

                <TouchableOpacity
                    onPress={() => {
                        dispatch(removeFromList(GIFS));
                    }}
                    style={{ borderRadius: 4, borderColor: 'black', borderWidth: 2, backgroundColor: '#ffa5b1', width: 326, height: 40, margin: 5, marginBottom: 20 }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 24, }}>Delete</Text>
                </TouchableOpacity>

            </View >
        );
    };

    return (
        <View
            style={{
                width: '100%',
                margin: 0,
            }}>
            {fav.map((GIFS) => (
                <List key={GIFS} GIFS={GIFS} />
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 3,
    },
});
export default FavoriteForm;
