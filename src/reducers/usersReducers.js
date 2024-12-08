

export const usersReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        // Agregar un usuario al final de la lista
        return [...state, action.payload];
  
      case 'UPDATE_USER':
        // Actualizar un usuario según su ID
        return state.map(user =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        );
  
      case 'REMOVE_USER':
        // Eliminar un usuario según su ID
        return state.filter(user => user.id !== action.payload);
  
      default:
        return state; // Retornar el estado actual si no hay cambios
    }
  };
  