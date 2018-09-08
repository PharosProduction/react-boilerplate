const mark = action => `auth/${action}`

export const LOGOUT = mark('LOGOUT');
export const logout = () => ({ type: LOGOUT })
