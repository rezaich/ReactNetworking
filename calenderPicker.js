import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Text, Image, Modal, TextInput, Alert, PermissionsAndroid, Button, TouchableOpacity } from 'react-native';


function useInput() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    }
    return {
        date,
        showDatepicker,
        show,
        mode,
        onChange
    }
}

export default app = () => {
    const input = useInput(new Date())
    const input2 = useInput(new Date())

    return (
        <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
            <Button
                onPress={input.showDatepicker}
                title={input.date.toLocaleDateString("DD/MM/YYYY")}
                color={'#931A25'} />
            {
                input.show && (
                    <DateTimePicker
                        testID="dateTimePicker1"
                        value={input.date}
                        mode={input.mode}
                        display="default"
                        onChange={input.onChange} />
                )
            }
            <Button
                onPress={input2.showDatepicker}
                title={input2.date.toLocaleDateString()}
                color={'#931A25'} />
            {input2.show && (
                <DateTimePicker
                    testID="dateTimePicker2"
                    value={input2.date}
                    mode={input2.mode}
                    display="default"
                    onChange={input2.onChange} />
            )}
        </View>
    )
}