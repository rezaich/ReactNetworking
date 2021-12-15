import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dateText, setDateText] = useState('empty');


    let tempDate = new Date();
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setDateText(fDate + '\n' + fTime)
    console.log(fDate)

    return (
        <>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                onChange={onChange}
            />
            <Text>{dateText}</Text>
        </>
    )
}
