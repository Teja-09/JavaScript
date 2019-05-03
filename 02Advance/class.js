class User
{
    constructor(firstname, lastname, credits)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credits = credits;
    }

    getFullName()
    {
        let fullName = `${this.firstname} ${this.lastname} is my full name`
        console.log(fullName)
    }

    editName(newName)
    {
        // this.firstname = newName;
        // let totname = `my new name is ${this.firstname}`
        // console.log(totname)

        const myname = newName.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

class teacher extends User
{
    constructor(firstname, lastname, credits, subject)
    {
        super(firstname, lastname, credits);
        this.subjet = subject;
        console.log(this.subjet)
    }

    getFullName()
    {
        let fullName = `${this.firstname} ${this.lastname} is my full name and i teach ${this.subjet}`
        console.log(fullName)
    }

}

const john = new teacher('john', 'Anderson', 34, 'python');

console.log(john)


john.getFullName();


// john.editName('teja')
john.editName("TOm Boy");
john.getFullName()


