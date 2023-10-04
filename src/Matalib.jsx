import React from "react";
import DashboardLayout from "./DashboardLayout";
import img1 from "./assets/2awsime/1.png"
import img2 from "./assets/2awsime/2.png"
import img3 from "./assets/2awsime/3.png"
import img4 from "./assets/2awsime/4.png"
import img5 from "./assets/2awsime/5.png"
import img6 from "./assets/2awsime/6.png"
import img7 from "./assets/2awsime/7.png"
import img8 from "./assets/2awsime/8.png"
import img9 from "./assets/2awsime/9.png"
import img10 from "./assets/2awsime/10.png"
import img11 from "./assets/2awsime/11.png"
import img12 from "./assets/2awsime/12.png"
import img13 from "./assets/2awsime/13.png"
import img14 from "./assets/2awsime/14.png"
import img15 from "./assets/2awsime/15.png"
import img16 from "./assets/2awsime/16.png"
import img17 from "./assets/2awsime/17.png"
import img18 from "./assets/2awsime/18.png"
import img19 from "./assets/2awsime/19.png"
import img20 from "./assets/2awsime/20.png"
import img21 from "./assets/2awsime/21.png"
import img22 from "./assets/2awsime/22.png"
import img23 from "./assets/2awsime/23.png"
import img24 from "./assets/2awsime/24.png"
import img25 from "./assets/2awsime/25.png"
import Wisam from "./Wisam";

const Matalib = () => {
    const data = [
        {img: img1, name: "حامل القرآن"}, 
        {img: img2, name: "المصلي"}, 
        {img: img3, name: "ناصر الحسين"},
        {img: img4, name: "عاشق المهدي"},
        {img: img5, name: "خادم المسجد"},
        {img: img6, name: "راكب الدراجة"},
        {img: img7, name: "الرياضي"},
        {img: img8, name: "السباح"},
        {img: img9, name: "المستكشف"},
        {img: img10, name: "الفلكي"},
        {img: img11, name: "الحاسوبي"},
        {img: img12, name: "الممثل"},
        {img: img13, name: "الرسام"},
        {img: img14, name: "المنشد"},
        {img: img15, name: "المصور"},
        {img: img16, name: "الطاهي"},
        {img: img17, name: "العقاد"},
        {img: img18, name: "المطالع"},
        {img: img19, name: "الرادود الحسيني"},
        {img: img20, name: "الإلقاء"},
        {img: img21, name: "المواطن الصالح"},
        {img: img22, name: "الفتى المقاوم"},
        {img: img23, name: "الخلوق"},
        {img: img24, name: "البيئي"},
        {img: img25, name: "المسعف"},
    ]
    const images = []

    data.map((d, key) => images.push(<Wisam key={key} img={d.img} name={d.name} />))



    return (
        <DashboardLayout>
            <div>
                <div id="awsime" className="grid border-2 border-gray-100 bg-gray-50 rounded-xl w-full p-2">
                    <h1 className="m-auto text-4xl p-4">
                        {"الأوسمة".split("").map((letter, key) => <span key={key} className="hover:text-5xl hover:text-[#00a88e]">{letter}</span>)}
                    </h1>
                    <div className="flex flex-wrap justify-center items-center">
                        {images}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Matalib;