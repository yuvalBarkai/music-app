import { Navigate, Route, Routes } from "react-router-dom"
import Arpeggiator from "../components/Arpeggiator"
import Intervals from "../components/Intervals"
import Scales from "../components/Scales"
import Home from "../components/Home"

export default () => {
    return <div className="">
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/arpeggiator" element={<Arpeggiator />} />
            <Route path="/intervals" element={<Intervals />} />
            <Route path="/scales" element={<Scales />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    </div>
}