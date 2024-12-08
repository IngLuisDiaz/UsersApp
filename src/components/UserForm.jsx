import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const UserForm = ({ onSaveUser, editingUser }) => {
  const initialUserForm = editingUser || { username: "", password: "", email: "" };

  const [userForm, setUserForm] = useState(initialUserForm);
  const [showPassword, setShowPassword] = useState(false);

  // Actualizar el formulario cuando cambie el usuario en edición
  useEffect(() => {
    setUserForm(editingUser || { username: "", password: "", email: "" });
  }, [editingUser]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!userForm.username || !userForm.password || !userForm.email) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!isValidEmail(userForm.email)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    if (!isValidPassword(userForm.password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
      return;
    }

    onSaveUser(userForm); // Llama a la función pasada como prop
    setUserForm({ username: "", password: "", email: "" }); // Limpia el formulario
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={userForm.username}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        name="password"
        type={showPassword ? "text" : "password"}
        value={userForm.password}
        onChange={onInputChange}
      />
      <div>
        <input
          type="checkbox"
          id="showPassword"
          onChange={() => setShowPassword((prev) => !prev)}
        />
        <label htmlFor="showPassword"> Mostrar contraseña </label>
      </div>
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={userForm.email}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        {editingUser ? "Actualizar Usuario" : "Crear Usuario"}
      </button>
    </form>
  );
};

// Validación de PropTypes
UserForm.propTypes = {
  onSaveUser: PropTypes.func.isRequired,
  editingUser: PropTypes.object,
};
