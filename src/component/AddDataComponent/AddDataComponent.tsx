import React, { Component } from 'react';
import { Alert, Dimensions, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { addUser } from '../../store/User/actions';
import { RequestUserData, UserState } from '../../store/User/types';
import { isNull, RegEx } from '../../utils/validators';
import { AddDataStyle } from './AddDataComponentStyle'

interface Props {
    IsOpen: any,
    navigation: any,
    fnAddData(status: any): void,
    UserState: UserState,
    addUser: typeof addUser;
    data: any
}
interface State {
    Id: string,
    Name: string,
    ImageUrl: any,
    UserList: any

}
class AddDataComponent extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            Id: '',
            Name: '',
            ImageUrl: '',
            UserList: this.props.data
        }
    }
    onAddUserData = () => {
        if (this.state.Id.length < 10) {
            Alert.alert("User id should be minimum length of 10")
            return;
        }
        if (isNull(this.state.Name)) {
            Alert.alert("Please enter user name")
            return;
        }
        if (this.state.UserList && this.state.UserList.length > 0) {
            if (this.state.UserList.filter((user: any) => { return user.id == this.state.Id }).length > 0) {
                Alert.alert("User already added!")
            }
            else {
                this.props.addUser({
                    id: this.state.Id,
                    picture: '',
                    firstName: this.state.Name
                })
                this.props.fnAddData(false)
            }
        }
        else{
            this.props.addUser({
                id: this.state.Id,
                picture: '',
                firstName: this.state.Name
            })
            this.props.fnAddData(false)
        }

    }
    render() {
        return (
            <View>
                <Modal
                    isVisible={this.props.IsOpen}
                    deviceWidth={Dimensions.get('window').width}
                    deviceHeight={Dimensions.get('window').height}
                    animationIn="zoomIn"
                    animationOut="zoomOut"
                    animationInTiming={1000}
                    animationOutTiming={1000}>
                    <View style={AddDataStyle.mainContainer}>
                        <View style={AddDataStyle.flex8}>
                            <View style={AddDataStyle.headerContainer}>
                                <View style={AddDataStyle.headerSubContainer}>
                                    <Text style={AddDataStyle.textOne}>
                                        Add User
                                    </Text>
                                </View>
                            </View>
                            <View style={AddDataStyle.ViewContainer}>
                                <Input placeholder={"Enter Id"} maxLength={20} value={this.state.Id} onChange={(e) => {
                                    this.setState({
                                        Id: (e.nativeEvent.text).trim(),
                                    });
                                }}>
                                </Input>
                                <Input placeholder={'Enter Name'} value={this.state.Name} style={AddDataStyle.inputStyle} onChange={(e) => {
                                    this.setState({
                                        Name: e.nativeEvent.text
                                    })
                                }}>
                                </Input>
                            </View>
                        </View>
                        <View style={AddDataStyle.BtnContainer}>
                            <View style={AddDataStyle.CancelContainer}>
                                <Button
                                    onPress={(e) => {
                                        this.onAddUserData();
                                    }}
                                    buttonStyle={AddDataStyle.btnStyle}
                                    titleStyle={AddDataStyle.btntextstyle}
                                    title={'Add'}></Button>
                            </View>
                            <View style={AddDataStyle.CancelContainer}>
                                <Button
                                    onPress={(e) => {
                                        this.props.fnAddData(false);
                                    }}
                                    buttonStyle={AddDataStyle.backBtnStyle}
                                    titleStyle={AddDataStyle.btntextstyle}
                                    title={'Back'}></Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const mapStateToProps = (state: any) => ({
    UserState: state
});
const mapDispatchToProps = (dispatch: any) => ({
    addUser: (request: RequestUserData) => {
        dispatch(addUser(request))
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddDataComponent)
