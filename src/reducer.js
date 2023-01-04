export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finishing devoloping...
    // token:"BQCKbWIsDHi-ajODXmF-gNru0OUBUikHm4zScuFo-MIV3UFqgNKWOmSNY0f7tjgWPTf90Uyunu_6sbi6KGHIcvx2lIoDolwyFhjA34GE3hga94k8gr7UTJ2eIocVIXPDlJHOxm6LbEZz7J54FAmSPSNNizcIBEGIyh1YscfuXKDooDnWqK_NewwpJVQUbfXlpQ76XfLZRXYAVdQ_hJfY",
};

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
        
        case "SET_PLAYLISTS":    
            return{
                ...state,
                playlists: action.playlists,
            };
        
        case "SET_DISCOVER_WEEKLY":
            return  {
                ...state,
                discover_weekly: action.discover_weekly,
            }  

        default:
            return state;    
    }
}

export default reducer;