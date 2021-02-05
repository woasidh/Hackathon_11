import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../_actions/user_actions'

function Logout() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser());
        window.location.href="/#/"
    })

    return (
        <div>
        </div>
    )
}

export default Logout
