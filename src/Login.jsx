import { useState } from "react"
import avatar from "./assets/kasehefe.png"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Collapse from "@mui/material/Collapse"

const Login = ({setAccount, account}) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [showAlert, setShowAlert] = useState(false)

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (username === "admin" && password === "admin") {
      setAccount({
        username: username,
      })
      localStorage.setItem("account", JSON.stringify({
        username: username,
      }))
      navigate("/dashboard")
    } else {
      setShowAlert(true)
    }
  }

  return (
    <>
      <motion.div 
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[10rem] rounded-full w-auto"
            src={avatar}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ادخل الى ملفك الشخصي
          </h2>
        </div>

        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Collapse in={showAlert}>
            <div class="mb-2 text-right bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              
              <span class="absolute top-0 bottom-0 left-0 px-2 py-3">
                <button onClick={() => setShowAlert(false)}>
                  <svg class="fill-current h-6 w-6 text-red-600" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </button>
              </span>
              <span class="block sm:inline">عليك إدخال المعلومات الصحيحة رجاءاً</span>
            </div>
          </Collapse>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                اسم المستخدم
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block indent-[7px] tracking-[0.00125em] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  كلمة المرور
                </label>
                <div className="text-sm">
                  <a href="https://wa.me/+96181211768?text=السلام عليكم قائد نسيت الباسورد" className="font-semibold text-[#128b49] hover:text-[#17a757]">
                    هل نسيت كلمة المرور ؟
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block indent-[7px] tracking-widest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <motion.button
                type="submit"
                className="w-full rounded-lg border-b-4 border-[#0f723c] hover:border-[#128b49] bg-[#128b49] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#17a757] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128b49]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                تسجيل الدخول
              </motion.button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a href="/" className="font-semibold leading-6 text-[#128b49] hover:text-[#17a757]">
                عد الى الصفحة الرئيسية <span aria-hidden="true">&larr;</span>
            </a>
          </p>
        </div>
        
      </motion.div>
    </>
    )
}

export default Login