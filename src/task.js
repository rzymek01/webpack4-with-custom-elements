export default class Task {
    constructor(name = "default") {
        this.name = name;
    }

    run() {
        setInterval(() => {
            console.log(`Task '${this.name}' is running...`);
        }, 1000);
    }
};