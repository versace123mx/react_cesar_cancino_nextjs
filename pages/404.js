import React from 'react'
import Frontend from '@/componentes/Frontend'
import Link from 'next/link'
import Image from 'next/image'

const Pagina404 = () => {
    return (
        <>
            <Frontend title={'Pagina no Encontrada'}>
                <div className="container py-5 text-center">
                    <h1>Pagina No encontrada</h1>
                    <div className='row'>
                        <div>
                            <Image
                                src={'/images/Minix3_Logo.png'}
                                width={350}
                                height={350}
                                alt='imagen'
                            />
                            <p>
                                <Link href={'/'}>Ir al inicio</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Frontend>
        </>
    )
}

export default Pagina404
