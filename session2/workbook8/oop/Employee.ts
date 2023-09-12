

class Employee {
    public id: number;
    public name: string;
    public jobTitle: string;
    public rate: number;

    // relation between id: number in parameter list and on line 6?
    // they are not related, but, since we assign id to this.id on line 14, the types must match
    // otherwise it won't transpile
    constructor(id: number, name: string, jobTitle: string, rate: number) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.rate = rate;
    }

    raisePay(percentage: number): void {
        this.rate = this.rate * (1 + percentage);
    }

    toString(): string {
        return `Employee ${this.id} with name ${this.name} and ${this.jobTitle} has ${this.rate}.`;
    }
}

let emp1 = new Employee(
    1, "Siddalee Grace", "Interior Designer", 42.00
);
console.log(emp1);
emp1.raisePay(0.1);
console.log(emp1);