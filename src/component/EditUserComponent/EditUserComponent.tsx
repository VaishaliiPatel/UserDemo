import React, { Component } from 'react';
import { Alert, Dimensions, Platform, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { addUser, upadteUser } from '../../store/User/actions';
import { RequestUpdateUserData, RequestUserData, UserState } from '../../store/User/types';
import { isNull, RegEx } from '../../utils/validators';
import { EditUserStyle } from './EditUserStyle'

interface Props {
    IsOpen: any,
    navigation: any,
    fnEditData(status: any): void,
    UserState: UserState,
    updateUser: typeof upadteUser;
    data:any;
}
interface State {
    Id: string,
    Name: string,
    ImageUrl: any,

}
class EditUserComponent extends Component<Props, State> {
    constructor(props: any) {
        super(props)

        this.state = {
            Id: this.props.data && this.props.data.id,
            Name: this.props.data && this.props.data.firstName,
            ImageUrl:  this.props.data && this.props.data.picture
        }
    }
    onEditUserData = () => {
        if (this.state.Id.length < 10) {
            Alert.alert("User id should be minimum length of 10")
            return;
        }
        if (isNull(this.state.Name)) {
            Alert.alert("Please enter user name")
            return;
        }
        this.props.updateUser({
            id: this.state.Id,
            picture: this.state.ImageUrl,
            firstName: this.state.Name
        })
        this.props.fnEditData(false)
     
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
                    <View style={EditUserStyle.mainContainer}>
                        <View style={EditUserStyle.flex8}>
                            <View style={EditUserStyle.headerContainer}>
                                <View style={EditUserStyle.headerSubContainer}>
                                    <Text style={EditUserStyle.textOne}>
                                        Edit User
                                    </Text>
                                </View>
                            </View>
                            <View style={EditUserStyle.ViewContainer}>
                                <Input placeholder={"Enter Id"} maxLength={20} disabled={true} value={this.state.Id} onChange={(e) => {
                                    this.setState({
                                        Id: (e.nativeEvent.text).trim(),
                                    });
                                }}>
                                </Input>
                                <Input placeholder={'Enter Name'} value={this.state.Name} style={EditUserStyle.inputStyle} onChange={(e) => {
                                    this.setState({
                                        Name: e.nativeEvent.text
                                    })
                                }}>
                                </Input>
                            </View>
                        </View>
                        <View style={EditUserStyle.BtnContainer}>
                            <View style={EditUserStyle.CancelContainer}>
                                <Button
                                    onPress={(e) => {
                                        this.onEditUserData();
                                    }}
                                    buttonStyle={EditUserStyle.btnStyle}
                                    titleStyle={EditUserStyle.btntextstyle}
                                    title={'Edit'}></Button>
                            </View>
                            <View style={EditUserStyle.CancelContainer}>
                                <Button
                                    onPress={(e) => {
                                        this.props.fnEditData(false);
                                    }}
                                    buttonStyle={EditUserStyle.backBtnStyle}
                                    titleStyle={EditUserStyle.btntextstyle}
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
    updateUser: (request: RequestUpdateUserData) => {
        dispatch(upadteUser(request))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(EditUserComponent)
