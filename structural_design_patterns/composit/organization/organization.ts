interface IEmployeeComponent {
    getName(): string;
    getRole(): string;
    add(employee: IEmployeeComponent): void;
    remove(employee: IEmployeeComponent): void;
    display(indent: string): void;
}


class EmployeeLeaf implements IEmployeeComponent {
    private name: string;
    private role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return this.role;
    }

    add(employee: IEmployeeComponent): void {
        throw new Error("Cannot add to a leaf node.");
    }

    remove(employee: IEmployeeComponent): void {
        throw new Error("Cannot remove from a leaf node.");
    }

    display(indent: string = ""): void {
        console.log(`${indent}${this.name} (${this.role})`);
    }
}


class CompositeEmployee implements IEmployeeComponent {
    private name: string;
    private role: string;
    private subordinates: IEmployeeComponent[] = [];

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return this.role;
    }

    add(employee: IEmployeeComponent): void {
        this.subordinates.push(employee);
    }

    remove(employee: IEmployeeComponent): void {
        const index = this.subordinates.indexOf(employee);
        if (index !== -1) {
            this.subordinates.splice(index, 1);
        }
    }

    display(indent: string = ""): void {
        console.log(`${indent}${this.name} (${this.role})`);
        for (const subordinate of this.subordinates) {
            subordinate.display(indent + "    ");
        }
    }
}


// Create individual employees (leaves)
const employee1 = new EmployeeLeaf("John Doe", "Salesperson");
const employee2 = new EmployeeLeaf("Jane Smith", "Salesperson");
const employee3 = new EmployeeLeaf("Mike Johnson", "Marketer");
const employee4 = new EmployeeLeaf("Sarah Lee", "Engineer");

// Create teams (composite nodes)
const salesTeamA = new CompositeEmployee("Sales Team A", "Team Lead");
salesTeamA.add(employee1);
salesTeamA.add(employee2);

const marketingTeam = new CompositeEmployee("Marketing Team", "Team Lead");
marketingTeam.add(employee3);

const engineeringTeam = new CompositeEmployee("Engineering Team", "Team Lead");
engineeringTeam.add(employee4);

// Create departments (composite nodes)
const salesDepartment = new CompositeEmployee("Sales Department", "Department Head");
salesDepartment.add(salesTeamA);

const marketingDepartment = new CompositeEmployee("Marketing Department", "Department Head");
marketingDepartment.add(marketingTeam);

const engineeringDepartment = new CompositeEmployee("Engineering Department", "Department Head");
engineeringDepartment.add(engineeringTeam);

// Create the CEO (top-level composite node)
const ceo = new CompositeEmployee("Alice Brown", "CEO");
ceo.add(salesDepartment);
ceo.add(marketingDepartment);
ceo.add(engineeringDepartment);

// Display the organization structure
ceo.display();
