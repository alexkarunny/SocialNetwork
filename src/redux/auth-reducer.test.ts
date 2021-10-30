
import {AuthPropsType, authReducer, setUserData, UserDataProps} from "./auth-reducer";

test('login should be set', () => {

    const init: AuthPropsType  = {
        userData: {
            id: null,
            email: null,
            login: null
        },
        isAuth: false
    }

    const UserLoginInfo: UserDataProps = {
        id: 2,
        login: 'Mike',
        email: 'ruffalo@email.com',
    }

    const UserInfo = authReducer(init, setUserData(UserLoginInfo));

    expect(UserInfo.userData.id).toBe(2)
    expect(UserInfo.userData.login).toBe('Mike')
    expect(UserInfo.userData.email).toBe('ruffalo@email.com')
    expect(UserInfo.isAuth).toBeTruthy()
})