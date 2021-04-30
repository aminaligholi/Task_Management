

const actions = {
    async Verification({ commit, state }, data) {
        let Response={}
        let info={}
        let allUser = state.users;
        let correctUser = allUser.find(elem => elem.username == data.username);
        if (correctUser && correctUser.password == data.password) {
            Response={status:200 , text:'welcome'}
            state.Authentication=true;
            info = correctUser;
        } else {
            Response={state: 403 , text:"The password or username entered is incorrect."}
        }
        commit('setUserInformationEntered' , info)
        return Response
    },
   

}
export default actions