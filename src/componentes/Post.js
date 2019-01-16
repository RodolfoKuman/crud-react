import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

export default class Post extends Component {
  
  confirmarEliminacion = () => {
    const { id, title } = this.props.info; 
    swal({
      title: '¿Estas seguro?',
      text: "No podras revertir esta acción",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar este post'
    }).then((result) => {
      if (result.value) {
        this.props.borrarPost(id);
        swal(
          'Eliminado!',
          'Este post a sido eliminado.',
          'success'
        )
      }
    })
    
  }

  render() {

    const {id, title} = this.props.info; 

    return (
      <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>
              <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
              <Link to={`/editar/${id}`} className="btn btn-warning">Editar</Link>
              <button onClick={ this.confirmarEliminacion } type="button" className="btn btn-danger">Borrar</button>
          </td>
      </tr>
    )
  }
}

