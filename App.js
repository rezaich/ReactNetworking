import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Text, Image, Modal, TextInput, Alert, PermissionsAndroid, Button, TouchableOpacity } from 'react-native';

function useInput() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('empty');

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

    let tempDate = new Date(currentDate);
    let fDate = tempdate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setDateText(fDate + '\n' + fTime)
    console.log(fDate)
  }
  return {
    date,
    showDatepicker,
    show,
    mode,
    onChange,
    dateText
  }
}


export default app = () => {
  const input = useInput(new Date())
  const input2 = useInput(new Date())

  return (
    <View style={{ flex: 1, padding: 5 }}>
      <View
        style={{ padding: 10, borderRadius: 5 }}>

        <Button
          onPress={input.showDatepicker}
          title={input.dateText}
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
      </View>
      <View
        style={{ padding: 10, borderRadius: 5 }}>

        <Button
          onPress={input2.showDatepicker}
          title={input.dateText}
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
      <View
        style={{ padding: 10, borderRadius: 5 }}>

        <Button
          onPress={press}
          title='test'
          color={'#931A25'} />
      </View>
    </View>
  )
}