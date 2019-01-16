import React, { Component } from 'react'

class Formulario extends Component {

  tituloRef = React.createRef();
  entradaRef = React.createRef();

  crearPost = (e) => {
    e.preventDefault();

    const post = {
      title : this.tituloRef.current.value,
      body : this.entradaRef.current.value,
      userId: 1
    }

    this.props.crearPost(post);

  }

  render() {
    return (
      <form onSubmit={this.crearPost} className="col-8">
        <legend className="text-center">Crear Nuevo Post</legend>
        <div className="form-group">
            <label>Titulo del post:</label>
            <input ref={this.tituloRef} placeholder="Titulo del post" type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label>Contenido:</label>
          <textarea ref={this.entradaRef} placeholder="Escribe tu post ..." type="text" className="form-control" ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Crear</button>
      </form>
    )
  }
}

export default Formulario;
