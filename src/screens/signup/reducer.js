import Actiontypes from './actiontypes';

const initialState = {
  isLoggedIn : false
}

const Login = (state = initialState, action) =>{
  switch(action.type){
    case Actiontypes.REFRESH :{
      let tempState = JSON.parse(JSON.stringify(state));
      return tempState;
    }
    case Actiontypes.LOGIN :{
      let tempState = JSON.parse(JSON.stringify(state));
      tempState.isLoggedIn = action.payload;
      return tempState;
    }



    default: return state;
  }
}

export default Login;
