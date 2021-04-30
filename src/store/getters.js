const getters = {
    getheaderType(state) {
        return state.headerType
    },
    getUserInformationEntered(state) {
        return state.userInformationEntered;
    },
    getAllUsers(state){
        return state.users;
    }
}
export default getters