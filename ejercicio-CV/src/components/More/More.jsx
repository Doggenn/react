

export default function More({languages, habilities, volunteer}) {
  return (
   <div>
      <div className="education card">
        <h3>Languages</h3>
        <p>📕{languages.language}</p>
        <p>✏️{languages.wrlevel}</p>
        <p>🗣️{languages.splevel }</p>
      </div>
      <div className="education card">
        <h3>Habilities</h3>
        {habilities.map((item,i) => {
          return (
            <div key={i}>
              <p className="name">🔧 {item}</p>
            </div>
          );
        })}
      </div>
      <div className="education card">
        {volunteer.map((item,i) => {
          return (
            <div key={i}>
              <p className="name">🥽 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
