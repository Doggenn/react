const users = ["Eren", "Mikasa", "Levi", "Armin"]

export default function ForUsers() {
  return (
      <div>
          {users.map((user, index) => <p key={index}> {user} </p> )}
      </div>
  )
}
