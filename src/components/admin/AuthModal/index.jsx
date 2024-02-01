import React from 'react'
import './style.scss'

const AuthModal = ({children, modalClassName, contentClasname}) => {
  return (
    <div className={`auth_modal ${modalClassName} fluid`}>
        <div className={`auth_content ${contentClasname}`}>
            {children}
        </div>
    </div>
  )
}

export default AuthModal