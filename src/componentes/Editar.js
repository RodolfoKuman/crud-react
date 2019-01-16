import React, { Component } from 'react'

class Editar extends Component {

    tituloRef = React.createRef();
    entradaRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            id: this.props.post.id
        }
     
        this.props.editarPost(post);

    }

    cargarFormulario = () =>{
        if(!this.props.post) return null;
        const { title, body } = this.props.post;
        return(
            <form onSubmit={this.editarPost} className="col-8">
                <legend className="text-center">Editar Post</legend>
                <div className="form-group">
                    <label>Titulo del post:</label>
                    <input ref={this.tituloRef} defaultValue={title} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea ref={this.entradaRef} defaultValue={body} type="text" className="form-control" ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Actualizar Post</button>
            </form>
        )
    }

    render() {
       
        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
        );
    }
}

export default Editar;
