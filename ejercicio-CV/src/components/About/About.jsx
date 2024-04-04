

export default function About({hero}) {
  return (
    <div>
      <div className="about card">
        {hero.aboutMe.map((item, i) => {
          return (
            <div key={i}>
              <p className="name">{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
