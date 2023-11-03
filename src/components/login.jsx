import React from 'react'

const login = () => {
    const handleClick = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=952a7de777591e2e2a4e&redirect_uri=http://localhost:5173/auth`;
    }
    return (
        <>
            <div className="content unauthorized">
                <div className="top">
                    <h1>Happy to see you<br />newcomer 👋</h1>
                </div>
                <div className="content-bottom">
                    <a className="btn" onClick={handleClick}>SIGN IN WITH GITHUB</a>
                    <p className="sign-in-text">in order to get started</p>
                </div>
            </div>
            <div className="content authorized" style={{ display: "none" }}>
                <div className="top">
                    <h1><span className="party-popper">🎉</span><br />Awesome!<br />You're authorized 🔒</h1>
                </div>
            </div>
        </>
    )
}

export default login