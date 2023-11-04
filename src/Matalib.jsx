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
        {img: img1, name: "حامل القرآن", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]}, 
        {img: img2, name: "المصلي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]}, 
        {img: img3, name: "ناصر الحسين", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img4, name: "عاشق المهدي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img5, name: "خادم المسجد", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img6, name: "راكب الدراجة", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img7, name: "الرياضي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img8, name: "السباح", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img9, name: "المستكشف", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img10, name: "الفلكي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img11, name: "الحاسوبي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img12, name: "الممثل", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img13, name: "الرسام", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img14, name: "المنشد", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img15, name: "المصور", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img16, name: "الطاهي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img17, name: "العقاد", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img18, name: "المطالع", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img19, name: "الرادود الحسيني", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img20, name: "الإلقاء", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img21, name: "المواطن الصالح", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img22, name: "الفتى المقاوم", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img23, name: "الخلوق", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img24, name: "البيئي", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
        {img: img25, name: "المسعف", requirements: ["يواظب على تلاوة القران", "يحفظ القرآن الكريم",]},
    ]
    const images = []

    data.map((d, key) => images.push(<Wisam key={key} img={d.img} name={d.name} requirements={d.requirements} />))



    return (
        <DashboardLayout>
            <div>
                <div id="awsime" className="grid border-2 border-gray-100 bg-gray-50 rounded-xl w-full p-2">
                    <h1 className="m-auto text-4xl p-4">
                        الأوسمة
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