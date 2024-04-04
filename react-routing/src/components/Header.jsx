import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/users/5">User 5</Link>
                </nav>
            </header>
        </div>
    )
}
