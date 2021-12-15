import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function App() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempdate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setDateText(fDate + '\n' + fTime)
        console.log(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    // const showDatepicker = () => {
    //   showMode('date');
    // }
    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Dari</Text>
            </View>
            <View style={styles.card}>
                <Button onPress={() => showMode('date')} title="Show date picker!" />
            </View>
            <View style={styles.card}>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            <View style={styles.card}>
                <Text>{dateText}</Text>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        padding: 20
    },
    image: {
        width: '50%',
        height: '50%'
    },
    text: {
        fontSize: 14,
        textTransform: 'capitalize'
    },
    card: {
        flex: 2,
        backgroundColor: '#FFFF',
        elevation: 2,
        borderRadius: 2,
    }
});
