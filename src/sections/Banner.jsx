import React from 'react'
import banner from '../assets/banner.jpg'
import Layout from '../components/Layout'

const Banner = () => {
  return (
    <div className='w-full md:aspect-[5/2] aspect-auto relative'>
        <img src={banner} alt="" className="w-full h-full object-cover object-center" />
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-neutral-900 via-neutral-800/70 to-neutral-900/20'>
            <Layout className="w-full h-full md:pt-16 pt-2">
                <div className='w-full h-full flex items-center justify-start flex-col text-center md:space-y-12 space-y-6'>
                    <div className="space-y-4">
                        <h1 className="md:text-6xl text-2xl text-neutral-50 font-bold !leading-[1.3] capitalize">
                            CUIDA TU SONRISA
                        </h1>
                        <p className="md:text-lg text-sm text-white font-normal">
                        ¿Sabías que un control dental regular no solo previene problemas bucales, sino que también mantiene tu sonrisa radiante?<p/> En nuestra clínica, estamos comprometidos a ayudarte a mantener una boca sana y una sonrisa que ilumine cada momento.
                        </p>
                    </div>

                    <a href="https://wa.me/3865547356?text=Hola!%20me%20gustaría%20agendar%20una%20cita%20" target="_blank" className="w-fit md:px-16 px-12 md:py-4 py-3 rounded-full text-lg text-neutral-700 font-medium bg-neutral-50 border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 backdrop-blur flex items-center gap-x-2 ease-in-out duration-300">
                        AGENDA TU TURNO
                    </a>
                </div>
            </Layout>
        </div>
    </div>
  )
}

export default Banner