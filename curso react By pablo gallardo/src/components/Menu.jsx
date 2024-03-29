import { Link } from 'react-router-dom'

const Menu = ({ theme }) => {
  return (
    <div className={`d-flex flex-column justify-content-start ${theme}`}>
      <h2 className='text-center'>Menú</h2>
      <Link to='/theme' className='btn btn-primary m-1'>Context</Link>
      <Link to='/memorizacion' className='btn btn-primary m-1'>Memorizacion</Link>
      <Link to='/todolist' className='btn btn-primary m-1'>Todo List</Link>
      <Link to='/modales' className='btn btn-primary m-1'>Modales</Link>
      <Link to='/contactForm' className='btn btn-primary m-1'>Validar Formulario</Link>
      <Link to='/crudAPI' className='btn btn-primary m-1'>Crud API</Link>
      <Link to='/crudApp' className='btn btn-primary m-1'>Crud App</Link>
      <Link to='/navbar' className='btn btn-primary m-1'>Navbar</Link>
      <Link to='/estilos' className='btn btn-primary m-1'>Estilos</Link>
      <Link to='/referencia' className='btn btn-primary m-1'>Referencia</Link>
      <Link to='/pokemones' className='btn btn-primary m-1'>Pokemones</Link>
      <Link to='/contador' className='btn btn-primary m-1'>Contador</Link>
      <Link to='/listaNombres' className='btn btn-primary m-1'>Lista Nombres</Link>
    </div>
  )
}

export default Menu