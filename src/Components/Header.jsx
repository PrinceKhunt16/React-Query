import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/rq-super-heroes'>Super Heroes</Link>
                </li>
                <li>
                    <Link to='/rq-parallal'>Parallal</Link>
                </li>
                <li>
                    <Link to='/rq-dynamic-parallal'>Dynamic Parallal</Link>
                </li>
                <li>
                    <Link to='/rq-dependent'>Dependent</Link>
                </li>
                <li>
                    <Link to='/rq-paginated'>Paginated</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
