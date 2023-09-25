/* import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ToastAndroid, Platform, NativeEventEmitter, NativeModules, } from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';

const { RNAlarmNotification } = NativeModules;
const RNEmitter = new NativeEventEmitter(RNAlarmNotification);
const alarmNotifData = {
    title: 'Alarm',
    message: 'Stand up',
    vibrate: true,
    play_sound: true,
    schedule_type: 'once',
    channel: 'wakeup',
    data: { content: 'my notification id is 22' },
    loop_sound: true,
    has_button: true,
};

const repeatAlarmNotifData = {
    title: 'Alarm',
    message: 'Stand up',
    vibrate: true,
    play_sound: true,
    channel: 'wakeup',
    data: { content: 'my notification id is 22' },
    loop_sound: true,
    schedule_type: 'repeat',
    repeat_interval: 'minutely',
    interval_value: 5, // repeat after 5 minutes
};

let _subscribeOpen;
let _subscribeDismiss;
const NativeAlarm = () => {
    const [fireDate, setFireDate] = useState(ReactNativeAN.parseDate(new Date()))
    const [update, setUpdate] = useState([])
    const [futureFireDate, setFutureFireDate] = useState('1')
    const [alarmId, setAlarmId] = useState(null)

    const setAlarm = async () => {

        const details = { ...alarmNotifData, fire_date: fireDate };
        console.log(`alarm set: ${fireDate}`);

        try {
            const alarm = await ReactNativeAN.scheduleAlarm(details);
            console.log(alarm);
            if (alarm) {
                setUpdate([...update, { date: `alarm set: ${fireDate}`, id: alarm.id }])
            }
        } catch (e) {
            console.log(e);
        }
    };

    const setFutureRpeatAlarm = async () => {

        const _seconds = parseInt(futureFireDate, 10) * 60 * 1000;
        const fire_date = ReactNativeAN.parseDate(new Date(Date.now() + _seconds));

        const details = {
            ...repeatAlarmNotifData,
            fire_date,
        };
        console.log(`alarm set: ${fire_date}`);

        try {
            const alarm = await ReactNativeAN.scheduleAlarm(details);
            console.log(alarm);
            if (alarm) {
                setUpdate([...update, { date: `alarm set: ${fire_date}`, id: alarm.id }])
            }
        } catch (e) {
            console.log(e);
        }
    };

    const setFutureAlarm = async () => {
        const _seconds = parseInt(futureFireDate, 10) * 60 * 1000;
        const fire_date = ReactNativeAN.parseDate(new Date(Date.now() + _seconds));

        const details = {
            ...alarmNotifData,
            fire_date,
            sound_name: 'iphone_ringtone.mp3',
        };
        console.log(`alarm set: ${fire_date}`);

        try {
            const alarm = await ReactNativeAN.scheduleAlarm(details);
            console.log('alarm', alarm);
            if (alarm) {
                setUpdate([...update, { date: `alarm set: ${fire_date}`, id: alarm.id }])
            }
        } catch (e) {
            console.log(e);
        }
    };

    const stopAlarmSound = () => {
        ReactNativeAN.stopAlarmSound();
    };

    const sendNotification = () => {
        const details = {
            ...alarmNotifData,
            data: { content: 'my notification id is 45' },
            sound_name: 'iphone_ringtone.mp3',
            volume: 0.9,
        };
        console.log('details', details);
        ReactNativeAN.sendNotification(details);
    };

    useEffect(() => {
        _subscribeDismiss = RNEmitter.addListener(
            'OnNotificationDismissed',
            (data) => {
                const obj = JSON.parse(data);
                console.log(`notification id: ${obj.id} dismissed`);
            },
        );

        _subscribeOpen = RNEmitter.addListener(
            'OnNotificationOpened',
            (data) => {
                console.log(data);
                const obj = JSON.parse(data);
                console.log(`app opened by notification: ${obj.id}`);
            },
        );

        // check ios permissions
        if (Platform.OS === 'ios') {
            showPermissions();

            ReactNativeAN.requestPermissions({
                alert: true,
                badge: true,
                sound: true,
            }).then(
                (data) => {
                    console.log('RnAlarmNotification.requestPermissions', data);
                },
                (data) => {
                    console.log('RnAlarmNotification.requestPermissions failed', data);
                },
            );
        }
    }, [])

    // useEffect(() => {
    //     _subscribeDismiss.remove();
    //     _subscribeOpen.remove();
    // }, [])

    const showPermissions = () => {
        ReactNativeAN.checkPermissions((permissions) => {
            console.log(permissions);
        });
    };

    const viewAlarms = async () => {
        const list = await ReactNativeAN.getScheduledAlarms();
        console.log(list);
        const update = list.map((l) => ({
            date: `alarm: ${l.day}-${l.month}-${l.year} ${l.hour}:${l.minute}:${l.second}`,
            id: l.id,
        }));

        setUpdate(update)
    };

    const deleteAlarm = async () => {
        if (alarmId !== '') {
            console.log(`delete alarm: ${alarmId}`);
            const id = parseInt(alarmId, 10);
            ReactNativeAN.deleteAlarm(id);
            setAlarmId('');
            ToastAndroid.show('Alarm deleted!', ToastAndroid.SHORT);
            await viewAlarms();
        }
    };

    return (
        <Fragment>
            <View style={styles.wrapper}>
                <View>
                    <View>
                        <Text>Alarm Date in the future (example 01-01-2022 00:00:00)</Text>
                        <View>
                            <TextInput
                                style={styles.date}
                                onChangeText={(text) => setFireDate({ fireDate: text })}
                                value={fireDate}
                            />
                        </View>
                    </View>
                    <View>
                        <Button onPress={() => setAlarm()} title="Set Alarm" color="#007fff" />
                    </View>
                </View>
                <View style={styles.margin}>
                    <Text>Alarm Time From Now (in minutes):</Text>
                    <TextInput
                        style={styles.date}
                        onChangeText={(text) => setFutureFireDate(text)}
                        value={futureFireDate}
                    />
                </View>
                <View style={styles.margin}>
                    <Button
                        onPress={() => setFutureAlarm()}
                        title="Set Future Alarm"
                        color="#007fff"
                    />
                </View>
                <View style={styles.margin}>
                    <Button
                        onPress={() => setFutureRpeatAlarm()}
                        title="Set Future Alarm with Repeat"
                        color="#007fff"
                    />
                </View>
                <View style={styles.margin}>
                    <Button
                        onPress={() => sendNotification()}
                        title="Send Notification Now"
                        color="#007fff"
                    />
                </View>
                <View style={styles.margin}>
                    <Button
                        onPress={() => stopAlarmSound()}
                        title="Stop Alarm Sound"
                        color="#841584"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.date}
                        onChangeText={(text) => setAlarmId(text)}
                        value={alarmId}
                    />
                </View>
                <View style={styles.margin}>
                    <Button
                        onPress={() => deleteAlarm()}
                        title="Delete Alarm"
                        color="#841584"
                    />
                </View>
                <View style={styles.margin}>
                    <Button
                        onPress={() => viewAlarms()}
                        title="See all active alarms"
                        color="#841584"
                    />
                </View>
                <Text>{JSON.stringify(update, null, 2)}</Text>
            </View>
        </Fragment>
    )
}
const styles = StyleSheet.create({
    wrapper: { flex: 1, padding: 20 },
    date: { height: 40, borderColor: 'gray', borderWidth: 1 },
    margin: { marginVertical: 8 },
});

export default NativeAlarm; */


import { View, Text } from 'react-native'
import React from 'react'

const NativeAlarm = () => {
  return (
    <View>
      <Text>NativeAlarm</Text>
    </View>
  )
}

export default NativeAlarm