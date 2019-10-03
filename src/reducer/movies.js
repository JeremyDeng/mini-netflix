const movies = (state = [], action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [
                ...state,
                {
                    title: action.title,
                    id: action.id,
                    img: action.img
                }
            ]

        case "DELETE_MOVIE":
            return state.filter(movie => movie.id != action.id);
        
        default:
            return state;
    }
}

export default movies;