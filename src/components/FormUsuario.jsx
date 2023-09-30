/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FormUsuario = ({ onAddUser, userEdit, onEditUser }) => {
  const [displayInputs, setdisplayInputs] = useState(false);
  const [inputValue, setInputValue] = useState({
    id: uuidv4(),
    dni: '',
    correo: '',
    nombre: '',
    rol: '',
    tarjetaProfesional: '',
    profesion: '',
    codigo: '',
    programa: '',
  });

  useEffect(() => {
    if (userEdit) {
      setInputValue({
        id: userEdit[0].id,
        dni: userEdit[0].dni,
        correo: userEdit[0].correo,
        nombre: userEdit[0].nombre,
        rol: userEdit[0].rol,
        tarjetaProfesional: userEdit[0].tarjetaProfesional,
        profesion: userEdit[0].profesion,
        codigo: userEdit[0].codigo,
        programa: userEdit[0].programa,
      });
    }
  }, [userEdit, setInputValue]);

  const {
    dni,
    correo,
    nombre,
    rol,
    profesion,
    tarjetaProfesional,
    codigo,
    programa,
  } = inputValue;

  const hanldeSumit = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setdisplayInputs(true);
  };

  const onHanldeSumit = (e) => {
    e.preventDefault();
    if (!userEdit) {
      onAddUser(inputValue);
      setInputValue({
        id: uuidv4(),
        dni: '',
        correo: '',
        nombre: '',
        rol: '',
        tarjetaProfesional: '',
        profesion: '',
        codigo: '',
        programa: '',
      });
    } else {
      console.log(inputValue)
      onEditUser(inputValue)
      setInputValue({
        id: uuidv4(),
        dni: '',
        correo: '',
        nombre: '',
        rol: '',
        tarjetaProfesional: '',
        profesion: '',
        codigo: '',
        programa: '',
      });
    }

  };

  return (
    <section className="form_container">
      <form onSubmit={onHanldeSumit}>
        <div style={{ marginLeft: '0px', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem' }}>Bienvenido de nuevo!!</h1>
          {userEdit ? (
            <p style={{ fontSize: '1.2rem' }}>Edita los datos del usuario</p>
          ) : (
            <p style={{ fontSize: '1.2rem' }}>Ingresa los datos del usuario</p>
          )}
        </div>
        <input
          required
          onChange={hanldeSumit}
          type="text"
          placeholder="DNI"
          value={dni}
          name="dni"
        />
        <input
          onChange={hanldeSumit}
          type="text"
          placeholder="Correo"
          value={correo}
          name="correo"
        />
        <input
          required
          onChange={hanldeSumit}
          type="text"
          placeholder="Nombre"
          value={nombre}
          name="nombre"
        />

        <select required onChange={handleSelect} name="rol" value={rol}>
          <option value="">Seleecione Rol</option>
          <option value="profesor">Profesor</option>
          <option value="estudiante">Estudiante</option>
        </select>
        {displayInputs
          ? displayInputs
          : 'Seleccione un rol para ver los campos adicionales'}
        {rol === 'estudiante' && (
          <div className="animate-fade-down animate-once animate-ease-in-out">
            <input
              required
              onChange={hanldeSumit}
              type="text"
              name="codigo"
              value={codigo}
              placeholder="Codigo"
            />
            <input
              required
              onChange={hanldeSumit}
              type="text"
              name="programa"
              value={programa}
              placeholder="Programa"
            />
          </div>
        )}
        {rol == 'profesor' && (
          <div className="animate-fade-down animate-once animate-ease-in-out">
            <input
              required
              onChange={hanldeSumit}
              type="text"
              name="profesion"
              value={profesion}
              placeholder="Profesion"
            />
            <input
              required
              onChange={hanldeSumit}
              type="text"
              name="tarjetaProfesional"
              value={tarjetaProfesional}
              placeholder="Tarjeta Profesional"
            />
          </div>
        )}
        {userEdit ? (
          <button>Editar Usuario</button>
        ) : (
          <button>Añadir Usuario</button>
        )}
      </form>
    </section>
  );
};
