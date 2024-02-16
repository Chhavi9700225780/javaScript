class User {
    constructor(email, password){
        this.email = email;
        this.password = password //here constructor will not sets the value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value //don't return heree
    }

    get password(){
        return `${this._password}hitesh` // when we declare get then along it we have to set also
       // here constructor and set both sets the value a race is start between them by which call stack fullfilled
       //to resolve it by changing the variable
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);