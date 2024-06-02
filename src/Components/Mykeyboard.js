import React, { useState } from "react";
import Button from "./Button";
import { Styles } from "../styles/GlobalStyles";
import { View, Text } from "react-native";
import { myColours } from "../styles/colours";

export default function Mykeyboard() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);


    const handleNumberPress = (ButtonValue) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + ButtonValue);
        }
    }

    const handleOperationPress = (ButtonValue) => {
        if (ButtonValue === '+/-') {
            setFirstNumber((parseFloat(firstNumber) * -1).toString());
        } else if (ButtonValue === '%') {
            setFirstNumber((parseFloat(firstNumber) / 100).toString());
        } else {
            setOperator(ButtonValue);
            setSecondNumber(firstNumber);
            setFirstNumber('');
        }
    }

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperator('');
        setResult(null);
    }

    const firstNumberDisplay = ()  => {
        if (result !== null) {
            return (
                <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColours.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColours.result}]}>
                    {result.toString()}
                </Text>
            );
        } 
        
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
        }

        if (firstNumber === '') {
            return<Text style={Styles.screenFirstNumber}>{'0'}</Text>
        }

        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return <Text style={[Styles.screenFirstNumber, {fontSize: 70}]}>{firstNumber}</Text>
        }

        if (firstNumber.length > 7) {
            return <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>{firstNumber}</Text>
        }
    }

    const getResult = () => {
        let result;
        switch(operator) {
            case '+':
                result = parseFloat(secondNumber) + parseFloat(firstNumber);
                break;
            case '-':
                result = parseFloat(secondNumber) - parseFloat(firstNumber);
                break;
            case '*':
                result = parseFloat(secondNumber) * parseFloat(firstNumber);
                break;
            case '/':
                result = parseFloat(secondNumber) / parseFloat(firstNumber);
                break;
            default:
                result = 0;
                break;
        }
        setResult(result);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    };



    return (
        <View style={Styles.viewBottom}>
            <View style={{
                width: '90%',
                flex: 2,
                justifyContent : 'flex-end',
            }}>
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{color: 'black', fontSize: 50, fontWeight: '500'}}>{operator}</Text>
                </Text>
                {firstNumberDisplay()}
                
            </View> 
            

            <View style={{flex: 3}}>
                <View style={Styles.row}>
                    <Button title="C" isGray={true} onPress={clear} />
                    <Button title="⌫" isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                    <Button title="%" isGray onPress={() => handleOperationPress('%')} />
                    <Button title="÷" isBlue onPress={() => handleOperationPress('/')} />
                </View> 
                <View  style={Styles.row}>
                    <Button title="7" onPress={() => handleNumberPress('7')} />
                    <Button title="8" onPress={() => handleNumberPress('8')} />
                    <Button title="9" onPress={() => handleNumberPress('9')} />
                    <Button title="x" isBlue onPress={() => handleOperationPress('*')} />
                </View>
                <View  style={Styles.row}>
                    <Button title="4" onPress={() => handleNumberPress('4')} />
                    <Button title="5" onPress={() => handleNumberPress('5')} />
                    <Button title="6" onPress={() => handleNumberPress('6')} />
                    <Button title="-" isBlue onPress={() => handleOperationPress('-')} />
                </View>
                <View  style={Styles.row}>
                    <Button title="1" onPress={() => handleNumberPress('1')} />
                    <Button title="2" onPress={() => handleNumberPress('2')} />
                    <Button title="3" onPress={() => handleNumberPress('3')} />
                    <Button title="+" isBlue onPress={() => handleOperationPress('+')} />
                </View>
                <View  style={Styles.row}>
                    <Button title="." onPress={() => handleNumberPress('.')} />
                    <Button title="0" onPress={() => handleNumberPress('0')} />
                    <Button title="+/-" isGray onPress={() => handleOperationPress('+/-')} />
                    <Button title="=" isBlue onPress={getResult} />
                </View>
            </View>
            
        </View>
    );
}