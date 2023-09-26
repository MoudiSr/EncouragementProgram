import React from "react"
import mhmmd from "./assets/mhmmd.jpg"
import ahmad from "./assets/ahmad.jpg"

const leaders = [
    { name: "محمد السروجي", position: "قائد الفرقة", phone: "+961 78 831 474", image: mhmmd},
    { name: "أحمد زهير حرب", position: "أمين السر", phone: "+961 81 211 768", image: ahmad},
    { name: "علي الأكبر حرب", position: "نائب قائد الفرقة", phone: "+961 76 527 901", image: ""},
    { name: "علي المرتضى منصور", position: "مساعد قائد", phone: "+961 70 221 036", image: ""},
]

const Contact = () => {
    return (
        <>
            <div className="text-right">
                <h1 className="text-4xl m-2 mb-10 tracking-tight text-gray-900 sm:text-6xl">التواصل#</h1>
            </div>
            <div className="flex flex-wrap justify-center text-right">
            {leaders.map((leader, index) => (
                <div key={index} className="m-4 p-4 border border-gray-300 rounded-lg">
                <img src={leader.image} alt={leader.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">{leader.name}</h2>
                <p className="text-gray-700 mb-2">{leader.position}</p>
                <a href={`https://wa.me/${leader.phone.replaceAll(" ","")}`} className="text-gray-700">{leader.phone}</a>
                </div>
            ))}
            </div>
        </>
    )
}

export default Contact