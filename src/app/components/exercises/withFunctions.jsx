import React from 'react'

import CardWrapper from '../common/Card'

const withFunctions = Component => () => {
    const isAuth = localStorage.getItem('auth')

    const LoginHandler = () => {
        localStorage.setItem('auth', 'token')
    }

    const LogOutHandler = () => {
        localStorage.removeItem('auth')
    }

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={LoginHandler}
                onLogOut={LogOutHandler}
            />
        </CardWrapper>
    )
}

export default withFunctions
