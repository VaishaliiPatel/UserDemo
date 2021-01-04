import { Dimensions, StyleSheet } from "react-native";

export const SearchComponentStyle = StyleSheet.create({
    BtnContainer:{flex:0.2, flexDirection:'row',alignItems:'center',justifyContent:'center'},
    CancelContainer:{ justifyContent: 'center', alignItems: 'center',marginLeft:20 },
    btnStyle:{ borderRadius: 35, paddingLeft: 25, paddingRight: 25, height: 35, backgroundColor: '#a6bf38' },
    backBtnStyle:{ borderRadius: 35, paddingLeft: 25, paddingRight: 25, height: 35, backgroundColor: '#005cc6' },
    btntextstyle:{ fontSize: 14},
    DoneContainer:{justifyContent: 'center', alignItems: 'center'},
    mainContainer:{ flex:1, backgroundColor: "#fff" ,marginBottom:Dimensions.get('window').height/5,marginTop:Dimensions.get('window').height/5},
    headerContainer:{ height: 40, backgroundColor: "#005cc6"},
    headerSubContainer:{ paddingTop: 10, paddingLeft: 10 },
    textOne:{
        textTransform: 'uppercase',
        color: '#ffffff', fontSize: 16
    },
    ViewContainer:{alignItems: 'center',marginTop:20,marginLeft:10,marginRight:10},
    flex8:{ flex: 0.8 },
    containerOne:{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 30, padding: 5 },
    imgStyle:{ height: 25, width: 25, marginLeft: 10, backgroundColor: '#FBFBF8' },
    flex84:{ flex: 0.84 },
    searchStyle:{
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#DCDCDC',
        height: 70,
        borderRadius: 10,
    },
    containerTwo:{ flex: 0.25, justifyContent: 'center', alignItems: 'center' },
    containerThree:{
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    containerFour:{ flex: 0.55, alignSelf: 'center' },
    containerFive:{ fontWeight: 'bold', fontSize: 15 }
})