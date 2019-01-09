import React, { Component } from 'react'

class Formulario extends Component {
  render() {
    return (
      <form className="col-8">
        <legend className="text-center">Crear Nuevo Post</legend>
        <div className="form-group">
            <label>Titulo del post:</label>
            <input placeholder="Titulo del post" type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label>Contenido:</label>
            <textarea placeholder="Escribe tu post ..." type="text" className="form-control" ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Crear</button>
      </form>
    )
  }
}

export default Formulario;
