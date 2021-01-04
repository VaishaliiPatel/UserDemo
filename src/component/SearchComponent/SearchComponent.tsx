import React, { Component } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SearchComponentStyle } from './SearchComponentStyle';
import Modal from 'react-native-modal';
import _ from 'lodash';
import { images } from '../../theme/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IMAGE_URL } from '../../utils/validators';

interface Props {
    IsOpen: any,
    navigation: any,
    fnToggleSearch(status: any): void,
    data: any
}
interface State {
    Id: string,
    Name: string,
    ImageUrl: any,
    searchList: any,
    searchValue: string

}
export default class SearchComponent extends Component<Props, State>{
    constructor(props: any) {
        super(props)

        this.state = {
            Id: '',
            Name: '',
            ImageUrl: '',
            searchList: [],
            searchValue: ''
        }
    }
    onPressSearch = () => {
        const data = _.filter(this.props.data, (text: any) => {
            return text.firstName.toLowerCase().includes(this.state.searchValue.toLowerCase());
        })
        this.setState({
            searchList: data
        })
        console.log("D Search ata", data)
    }
    renderUsers = (user: any, index: any) => {
        return (
            <View
                style={SearchComponentStyle.searchStyle}>
                <View
                    style={SearchComponentStyle.containerTwo}>
                    <View
                        style={{}}>
                        <Image source={{ uri: user && user.picture ? user.picture : IMAGE_URL }} style={SearchComponentStyle.containerThree}>

                        </Image>
                    </View>
                </View>
                <View style={SearchComponentStyle.containerFour}>
                    <Text style={SearchComponentStyle.containerFive}>{user.firstName}</Text>
                </View>
            </View>
        );
    };
    render() {
        return (
            <View>
                <Modal
                    isVisible={true}
                    deviceWidth={Dimensions.get('window').width}
                    deviceHeight={Dimensions.get('window').height}
                    animationIn="zoomIn"
                    animationOut="zoomOut"
                    animationInTiming={1000}
                    animationOutTiming={1000}>
                    <View style={SearchComponentStyle.mainContainer}>
                        <View style={SearchComponentStyle.flex8}>
                            <View style={SearchComponentStyle.headerContainer}>
                                <View style={SearchComponentStyle.headerSubContainer}>
                                    <Text style={SearchComponentStyle.textOne}>
                                        Search User
                                    </Text>
                                </View>
                            </View>
                            <View style={SearchComponentStyle.ViewContainer}>
                                <Input placeholder={"Enter Id"}
                                    value={this.state.searchValue}
                                    onChange={(e) => {
                                        this.setState({
                                            searchValue: (e.nativeEvent.text).trim(),
                                        },() =>{
                                            const data = _.filter(this.props.data, (text: any) => {
                                                return text.firstName.toLowerCase().includes(this.state.searchValue.toLowerCase());
                                            })
                                            this.setState({
                                                searchList: data
                                            }) 
                                        });
                                    }}
                                    rightIcon={
                                        <View style={SearchComponentStyle.containerOne}>
                                            <TouchableOpacity disabled={this.state.searchValue.length >= 1 ? false : true}
                                                onPress={() => this.onPressSearch()}>
                                                <Image source={this.state.searchValue.length >= 1 ? images.SearchGreen : images.Search} style={SearchComponentStyle.imgStyle}></Image>
                                            </TouchableOpacity>
                                        </View>
                                    }>
                                </Input>
                            </View>
                            <View style={SearchComponentStyle.flex84}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.searchList}
                                    renderItem={({ item, index }) =>
                                        this.renderUsers(item, index)}
                                        keyExtractor={(item,index) => index.toString()}></FlatList>
                            </View>
                        </View>
                        <View style={SearchComponentStyle.BtnContainer}>
                            <View style={SearchComponentStyle.CancelContainer}>
                                <Button
                                    onPress={(e) => {
                                        this.props.fnToggleSearch(false);
                                    }}
                                    buttonStyle={SearchComponentStyle.backBtnStyle}
                                    titleStyle={SearchComponentStyle.btntextstyle}
                                    title={'Back'}></Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
