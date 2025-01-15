// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputNumber = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');

  const renderNumber = (x) => {
    if (x < 1000 || x > 9999) {
      return "Angka harus lebih besar dari 1000 dan kurang dari 10000.";
    }

    const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
    const puluhan = ["", "", "Dua Puluh", "Tiga Puluh", "Empat Puluh", "Lima Puluh", "Enam Puluh", "Tujuh Puluh", "Delapan Puluh", "Sembilan Puluh"];
    const ratusan = ["", "Seratus", "Dua Ratus", "Tiga Ratus", "Empat Ratus", "Lima Ratus", "Enam Ratus", "Tujuh Ratus", "Delapan Ratus", "Sembilan Ratus"];
    const ribuan = ["", "Satu Ribu", "Dua Ribu", "Tiga Ribu", "Empat Ribu", "Lima Ribu", "Enam Ribu", "Tujuh Ribu", "Delapan Ribu", "Sembilan Ribu"];

    const ribuanDigit = Math.floor(x / 1000);
    const ratusanDigit = Math.floor((x % 1000) / 100);
    const puluhanDigit = Math.floor((x % 100) / 10);
    const satuanDigit = x % 10;

    let result = [];

    if (ribuanDigit > 0) {
      result.push(ribuan[ribuanDigit]);
    }
    if (ratusanDigit > 0) {
      result.push(ratusan[ratusanDigit]);
    }
    if (puluhanDigit > 0) {
      result.push(puluhan[puluhanDigit]);
    }
    if (satuanDigit > 0) {
      result.push(satuan[satuanDigit]);
    }

    // Mengembalikan hasil dalam urutan terbalik
    return result.reverse().join(" ");
  };

  const handleConvert = () => {
    const number = parseInt(inputValue, 10);
    const result = renderNumber(number);
    setOutput(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Converter Angka Terbalik</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka (1000-9999)"
        placeholderTextColor={'gray'}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Convert" onPress={handleConvert} />
      {output ? <Text style={styles.output}>{output}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%',
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputNumber;