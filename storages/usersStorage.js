class usersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName, email, age, bio }) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email, age, bio };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id]
    }

    updateUser(id, { firstName, lastName, email, age, bio }) {
        this.storage[id] = { id, firstName, lastName, email, age, bio }
    }

    deleteUser(id) {
        delete this.storage[id]
    }

    findUser(query) {
        const users = Object.values(this.storage);
        return users.find(user => {
            const matchesName = query.name
                ? `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.name.toLowerCase())
                : true;
            const matchesEmail = query.email
                ? user.email.toLowerCase().includes(query.email.toLowerCase())
                : true;
    
            return matchesName && matchesEmail; // Match both if both are specified
        });
    }
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new usersStorage();