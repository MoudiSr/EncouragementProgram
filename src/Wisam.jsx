import { motion } from "framer-motion"
import React from "react"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {AiOutlineClose} from "react-icons/ai"

const Wisam = ({img, name, requirements}) => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <motion.div className="w-40">
            <motion.img  src={img} onClick={() => setOpen(true)} />
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-base flex justify-start items-center font-semibold leading-6 text-gray-900">
                                    <button className="mr-auto">
                                        <AiOutlineClose onClick={() => setOpen(false)} />
                                    </button>
                                    وسام {name}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <img src={img} className="w-[100%] h-auto" />
                                    <p className="text-sm text-right text-gray-500">
                                            {requirements.map((requirement, index) => (
                                                <li key={index} dir="rtl" >{requirement}</li>
                                            ))}
                                    </p>    
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <a href="#" onClick={() => setOpen(false)} className="decoration-none">خروج</a>
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>
        </motion.div>
    )
}
export default Wisam