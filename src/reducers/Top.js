export default function top (state = { isFatherAlive, isMoeAkiba }, action = {}) {
    switch (action.type) {
        case 'SEND_FAILIS_D_MAIL':
            return {...state, 
                isFatherAlive = action.isFatherAlive,
                isMoeAkiba = action.isMoeAkiba
            }
        default:
            return state;
    }
}