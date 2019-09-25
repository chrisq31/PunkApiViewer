import reducer from '../js/reducers/'
import * as types from '../js/constants/action-types'

/*
describe('data reducer', () => {
    it('should return the initial data state');
    it('should handle DATA_REQUESTED');
    it('should handle DATA_LOADED');
    it('should handle "API_ERRORED');

});

describe('detailed view reducer', () => {
    it('should return the initial view state');
    it('should SHOW_DETAILED_VIEW');
    it('shouldSHOW_HOME_VIEW');


});
*/

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                detailedView: [],
                posts: []

            }
        )
    })

    it('should handle SHOW_DETAILED_VIEW', () => {

        const detailedViewAction = {
            type: types.SHOW_DETAILED_VIEW,
            payload: 'Buzz',
        };
        expect(
            reducer({}, {
                detailedViewAction
            })
        ).toEqual(
            {
                detailedView: 'Buzz'


            }
        )



    })


})
