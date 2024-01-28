import homeLogo from '../../assets/home.svg'

function Home() {
    return (
        <>
            <div className="bg-slate-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja Bem-Vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>

                        <div id="Botões" className="flex justify-around gap-4 w-1/2 text-center">
                            <div className="rounded-md text-white border-white border-solid border-2 px-4 py-2 flex-1">
                                Nova Postagem
                            </div>
                            <div className="rounded-md text-black border-white bg-white border-solid border-2 px-4 py-2 flex-1">
                                Ver Postagens
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="Imagem home" className="w-2/3" />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;

