import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
        const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    });

        const inputsUpdate = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value })
    }
    const navigate=useNavigate()
    const validateLogin=()=>{
        navigate("/Admin")
    }

  return (
    <div className="w-full h-screen flex flex-row bg-[#051E51]">
      <div className="w-full md:w-1/2 bg-[#021B4A] flex flex-col justify-center px-6 md:px-20">
        <div className="mb-5">
          <img src="/Images/YonJobIcon.png" alt="" />
        </div>
        <h3 className="text-white font-bold text-2xl mb-2">
          Inicia sesión con tu cuenta
        </h3>
        <p className="text-white mb-5">
          ¿No tienes cuenta?
          <a className="text-[#5A91FF] font-semibold cursor-pointer">
            Regístrate
          </a>
        </p>
        <form>
          <div className="space-y-12">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={usuario.email}
                      onChange={inputsUpdate}
                      placeholder=""
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 h-10"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      type="text"
                      name="password"
                      value={usuario.password}
                      onChange={inputsUpdate}
                      placeholder=""
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <a className="text-[#78EF97] font-semibold text-sm mt-2 mb-5 cursor-pointer self-end">
          ¿Olvidaste tu contraseña?
        </a>

        <div>
          <button onClick={validateLogin} className="w-full h-12 bg-[#78EF97] text-white font-semibold rounded-lg mt-2">
            Iniciar sesión
          </button>
        </div>

        <div className="flex items-center my-6">
          <span className="flex-1 h-px bg-white"></span>
          <span className="px-4 text-white text-sm">O continúa con</span>
          <span className="flex-1 h-px bg-white"></span>
        </div>
        <button className="w-full h-12 bg-white text-[#5A91FF] font-bold rounded-lg flex items-center justify-center gap-2">
          <img src="/Images/googleIcon.svg" className="w-5" /> Google
        </button>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="/Images/M_programming.png"
        />
      </div>
    </div>
  );
}
