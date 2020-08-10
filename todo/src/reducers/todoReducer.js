export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589,
    },
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ];
        case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      case 'FILTER_TODOS':
        return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};