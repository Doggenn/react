import "./Education.css";

export default function Education({ education }) {
  return (
        <div>
      <div className="education card">
        {education.map((item,i) => {
          return (
            <div key={i}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
