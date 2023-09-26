import React from "react"
import DashboardLayout from "./DashboardLayout"


const Dashboard = ({isCurrent, setIsCurrent}) => {
    return (
        <DashboardLayout isCurrent={isCurrent} setIsCurrent={setIsCurrent}>
            <h1>Hello</h1>
        </DashboardLayout>
    )
}

export default Dashboard