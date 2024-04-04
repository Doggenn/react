import React from 'react'

const users = ["Eren", "Mikasa", "Levi", "Armin"];

export default function ForUsers() {

    // ALTERNATIVA
    // const usersToPrint = []
    // for (const user of users) {
    //     usersToPrint.push(<p>{user}</p>)
    // }

    return (
        <div>
            {users.map((user, index) => <p key={index}>{user}</p>)}

            {/* {usersToPrint} */}

            {/* {
                [
                    <p>Eren</p>,
                    <p>Mikasa</p>,
                    <p>Levi</p>,
                    <p>Armin</p>,
                ]
            } */}
        </div>
    )
}
