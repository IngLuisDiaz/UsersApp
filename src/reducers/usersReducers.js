export const usersReducer = (state, action) => {
    switch (action.type) {
      case "ADD_USER":
        // Asegurar que no se agreguen usuarios duplicados
        return [
          ...state,
          {
            ...action.payload,
            id: state.length > 0 ? state[state.length - 1].id + 1 : 1, // Generar un nuevo ID
          },
        ];
  
      case "UPDATE_USER":
        // Actualiza un usuario específico
        return state.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        );
  
      case "REMOVE_USER":
        // Elimina un usuario de la lista
        return state.filter((user) => user.id !== action.payload);
  
      default:
        return state;
    }
  };
  