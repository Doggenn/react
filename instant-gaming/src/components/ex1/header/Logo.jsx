import './Logo.scss'

export default function Logo(header) {
    // console.log(header.header.img)
  return (
      <>
        <img className="logo" src={header.header.img} alt="" />
      </>
  )
}
