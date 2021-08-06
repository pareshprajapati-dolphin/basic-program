import * as actionType from '../actions/actionType';

const instialState ={
    loading: false,
    token:'',
    userdata:false,

}

const authReducer= (  state= instialState , action) =>{

    switch( action.type){

        case actionType.AUTH_START:
            return{
                loading:true,
                token:null,
                userdata:false,
        };

        case actionType.AUTH_SUCCESS:
            console.log("userreducer is call")
            return {
                ...state,
                userdata:true,
                loading:false,
            };
        case actionType.AUTH_FAIL:
            return {
                ...state,
                userdata:false,
            };
        
        case actionType.AUTH_LOGOUT:
            return {
                userdata:false,
                loading: false,
            };
            
        default :
            return state
    }
};

export default authReducer;
