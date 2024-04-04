export default function Edad({edad}) {
  return (
      <div>{edad} años. En España seria
          {edad >= 18 ? <span> mayor de edad</span> : <span> menor de edad</span> }
      </div>
  )
}
