// const pecados = ["Lujuria", "Soberbia", "Envidia", "Pereza", " Ira", "Avaricia", "Gula"]
export default function ForPecados({sins}) {
  return (
      <div>
          {sins.map((sin, index) => <p key={index}> {sin}</p> )}
      </div>
  )
}
