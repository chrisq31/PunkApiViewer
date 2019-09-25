//action creators

import { DATA_REQUESTED,SHOW_DETAILED_VIEW,} from "../constants/action-types";

export const showDetailedView = payload => ({
    type: SHOW_DETAILED_VIEW,
    payload
})

export const getData =() => ({
    type: DATA_REQUESTED

})






