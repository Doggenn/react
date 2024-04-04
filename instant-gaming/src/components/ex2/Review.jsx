import './Review.scss'
import 'bootstrap/scss/bootstrap.scss';
import ReactStars from 'react-stars'


export default function Review({ review }) {
    return (
        <div className='review'>
            <div className=''>
                <div>
                <h4>{ review.title}</h4>
                <img src={review.avatar} alt="" />
                </div>
                <div>
                <p>{review.description}</p>
                <p>{<ReactStars
                        count={5}
                        value={review.rating}
                        size={24}
                        color2={'#ffd700'}
                        edit={false} 
                    />}
                    {review.date}</p>
                </div>
                {/* {console.log(review)} */}
            </div>
            
        </div>
  )
}
