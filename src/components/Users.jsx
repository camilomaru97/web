/* eslint-disable react/prop-types */

export const Users = ({ users, onDeleteUser, findUser }) => {
  return (
    <section className="container_users">
      {users.length === 0 ? (
        <p style={{textAlign: 'center', marginTop:'10rem'}} >No hay usuarios aun</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Correo</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Profesión / Porgrama</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.correo}</td>
                <td>{user.nombre}</td>
                <td>{user.rol}</td>
                <td>{user.profesion || user.programa}</td>
                <td>
                  <span
                    onClick={() => findUser(user.id)}
                    title="Editar"
                    style={{ color: '#3e9cf9' }}
                    className="material-symbols-outlined edit"
                  >
                    edit
                  </span>
                  <span
                    onClick={() => onDeleteUser(user.id)}
                    title="Eliminar"
                    style={{ color: 'red' }}
                    className="material-symbols-outlined delete"
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
