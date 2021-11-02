import {toggleFollowingProgress, UsersPagePropsType, usersPageReducer} from "./users-page-reducer";

let startState: UsersPagePropsType

beforeEach(() => {
    startState = {
        users: [
            {id: '123', followed: true, name: 'Ivan', status: 'looking for a job', photos: {large: '12', small: '23'}},
            {id: '456', followed: true, name: 'Igor', status: 'looking for a job', photos: {large: '34', small: '45'}},
            {
                id: '789',
                followed: false,
                name: 'Egor',
                status: 'looking for a job',
                photos: {large: '987', small: '597'}
            },
        ],
        page: {
            currentPage: 10,
            totalUsers: 100,
            pageSize: 5
        },
        isFetching: false,
        followingInProgress: []
    }
})

test('followingInProgress id should be added or removed from array', () => {

    const action = toggleFollowingProgress(true, '456')
    const action2 = toggleFollowingProgress(true, '789')
    const action3 = toggleFollowingProgress(false, '456')
    const arr = usersPageReducer(startState, action)
    const arr2 = usersPageReducer(arr, action2)
    const arr3 = usersPageReducer(arr2, action3)

    expect(arr.followingInProgress.length).toBe(1)
    expect(arr.followingInProgress[0]).toBe('456')
    expect(arr2.followingInProgress.length).toBe(2)
    expect(arr2.followingInProgress[1]).toBe('789')
    expect(arr3.followingInProgress.length).toBe(1)
    expect(arr3.followingInProgress[0]).toBe('789')

})