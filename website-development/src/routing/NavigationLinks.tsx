import { NavLink } from "react-router-dom"

export default () => {
    return <nav className="absolute inset-x-0 top-0 h-16 p-5 space-x-4">
        <NavLink to="/arpeggiator">Arpeggiator</NavLink>
        <NavLink to="/intervals">Interval</NavLink>
        <NavLink to="/scales">Scales</NavLink>
    </nav>
}