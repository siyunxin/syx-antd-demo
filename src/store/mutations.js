export default{
    //修改点击菜单的值
    CHANGE_MENU_SUBKEY( state, value ){
        return state.menuIndex.selectedKeys = value
    },

    CHANGE_MENU_KEY ( state, value ){
        return state.menuIndex.openKeys = value
    }
}