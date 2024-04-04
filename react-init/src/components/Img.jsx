import "./Img.css"
export default function Img({ url }) {
    return (
        <div>
            <img className="imagen" src={url}/>
        </div>
    )
}
