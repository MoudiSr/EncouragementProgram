import React from "react"
import DashboardLayout from "./DashboardLayout"

const BehaivorsPage = ({ isCurrent, setIsCurrent }) => {
    return (
        <>
            <DashboardLayout isCurrent={isCurrent} setIsCurrent={setIsCurrent}>
                
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-[#E9E9E9]">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    الـنـشــاط
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    التــاريخ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    مـلاحـظـات
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    فوتبول
                                </th>
                                <td class="px-6 py-4">
                                    2023-9-24
                                </td>
                                <td class="px-6 py-4">
                                    غير منضبط
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </DashboardLayout>
        </>
    )
}

export default BehaivorsPage