import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoNasmou from "./assets/logo_marhale.png"
import pic1 from "./assets/1.jpg"
import pic2 from "./assets/5.jpg"
import pic3 from "./assets/3.jpg"
import pic4 from "./assets/4.jpg"
import Carousel from './Carousel'
import { Link } from "react-scroll"
import shi3ar from "./assets/shi3ar_kashaf.png"
import Contact from './Contact'
import { motion } from "framer-motion"


const navigation = [
  { name: 'الصفحة الرئيسية', href: 'part1' },
  { name: 'الصور', href: 'part2' },
  { name: 'الاحصائيات', href: 'part3' },
  { name: 'التواصل', href: 'part4' },
]

const slides = [
  pic1,
  pic2,
  pic3,
  pic4,
]



export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.div 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <header 
        className="absolute inset-x-0 top-0 z-50"
        
      >
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={LogoNasmou}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              تسجيل دخول <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={LogoNasmou}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    تسجيل دخول
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div 
        id="part1" 
        className="relative isolate px-6 pt-14 lg:px-8"
        
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f79326] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div>
            <img src={shi3ar} className="h-48 m-auto" />
          </div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 bg-[#128b49] text-white ring-1 ring-gray-900/10 hover:ring-gray-900">
                الموقع الخاص بفرقة الكشافة - جبشيت
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              كشافة الامام المهدي (عج)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              أجيال_تسموُ_وتمهد#
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div 
        id="part2" 
        className="relative isolate px-6 pt-14 lg:px-8"
        
      >
        <div className="text-right">
            <h1 className="text-4xl m-2 mb-10 tracking-tight text-gray-900 sm:text-6xl">الصور#</h1>
        </div>
         <Carousel images={slides}/>
      </div>

      <div 
        id="part3" 
        className="relative isolate px-6 pt-14 lg:px-8"
        
      >
        <div className="text-right">
            <h1 className="text-4xl m-2 mb-10 tracking-tight text-gray-900 sm:text-6xl">إحصائيات#</h1>
        </div>
      </div>

      <div 
        id="part4" 
        className="relative isolate px-6 pt-14 lg:px-8"
        
      >
        <Contact />
      </div>
      
    </motion.div>
  )
}
