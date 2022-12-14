/*
-Autenticavel é quando tem o método autenticar.

- Ducky type diferentes objetivos do mesmo tipo.
*/

export class Autenticacao{
    static login(autenticavel, senha){
        if(Autenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel 
        && autenticavel.autenticar instanceof Function
    }
}