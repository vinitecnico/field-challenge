import React from 'react'
import "./styles.scss";

const Content = ({ noBgColor, children, ...props}) => {
    return (
        <main className="content">
            <div className={`col-10 offset-1 ${noBgColor && 'no-bg-color'}`}>
                {children}
            </div>
        </main>
    )
}

export default Content