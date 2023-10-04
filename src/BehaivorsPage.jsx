import React from "react"
import DashboardLayout from "./DashboardLayout"
import { motion } from "framer-motion"

const behaivors = [
    {date: "2023-8-12", behaivor: "ملاحظة سلوكية 1"},
    {date: "2023-8-13", behaivor: "ملاحظة سلوكية 2"},
    {date: "2023-8-14", behaivor: "ملاحظة سلوكية 3"},
    {date: "2023-2-1", behaivor: "ملاحظة سلوكية 4"},
    {date: "2023-2-2", behaivor: "ملاحظة سلوكية 5"},
    {date: "2023-2-3", behaivor: "ملاحظة سلوكية 6"},
    {date: "2023-2-4", behaivor: "ملاحظة سلوكية 7"},
    {date: "2023-2-5", behaivor: "ملاحظة سلوكية 8"},
    {date: "2023-2-6", behaivor: "ملاحظة سلوكية 9"},
    {date: "2023-2-7", behaivor: "ملاحظة سلوكية 10"},
    {date: "2023-2-8", behaivor: "ملاحظة سلوكية 11"},
    {date: "2023-2-9", behaivor: "ملاحظة سلوكية 12"},
    {date: "2023-2-10", behaivor: "ملاحظة سلوكية 13"},
    {date: "2023-2-11", behaivor: "ملاحظة سلوكية 14"},
    {date: "2023-2-12", behaivor: "ملاحظة سلوكية 15"},
    {date: "2023-2-13", behaivor: "ملاحظة سلوكية 16"},
]

const BehaivorsPage = () => {
    return (
        <DashboardLayout>
            <h1 className="text-right text-2xl">ملاحظات سلوكية</h1>
            {behaivors.map((behaivor, index) => (
                <motion.div key={index} className="border border-[#00a88e] bg-[#00a88e] hover:border-slate-500 text-white rounded-lg p-4 my-2"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1, x: [ -200, 0 ] }}
                    transition={{type: "spring", damping: 10, stiffness: 100}}
                >
                    <h2 className="text-right text-xl">{behaivor.date}</h2>
                    <p className="text-right">{behaivor.behaivor}</p>
                </motion.div>
            ))}
        </DashboardLayout>
    )
}

export default BehaivorsPage