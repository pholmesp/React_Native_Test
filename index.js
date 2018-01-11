import React from 'react';
import {AppRegistry, Text, TouchableOpacity, View, SectionList, StyleSheet, Dimensions, FlatList, Image, ScrollView, Alert, } from 'react-native';
import { TabNavigator } from 'react-navigation';

const Item_Width = Dimensions.get('window').width;


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count+1
        })
        Alert.alert('Successfully added!')
    }

    render() {
        return (
            <ScrollView style = {styles.container}>

                <View style = {styles.view}>

                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View><View style = {styles.box}>
                    <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                    <Text>Dish Name</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text> Order </Text>
                    </TouchableOpacity>

                </View><View style = {styles.box}>
                    <Image style = {styles.pic} source={require('./Images/Dish1.jpg')} />
                    <Text>Dish Name</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text> Order </Text>
                    </TouchableOpacity>

                </View>
                </View>
            </ScrollView>

            )
        }
}


class HotDeal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count+1
        })
        Alert.alert('Successfully added!')
    }

    render() {
        return (
            <ScrollView style = {styles.container}>

                <View style = {styles.view}>

                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish2.jpg')} />
                        <Text>Dish Name</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish2.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish2.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish2.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>
                    <View style = {styles.box}>
                        <Image style = {styles.pic} source={require('./Images/Dish2.jpg')} />
                        <Text>Dish Name</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text> Order </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>

        )
    }
}

class MyOrder extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{width: Item_Width, height: 100, backgroundColor: 'powderblue'}}>
                    <Text style = {{ padding: 22, fontSize: 42}}>My Orders:</Text>
                </View>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                    <Text style = {{ padding: 22, fontSize: 30}}>The first dish: XXXXX</Text>
                    <Text style = {{ padding: 22, fontSize: 30}}>The second dish: XXXXX</Text>
                    <Text style = {{ padding: 22, fontSize: 30}}>The thrid dish: XXXXX</Text>
                    <Text style = {{ padding: 22, fontSize: 30}}>The forth dish: XXXXX</Text>
                </View>

            </View>


        )

    }
}

export const SimpleApp = TabNavigator({
    Menu: { screen: Menu },
    HotDeals: { screen: HotDeal },
    MyOrders: { screen: MyOrder },
});

const styles= StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
    },

    box: {
        margin: 2,
        width: Item_Width/2 - 6,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pic: {
        flex: 1,
        width: Item_Width/2 -10,
    },
    V_button: {
        height: 10,
        width: 80,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    }
});

AppRegistry.registerComponent('Test', () => SimpleApp);