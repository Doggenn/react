import './Links.scss'

export default function Links({ header }) {
  return (
      <ul className='list'>
          {header.map((links, index) => 
              <li className='links' key={index}>
                      <a href={links.url}>{links.text}</a> 
            </li>
        )}
      </ul>
  )
}
