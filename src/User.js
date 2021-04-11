class UserType {
    static STUDENT = 0;
    static TEACHER = 1;
    static CREATOR = 2;
}

class User {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getUsername() {
        return this.name;
    }

    getUserType() {
        return this.type;
    }

    isStudent() {
        return this.getUserType() === UserType.STUDENT;
    }

    isTeacher() {
        return this.getUserType() === UserType.TEACHER;
    }

    isCreator() {
        return this.getUserType() === UserType.CREATOR;
    }

}

class Users {
    static STUDENT = new User("Student", UserType.STUDENT);
    static TEACHER = new User("Teacher", UserType.TEACHER);
    static CREATOR = new User("Creator", UserType.CREATOR);

    static findUser(username) {
        switch (username.toLowerCase()) {
            case "student": return Users.STUDENT;
            case "teacher": return Users.TEACHER;
            case "creator": return Users.CREATOR;
        }
        return null;
    }
}

class Profile {

    constructor() {
        this.currentUser = Users.STUDENT;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(username) {
        this.currentUser = Users.findUser(username);
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }
}

export default Profile;