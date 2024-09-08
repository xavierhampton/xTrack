import {View, Text, Pressable, ScrollView} from 'react-native'
import {auth} from '@/firebase'
import {router} from 'expo-router'
import React from 'react'
import { StyleSheet } from "react-native";
import {themeColor} from '@/hooks/theme'
import { Circle, Bar } from 'react-native-progress';
import {LinearGradient} from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import MaskedView from '@react-native-masked-view/masked-view'

export default function Home() {

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            router.push('/')
        })
        .catch(error => console.log(error.message))
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.pageContainer}>

                <View style={styles.headerContainer}>

                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <MaskedView style={{ width: 120, height: 40, marginLeft: 15}} maskElement={<Text  style={styles.logo}>xTracK</Text>}>
                            <LinearGradient colors={['#12c2e9', '#c471ed' , '#f7797d']}  style={{ flex: 1 }}/>
                        </MaskedView>
                        <Text style={{color: 'white', fontFamily: 'JetBrainsMono', fontSize: 12, paddingLeft: 25, paddingTop: 8}}>Welcome Back!</Text>
                    </View>
                    
                    <Pressable onPress={handleSignOut} style={{marginLeft: 'auto', justifyContent: 'center', marginRight: 20,}}>
                            <Feather name="log-out" size={24} color='red' />
                    </Pressable>
                </View>

                <View style={styles.macroContainer}>
                    <View style={styles.innerMacroContainer}>
                        <Text style={{color: 'white', fontFamily: 'JetBrainsMono', fontSize: 15, marginBottom: 5}}>Calories</Text> 
                        <Circle color={themeColor().accent}thickness={6}progress={0.5} showsText={true} size={120} textStyle={styles.circleText}></Circle>
                        <Text style={{color: 'white', fontFamily: 'JetBrainsMono', fontSize: 11, marginTop: 5}}>1000/2000</Text> 

                    </View>
                    <View style={styles.innerMacroContainer}> 
                        <View style={{display: 'flex', flexDirection: 'column', gap: 30, marginRight: 20}}>
                            <View>
                                <View style={{display: 'flex', flexDirection: 'row',}}>
                                    <Text style={styles.macroText}>Carbs</Text>
                                    <Text style={styles.smallMacroText}>145/160 g</Text>
                                </View>
                                <Bar color={themeColor().accent} progress={.7}></Bar>
                            </View>
                                <View>
                                <View style={{display: 'flex', flexDirection: 'row',}}>
                                    <Text style={styles.macroText}>Protein</Text>
                                    <Text style={styles.smallMacroText}>35/160 g</Text>
                                </View>
                                <Bar color={themeColor().accent} progress={.3}></Bar>
                            </View>
                            <View>
                                <View style={{display: 'flex', flexDirection: 'row',}}>
                                    <Text style={styles.macroText}>Fat</Text>
                                    <Text style={styles.smallMacroText}>80/160 g</Text>
                                </View>
                                <Bar color={themeColor().accent} progress={.5}></Bar>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.dateContainer}>


                </View>

                <View style={styles.foodContainer}>


                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 35,
        fontFamily: 'JetBrainsMono',
        letterSpacing: -3,
    },
    container: {
      backgroundColor: themeColor().primary,
    },
    pageContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: themeColor().secondary,
        width: 350,
        height: 70,
        borderRadius: 30,
        
    },
    macroContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: themeColor().secondary,
        width: 350,
        height: 200,
        borderRadius: 30,
    },
    innerMacroContainer: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    macroText: {
        color: 'white',
        fontFamily: 'JetBrainsMono'
    },
    smallMacroText: {
        color: 'white',
        fontFamily: 'JetBrainsMono',
        marginLeft: 'auto',
        fontSize: 11,
    },
    circleText: {
        fontFamily: 'JetBrainsMono',
        color: themeColor().accent,
    },
    dateContainer: {
        backgroundColor: themeColor().secondary,
        width: 350,
        height: 50,
        borderRadius: 30,
        marginBottom: 10,
    },
    foodContainer: {
        backgroundColor: themeColor().secondary,
        width: 350,
        height: 400,
        borderRadius: 30,
    }
})