import DashboardLayout from "./DashboardLayout"
import { motion } from "framer-motion"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const BehaivorsPage = () => {

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const handleDayClick = () => {
        setOpen(true)
    }

    return (
        <DashboardLayout>
            <h1 className="text-right text-2xl">ملاحظات سلوكية</h1>
            
        </DashboardLayout>
    )
}

export default BehaivorsPage