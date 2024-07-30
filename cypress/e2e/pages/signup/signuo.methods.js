import { SignupElemets } from "./signup.elements";

export class SignupMethods{
    static inserUsernama(username){
        SignupElemets.textboxes.username.invoke("val",username)
    }

    static insertPassword(password){
        SignupElemets.textboxes.password("val",password)
    }

    static clickSignupButton(){
        SignupElemets.buttons.signup.click();
    }

    static signup(username,password){
        this.inserUsernama(username)
        this.insertPassword(password)
        this.clickSignupButton()
    }
}