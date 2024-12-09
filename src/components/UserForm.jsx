import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const UserForm = ({ onSaveUser, editingUser }) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  // Sincronizar el estado cuando se edita un usuario
  useEffect(() => {
    if (editingUser) {
      setFormState({
        username: editingUser.username || "",
        email: editingUser.email || "",
        password: editingUser.password || "",
      });
    } else {
      setFormState({
        username: "",
        email: "",
        password: "",
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveUser({ ...editingUser, ...formState }); // Pasar datos actualizados
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev); // Alternar el estado de mostrar/ocultar contraseña
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Nombre de Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formState.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type={showPassword ? "text" : "password"} // Mostrar como texto o contraseña
          className="form-control"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className="btn btn-link"
          onClick={toggleShowPassword}
          style={{ padding: 0, marginTop: "5px" }}
        >
          {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
        </button>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingUser ? "Actualizar Usuario" : "Agregar Usuario"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onSaveUser: PropTypes.func.isRequired,
  editingUser: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};
