import Frontend from "@/componentes/Frontend";
import Link from "next/link";
import Sidebar from "@/componentes/Sidebar";
import Aviso from "@/componentes/Aviso";

const categorias = () => {
    return (
        <>
            <Frontend title={'Categorias'}>
                <section className="py-5">
                    <div className="container py-5">
                        <div className="row gy-5">
                            {<Sidebar valor={``} categorias={''} />}
                            <div className="col-lg-9 order-1 order-lg-2">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Categorías
                                        </li>
                                    </ol>
                                </nav>

                                <div className="row mb-4 gy-4">
                                    {/*avisos.datos.map((aviso) => (
                                        <Aviso key={aviso.id} aviso={aviso} />
                                    ))*/}


                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end mb-0">
                                        <li className="page-item mx-1">
                                            <Link
                                                className="page-link rounded shadow-sm px-3"
                                                href="/categorias?page=1"
                                                aria-label="Primera"
                                                title="Primera"
                                            >
                                                <span aria-hidden="true">«««</span>
                                            </Link>
                                        </li>
                                        <li className="page-item mx-1">
                                            <Link
                                                className="page-link rounded shadow-sm px-3"
                                                href={''}
                                                aria-label="Anterior"
                                                title="Anterior"
                                            >
                                                <span aria-hidden="true">«</span>
                                            </Link>
                                        </li>
                                        {/*paginación numérica */}
                                        {/*[...paginas].map((x, i) => (
                                            <li className="page-item mx-1" key={i}>
                                                {i >= 1 && (
                                                    <Link
                                                        className="page-link rounded shadow-sm px-3"
                                                        href={`/categorias?page=${i}`}
                                                    >
                                                        {i}
                                                    </Link>
                                                )}
                                            </li>
                                        ))*/}
                                        {/*//paginación numérica */}
                                        <li className="page-item mx-1">
                                            <Link
                                                className="page-link rounded shadow-sm px-3"
                                                href={``}
                                                aria-label="Siguiente"
                                                title="Siguiente"
                                            >
                                                <span aria-hidden="true">»</span>
                                            </Link>
                                        </li>
                                        <li className="page-item mx-1">
                                            <Link
                                                className="page-link rounded shadow-sm px-3"
                                                href={``}
                                                aria-label="Última"
                                                title="Última"
                                            >
                                                <span aria-hidden="true">»»»</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </Frontend>
        </>
    )
}

export default categorias
