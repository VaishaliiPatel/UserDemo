import { Dimensions, StyleSheet } from "react-native";

export const EditUserStyle = StyleSheet.create({
    mainContainer:{ flex:1, backgroundColor: "#fff" ,marginBottom:Dimensions.get('window').height/5,marginTop:Dimensions.get('window').height/5},
    headerContainer:{ height: 40, backgroundColor: "#005cc6"},
    headerSubContainer:{ paddingTop: 10, paddingLeft: 10 },
    textOne:{
        textTransform: 'uppercase',
        color: '#ffffff', fontSize: 16
    },
    BtnContainer:{flex:0.2, flexDirection:'row',alignItems:'center',justifyContent:'center'},
    CancelContainer:{ justifyContent: 'center', alignItems: 'center',marginLeft:20 },
    btnStyle:{ borderRadius: 35, paddingLeft: 25, paddingRight: 25, height: 35, backgroundColor: '#a6bf38' },
    backBtnStyle:{ borderRadius: 35, paddingLeft: 25, paddingRight: 25, height: 35, backgroundColor: '#005cc6' },
    btntextstyle:{ fontSize: 14},
    DoneContainer:{justifyContent: 'center', alignItems: 'center'},
    ViewContainer:{alignItems: 'center',marginTop:20,marginLeft:10,marginRight:10},
    flex8:{ flex: 0.8 },
    inputStyle:{ borderBottomColor: '#737373', }
})