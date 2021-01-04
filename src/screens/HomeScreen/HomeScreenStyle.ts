import { StyleSheet } from "react-native";

export const HomeScreenStyle = StyleSheet.create({
    BtnContainer:{flex:0.06, flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginRight:20},
    sortContainer:{ justifyContent: 'center', alignItems: 'center',marginLeft:20 },
    btnStyle:{ paddingLeft: 25, paddingRight: 25, height: 35, backgroundColor: '#a6bf38' },
    backBtnStyle:{  height: 35,  },
    btntextstyle:{ fontSize: 14},
    searchContainer:{justifyContent: 'center', alignItems: 'center'},
    ViewContainer:{alignItems: 'center',marginTop:20,marginLeft:10,marginRight:10},
    containerOne:{
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        height: 70,
        borderRadius: 10,
      },
      containerTwo:{ flex: 0.25, justifyContent: 'center', alignItems: 'center' },
      imgOne:{
        height: 60,
        width: 60,
        borderRadius: 30,
      },
      containerThree:{ flex: 0.55, alignSelf: 'center' },
      textStyleOne:{ fontWeight: 'bold', fontSize: 15 },
      containerFour:{ flex: 0.1, justifyContent: 'center', alignItems: 'center' },
      imgStyleTwo:{ height: 20, width: 20 },
      imgContainer:{ flex: 0.1, justifyContent: 'center', alignItems: 'center' },
      flexOne:{ flex: 1 },
      marginLeft20:{marginLeft:20},
      imgStyleThree:{ height: 40, width: 40 },
      imgStyleFour:{ height: 25, width: 25 },
      flex84:{ flex: 0.84 },
      containerFive:{ flex: 0.1},
      containerSix:{
        marginTop: 20,
        width: "40%",
        alignSelf: 'center',
      },
      safeAreaStyle:{flex:1,justifyContent: 'space-between', }


})