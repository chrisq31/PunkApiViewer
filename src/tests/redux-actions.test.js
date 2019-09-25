import * as actions from '../js/actions/'
import * as types from '../js/constants/action-types'


describe('actions', () => {
    it('should create an action to get a detailed view Buzz', () => {
        const payload = 'Buzz'
        const expectedAction = {
            type: types.SHOW_DETAILED_VIEW,
            payload
        }
        expect(actions.showDetailedView(payload)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to get a detailed view Fake lager', () => {
        const payload = 'Fake Lager'
        const expectedAction = {
            type: types.SHOW_DETAILED_VIEW,
            payload
        }
        expect(actions.showDetailedView(payload)).toEqual(expectedAction)
    })
})
