import React from "react"
import DashboardLayout from "./DashboardLayout"

const grades = [
  { type: "الحضور", grade: 10, rating: "مجلي"},
  { type: "المرصوص", grade: 10, rating: "مجلي"},
  { type: "تحقيق مطالب وأوسمة", grade: 10, rating: "مجلي"},
  { type: "الانضباط", grade: 10, rating: "مجلي"},
]


const Dashboard = ({isCurrent, setIsCurrent }) => {
  return (
      <DashboardLayout isCurrent={isCurrent} setIsCurrent={setIsCurrent} >
          <div>
            <h1 className="text-center text-4xl font-bold mb-6">العلامة النهائية</h1>
            <div className="justify-center items-center flex bg-green-400 hover:bg-green-300 hover:border-green-400 w-32 h-32 rounded-full m-auto p-5 text-3xl border-b-4 border-b-green-600">
                10/10
            </div>
            <div className="flex flex-wrap justify-center m-10">
              {grades.map(item => <div className="border-2 rounded-xl m-4 p-8 md:w-[25%] w-40 text-right border-gray-300 hover:border-gray-500 text-xl">
                <h1 className="font-bold text-3xl">{item.type}</h1>
                <p className="mt-4">10/{item.grade}</p>
                <p className="mt-2">{item.rating}</p>
              </div>)}

            </div>
          </div>
          
          
      </DashboardLayout>
  )
}

export default Dashboard