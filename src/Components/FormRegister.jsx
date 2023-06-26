import React from "react";
import Logo from "../assets/BeatLabLogo.svg";

const FormRegistro = () => {
    return (
        <div className="bg-black/20 backdrop-blur-lg px-10  py-8 rounded-2xl">
            <div className="flex items-center justify-center">
                <img className="w-16" src={Logo} alt="Logo" />
                <h1 className="text-5xl font-semibold text-center">Bienvenido</h1>
            </div>
            <p className="font-medium text-lg mt-4 text-center">Registrate</p>
            <div className="mt-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Nombre</label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu nombre"
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <label className="text-lg font-medium">Apellidos</label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu apellido"
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-lg font-medium">Email</label>
                    <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu email"
                        type="email"
                    />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Contraseña</label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <label className="text-lg font-medium">
                        Confirma la contraseña
                        </label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Confirma tu contraseña"
                        type="password"
                        />
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05]  ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg">
                        Registrarse
                    </button>
                </div>
                <div className="mt-4 flex justify-center items-center">
                    <p className="font-medium text-base">¿Ya tienes una cuenta?</p>
                    <button className="ml-2 font-medium text-base text-violet-500">
                        Ingresa aquí!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormRegistro;
