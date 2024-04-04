import "./Frutas.css"
export default function Frutas({ frutas }) {
    return (
      
        <div>
            <div className="box">
                {frutas.map((fruta, index) =>
                        <p key={index}>{fruta.name}</p>
                    )}
            </div>
      </div>
  )
}
