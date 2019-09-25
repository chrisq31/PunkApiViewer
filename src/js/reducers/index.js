
import * as types from '../constants/action-types'

const initialState = {
    dataLoading:true,
  post: "Buzz",
    menuState:['Home'],
  posts: []
};

// need to set init detailed view from url param ?



function rootReducer(state = initialState, action) {

    console.log('switch (action.type)',action.type )

    switch (action.type) {

        case types.DATA_REQUESTED:
            console.log('DATA_REQUESTED' )
            return

        case types.DATA_LOADED:
            // randomise, so that the id of each entry object does not
            // necessarily match the index of the objects position
            // in the array - this should be done in tests really.
            //maybe not






            let array = action.payload;
            array.sort((elem1,elem2)=>Math.random()-Math.random());
            return {...state, posts: array,  dataLoading:false}

         case types.SHOW_DETAILED_VIEW:

             console.log ('SHOW_DETAILED_VIEW reducer........................',action.payload)
            // console.log ('SHOW_DETAILED_VIEW reducer state',state)
            return {...state, post: action.payload}


        default:
            return state
    }

}

export default rootReducer;
