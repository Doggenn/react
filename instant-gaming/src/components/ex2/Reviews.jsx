import Review from "./Review"
import 'bootstrap/scss/bootstrap.scss';
import './Reviews.scss'

export default function Reviews({ app }) {

  return (
      <div className="row box">
          
            {/* {data2.map((reviews, index) => {
                <div key={index}>
                    <Reviews reviews={reviews}></Reviews>
                </div>
            })} */}
            {app.map((review2, index) => 
                    <div className="col-2 box-b rev-p" key={index}>
                        <Review review={review2.review}></Review>
                    </div>
                
            )}
          
    </div>
  )
}
