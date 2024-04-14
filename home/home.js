import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function home({ navigation }) {
    return (
    <View style={styles.container}>
        <View style={[styles.quadrados, styles.q1]}>
            <Text style={styles.text}> Tarefas </Text>
        </View>
        <View style={[styles.quadrados, styles.q2]}>
            <Text style={styles.text}> Câmera </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
    },
    quadrados: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        margin: 10,
        borderRadius:8,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: '50%',
        height: 200,
    },
    q1: {
        backgroundColor: '#CEBAE5',
    },
    q2: {
        backgroundColor: '#F081BA',
    },
});
