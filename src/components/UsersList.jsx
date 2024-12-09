import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

export const UsersList = ({ users = [], onRemoveUser, onUpdateUser }) => {
  const handleSaveUser = (id, updatedUser) => {
    onUpdateUser({ ...updatedUser, id }); // Enviar el usuario actualizado al manejador
  };

  return (
    <div>
      {users.length === 0 ? (
        <p className="text-center text-muted">No hay usuarios existentes</p>
      ) : (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre de Usuario</th>
              <th>Contraseña</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user.id}
                index={index}
                {...user}
                onRemoveUser={onRemoveUser}
                onSaveUser={handleSaveUser}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
};
