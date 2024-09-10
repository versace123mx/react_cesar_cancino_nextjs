import Frontend from "@/componentes/Frontend";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "@/componentes/Sidebar";
import Aviso from "@/componentes/Aviso";

const Detalle = () => {
    const router = useRouter()
    console.log(router.query.slug)//aqui se recupera con el nombre del archivo en este caso slug
    return (
        <>
            hola
        </>
    )
}

export default Detalle
