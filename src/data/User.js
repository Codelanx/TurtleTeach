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

    getAvatarURL() {
        return 'img/turtle.png';
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
        if (username === null || username === undefined) {
            return null;
        }
        switch (username.toLowerCase()) {
            case "student": return Users.STUDENT;
            case "teacher": return Users.TEACHER;
            case "creator": return Users.CREATOR;
            default: return null;
        }
    }
}

class Profile {

    constructor() {
        this.currentUser = null; //Users.STUDENT or Users.TEACHER
        this.components = [];
        if (document.cookie) {
            let vals = document.cookie.split(";");
            let backRef = this;
            vals.forEach((val) => {
                let v = val.split("=");
                if (v.length < 2) {
                    return;
                }
                if (v[0] === "user") {
                    this.currentUser = Users.findUser(v[1]);
                }
            });
        }
    }

    getCurrentUser() {
        return this.currentUser;
    }

    registerComponentUpdates(component) {
        this.components.push(component);
    }

    setCurrentUser(username) {
        let back = this.currentUser = Users.findUser(username);
        this.components.forEach((comp) => {
            comp.forceUpdate();
        });
        let name = null;
        if (back !== null) {
            name = back.getUsername();
        }
        document.cookie = "user=" + name + ";";
        return back;
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }
}

export default Profile;
export {User, UserType};