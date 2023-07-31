import { types } from "../../../src/auth/types/types";

/* eslint-disable no-undef */
describe('Pruebas de Types.js', () => {
  test('debe regresar estos types', () => { 
    expect(types).toEqual({
      login : '[Auth] Login',
      logout: '[Auth] Logout',
    })
   })
});
