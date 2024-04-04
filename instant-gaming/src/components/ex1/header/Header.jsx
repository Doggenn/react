import Links from "./Links";
import Logo from "./Logo";
import Menu from "./Menu";


export default function Header({app}) {
  return (
    <div className="d-flex">
      <Logo header={app.logo}></Logo>
      <div>
      <Links header={app.links}></Links>
      <Menu header={app.menu}></Menu>

      </div>
    </div>
  )
}
