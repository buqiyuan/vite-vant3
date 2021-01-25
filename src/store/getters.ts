import {UserState} from './modules/user'

const getters = {
  token: (state: UserState) => state.token,
  openid: (state: UserState) => state.openid,
};

export default getters;
