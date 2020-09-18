import React from 'react';
import ValidationComponent from 'react-native-form-validator'
import {View, StyleSheet , Text , TextInput, Button} from 'react-native'
// import { TextInput } from 'react-native-gesture-handler';
export default class ResumeFrom extends ValidationComponent{
    state = {
        name: '',
        nickname : '',
        age : '',
        skill: '',
    }
   
_onSubmit =() =>{
this.validate({
    name: {required: true},
    nickname : {required: true},
    age : {required: true,numbers: true},
    skill: {required: true},

})
}

    render (){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.getErrorMessages}>
                        {this.getErrorMessages()}
                    </Text>
                </View>
                <View>
                    <Text>Full name</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(Text) => this.setState({ name : Text})}
                    value={this.state.name} ></TextInput>
                </View>
                <View style={{marginTop:20}}>
                    <Text>nickname</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(Text) => this.setState({ nickname : Text})}
                    value={this.state.nickname} ></TextInput>
                </View>
                <View style={{marginTop:20}}>
                    <Text>Age</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(Text) => this.setState({ age : Text})}
                    value={this.state.age} ></TextInput>
                </View>
                <View style={{marginTop:20}}>
                    <Text>Skill</Text>
                    <TextInput style={styles.textAreaInput}
                    onChangeText={(Text) => this.setState({ skill : Text})}
                    value={this.state.skill} multiline={true}></TextInput>
                </View>
                <View style={{marginTop:20}}>
                    <Button title="Create Resume" onPress={this._onSubmit}></Button>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:30, 
        // backgroundColor: 'White',
         minHeight:'100%'
    },
    textInput :{
        height: 40, borderColor:'gray', borderWidth:1
    },
    textAreaInput: {height:100, borderColor:'gray', borderWidth:1
    },
    getErrorMessages: {color: 'red' , marginBottom:20}

})