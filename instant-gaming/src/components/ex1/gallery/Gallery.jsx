import Card from "./Card";
import './Gallery.scss'


export default function Gallery({app}) {
    // console.log(app);
  return (
      <div className="row gallery">
          {app.map((cards, index) =>
              <div className="col-4" key={index}>
                  <Card card={cards.card}></Card>
            </div>
          )}
        </div>
  )
}
