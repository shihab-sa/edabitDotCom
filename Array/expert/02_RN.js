import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';



const recurIndex = (str) => {
  if (!str) return {}; // Return an empty object if the string is null, undefined, or empty.

  const recurringItems = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (recurringItems[char]) {
      // If the character is already in the recurringItems object, it has recurred.
      return { [char]: [recurringItems[char], i] };
    } else {
      // If the character is not in the recurringItems object, add it with the current index.
      recurringItems[char] = i;
    }
  }

  return {}; // If no recurring item found, return an empty object.
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState({});

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleCheckRecurrence = () => {
    const result = recurIndex(inputText);
    setResult(result);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={handleInputChange}
        value={inputText}
        placeholder="Enter your string"
      />
      <Button title="Check Recurrence" onPress={handleCheckRecurrence} />
      <Text style={{ marginTop: 10 }}>{`Result: ${JSON.stringify(result)}`}</Text>
    </View>
  );
};

export default App;