import './Promotion.scss'

export default function Promotion({app}) {
    // console.log(app)
  return (
        <div className='box-promo'>
          <img className='img-promo' src={app.background} alt={app.title} />
          <div className='d-flex flex-column'>
              <div>
                <h2>{app.title}</h2>
              </div>
              <div className='d-flex promo-marg-pad'>
                  <p className='discount'>{app.discount}% </p>    
                  <p className='bg-invisible'>{app.price}</p> 
              </div>
          </div>
        </div>
  )
}
