import React from 'react'
import PropTypes from 'prop-types'

function SimpleComponent({ onLogin, onLogOut, isAuth }) {
    if (!isAuth) {
        return (
            <button
                className='btn btn-primary'
                onClick={onLogin}
            >
                Войти
            </button>
        )
    }

    return (
        <button
            className='btn btn-primary'
            onClick={onLogOut}
        >
            Выйти из системы
        </button>
    )
}

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
}

export default SimpleComponent
