// [[1]]  You can have namespace hierarhies.
// Look at the converted js, 
//      - see the idiomatic JS that is used to achieve it! 
//          - It was handcoded before
//          - 9 lines to 1 line
module CompanyName.Foundation.School {
    export class Student implements IPerson{
        constructor(public firstname: string, public lastname: string) {
        }

        fullname() {
            return this.firstname + " " + this.lastname;
        }

        //Options Bag Sample, not new except types
        //fullname( options:{ title ?  : string; age ?  : number; })
        //{
        //    if (options.title)
        //        return options.title + this.firstname + " " + this.lastname;
        //    else if (options.age)
        //        return this.firstname + " " + this.lastname;
        //}

    }

    export interface IPerson {
        firstname: string;
        lastname: string;
        fullname(title?: string);
        //Options Bag Sample, not new except types
        //fullname(options:{ title ?  : string; age ?  : number; });
    }


    export function greet(person: IPerson, title?: string) { //Optional params can only be followed by optional, Person can not be 2nd here.
        return "Hello, " + (title ? title : "") + person.fullname();
    }
} 