import React, { Component } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { images } from '../../theme/images';
import { Button } from 'react-native-elements';
import { RequestUpdateUserData, UserState } from '../../store/User/types';
import { connect } from 'react-redux';
import { deleteUser, GetUserData, upadteUser } from '../../store/User/actions';
import AddDataComponent from '../../component/AddDataComponent/AddDataComponent';
import { HomeScreenStyle } from './HomeScreenStyle'
import SearchComponent from '../../component/SearchComponent/SearchComponent';
import { IMAGE_URL } from '../../utils/validators';
import EditUserComponent from '../../component/EditUserComponent/EditUserComponent';
import sortBy from "lodash/sortBy";
interface Props {
  navigation: any;
  UserState: UserState,
  getUser: typeof GetUserData
  deleteUser: typeof deleteUser;
}
interface State {
  Name: string;
  UserList: any;
  Mobile: string;
  isEdit: boolean;
  index: number;
  search: string;
  searchList: any[];
  isAdd: boolean;
  isSearch: boolean;
  editDataList: any;
}
class Homescreen extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      Name: '',
      UserList: [],
      Mobile: '',
      isEdit: false,
      isAdd: false,
      index: -1,
      search: '',
      searchList: [],
      isSearch: false,
      editDataList: []
    };
  }

  componentDidMount() {
    this.props.getUser();
  }
  componentDidUpdate(prevProps: any, prevState: State) {
    if (this.props !== prevProps) {
      if (this.props.UserState !== prevProps.UserState) {
        this.setState({ UserList: this.props.UserState.RequestUserData })
      }
    }
  }
  renderUsers = (user: any, index: any) => {
    return (
      <View style={HomeScreenStyle.containerOne}>
        <View style={HomeScreenStyle.containerTwo}>
          <View style={{}}>
            <Image source={{ uri: user && user.picture ? user.picture : IMAGE_URL }} style={HomeScreenStyle.imgOne}>
            </Image>
          </View>
        </View>
        <View style={HomeScreenStyle.containerThree}>
          <Text style={HomeScreenStyle.textStyleOne}>{user.firstName}</Text>
        </View>
        <View
          style={HomeScreenStyle.containerFour}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                isEdit: true,
                editDataList: user
              });
            }}>
            <Image source={images.Edit} style={HomeScreenStyle.imgStyleTwo}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={HomeScreenStyle.imgContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.deleteUser(user.id)
            }}>
            <Image
              source={images.Delete}
              style={HomeScreenStyle.imgStyleTwo}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  fnAddData = (status: any) => {
    this.setState({
      isAdd: status
    })
  }
  fnToggleSearch = (status: any) => {
    this.setState({
      isSearch: status
    })
  }
  fnEditData = (status: any) => {
    this.setState({
      isEdit: status
    })
  }
  render() {
    return (
      <SafeAreaView style={HomeScreenStyle.safeAreaStyle}>
        <KeyboardAvoidingView
          style={HomeScreenStyle.flexOne}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={HomeScreenStyle.BtnContainer}>
            <View style={HomeScreenStyle.marginLeft20}>
              <TouchableOpacity onPress={() => {
                const data = [].concat(this.state.UserList).sort((a, b) => a.firstName > b.firstName ? 1 : -1)
                this.setState({ UserList: data })
                // this.setState(prevState => ({
                //   UserList: sortBy(prevState, ['firstName'])
                // }))
              }}>
                <Image source={images.ascendingIcon} style={HomeScreenStyle.imgStyleThree}></Image>
              </TouchableOpacity>
            </View>
            <View style={HomeScreenStyle.marginLeft20}>
              <TouchableOpacity onPress={() => {
                const data = [].concat(this.state.UserList).sort((a, b) => a.firstName < b.firstName ? 1 : -1)
                this.setState({ UserList: data })
              }}>
                <Image source={images.descendingIcon} style={HomeScreenStyle.imgStyleThree}></Image>
              </TouchableOpacity>
            </View>
            <View style={HomeScreenStyle.marginLeft20}>
              <TouchableOpacity onPress={() => {
                this.setState({
                  isSearch: true
                })
              }}>
                <Image source={images.SearchText} style={HomeScreenStyle.imgStyleFour}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeScreenStyle.flexOne}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.UserList}
              renderItem={({ item, index }) =>
                this.renderUsers(item, index)
              }></FlatList>
          </View>
          <View style={HomeScreenStyle.containerFive}>
            <View
              style={HomeScreenStyle.containerSix}>
              <Button title={'Add User'} onPress={() => { this.setState({ isAdd: true }) }}></Button>
            </View>
          </View>
          {this.state.isAdd && (
            <AddDataComponent
              navigation={this.props.navigation}
              IsOpen={this.state.isAdd ? this.state.isAdd : false}
              fnAddData={this.fnAddData}
              data={this.state.UserList}
            ></AddDataComponent>
          )}
          {
            this.state.isSearch && (
              <SearchComponent
                IsOpen={this.state.isSearch}
                navigation={this.props.navigation}
                fnToggleSearch={this.fnToggleSearch}
                data={this.state.UserList}
              ></SearchComponent>
            )}
          {
            this.state.isEdit && (
              <EditUserComponent
                IsOpen={this.state.isEdit}
                navigation={this.props.navigation}
                fnEditData={this.fnEditData}
                data={this.state.editDataList}
              ></EditUserComponent>
            )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state: any) => ({
  UserState: state
});
const mapDispatchToProps = (dispatch: any) => ({
  getUser: () => {
    dispatch(GetUserData())
  },
  deleteUser: (request: any) => {
    dispatch(deleteUser(request))
  },
  updateUser: (request: RequestUpdateUserData) => {
    dispatch(upadteUser(request))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Homescreen)
