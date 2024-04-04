import './Menu.scss'

export default function Menu({ header }) {
    // console.log(header);
    return (
        <ul className="menu">
            {header.map((menu, index) =>
                <li className="link" key={index}>
                    <a href={menu.url}>{menu.text}</a>
                </li>
            )}
        </ul>
    )
}
