import { View, Text, TextInput } from 'react-native'
import React from 'react'

const NativeTextInput = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <TextInput
                style={{ borderColor: '#000000', borderWidth: 1, color: '#000000', fontSize: 16, fontWeight: '500', marginHorizontal: 15, marginVertical: 15, paddingHorizontal: 10, height: 55, borderRadius: 8, }}
                // cursorColor={'#000000'}
                placeholder={'placeholder'}
                placeholderTextColor={'gray'}
                // onChangeText={(event) => console.log(event)}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                secureTextEntry={false}
                keyboardType={'default'}
                // autoCapitalize={'words'}
                // textContentType={'addressCity'}
                // importantForAutofill={'yesExcludeDescendants'}
                // autoComplete={'address-line1'}
                onPressIn={() => console.log('click')}
                readOnly={false}
                // inputMode='numeric'
                returnKeyType={'search'}
                selectionColor={'blue'}
                showSoftInputOnFocus={true}
                underlineColorAndroid={'transparent'}
            />
            {/* <TextInput
                style={{ borderColor: '#000000', borderWidth: 1, color: '#000000', fontSize: 16, fontWeight: '500', marginHorizontal: 15, marginVertical: 15, paddingHorizontal: 10, height: 55, borderRadius: 8, }}
                // cursorColor={'#000000'}
                placeholder={'placeholder'}
                placeholderTextColor={'gray'}
                // onChangeText={(event) => console.log(event)}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                secureTextEntry={false}
                keyboardType={'default'}
                // autoCapitalize={'words'}
                // textContentType={'addressCity'}
                // importantForAutofill={'yesExcludeDescendants'}
                // autoComplete={'address-line1'}
                onPressIn={() => console.log('click')}
                readOnly={false}
                // inputMode='numeric'
                returnKeyType={'search'}
                selectionColor={'blue'}
                showSoftInputOnFocus={true}
                underlineColorAndroid={'transparent'}
                multiline={true}
                numberOfLines={4}
            /> */}
        </View>
    )
}

export default NativeTextInput