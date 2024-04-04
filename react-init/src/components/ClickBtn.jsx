

export default function ClickBtn() {
    const clicked = () => {
        console.log("Me ha clicado.")
    }
  return (
      <div>
          <button onClick={clicked}>Click Me</button>
      </div>
  )
}
