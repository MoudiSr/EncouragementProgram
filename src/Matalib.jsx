import React from "react";
import DashboardLayout from "./DashboardLayout";
import wisam from "./assets/2awsime/1.png"
import Wisam from "./Wisam";

const Matalib = () => {
    const images = []

    for (let i = 0; i < 10; i++) {
        images.push(
            <Wisam img={wisam} key={i} />
        )
    }


    return (
        <DashboardLayout>
            <div>
                <div id="awsime" className="grid border-2 border-gray-100 bg-gray-50 rounded-xl w-full p-2">
                    <h1 className="m-auto text-4xl p-2 ">الأوسمة</h1>
                    <div className="flex flex-wrap">
                        {images}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Matalib;