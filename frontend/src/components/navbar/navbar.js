function Navbar(){



    return (
        <div className="flex flex-col  w-full">
            <header className="z-10 py-4 bg-white shadow-sm dark:bg-gray-800 flex justify-between px-5 navbar">
                <div className="container flex items-center font-bold justify-start h-full px-6 text-sm  text-primary ">
                    <h3 className="text-lg logo flex justify-center items-center font-bold text-gray-800 dark:text-gray-200">
                        Bem Vindo ao Painel De Controle da Share Energy
                    </h3>
                </div>
            </header>
        </div>
    )
}

export default Navbar