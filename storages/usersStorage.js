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
        const searchTerms = query.search.toLowerCase().split(/\s+/); // Split query into individual terms
    
        return users.find(user => {
            // Construct a full name for easier matching
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            const email = user.email.toLowerCase();
    
            // Check if any search term matches either the full name or the email
            return searchTerms.some(term => fullName.includes(term) || email.includes(term));
        });
    }
    
    
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new usersStorage();