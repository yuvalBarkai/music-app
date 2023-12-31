import { NavLink } from "react-router-dom"

export default () => {
    return <div>
        <NavLink className="absolute inset-x-0 top-0 h-16 p-5 space-x-4 text-2xl dark:text-white"
        to="/home">Home</NavLink>
        <nav className="absolute inset-x-10 top-10 h-16 p-5 space-x-6 dark:text-white text-text-base sm:text-3xl">
            <NavLink to="/arpeggiator">Arpeggiator</NavLink>
            <NavLink to="/intervals">Interval</NavLink>
            <NavLink to="/scales">Scales</NavLink>
        </nav>
    </div>
}