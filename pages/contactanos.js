import Frontend from "@/componentes/Frontend";
import { useState } from "react";

function contactanos() {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')
    const handleSubmit = () => {

    }
    return (
        <>
            <Frontend title={'Contactanos'}>
                <div className="container py-5">
                    <h1>Contactanos Next</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="nombre">
                                Nombre
                            </label>
                            <input
                                className="form-control"
                                id="nombre"
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="correo">
                                E-Mail
                            </label>
                            <input
                                className="form-control"
                                id="correo"
                                type="text"
                                placeholder="E-Mail"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="telefono">
                                Teléfono
                            </label>
                            <input
                                className="form-control"
                                id="telefono"
                                type="text"
                                placeholder="Teléfono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="mensaje">
                                Mensaje
                            </label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                placeholder="Mensaje"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                            ></textarea>
                        </div>
                        <button className="btn btn-primary" title="Enviar">
                            <i className="fas fa-envelope"></i> Enviar
                        </button>
                    </form>
                </div>
            </Frontend>
        </>
    )
}

export default contactanos
