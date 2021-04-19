class Assignment {

    static ASSIGNMENTS = [
        new Assignment("Slow and Curious", "04/20", "B"),
        new Assignment("Tarantula Trap", "05/01", "A"),
        new Assignment("Blue Lagoon", "04/25", "C"),
        new Assignment("Skyracing with Snakes", "03/12", "B+"),
        new Assignment("Dodge the Dog", "05/16", "B-"),
        new Assignment("Flip the Turtle", "05/21", "A-")
    ];

    constructor(name, dueDate, grade) {
        this._name = name;
        this._dueDate = dueDate;
        this._grade = grade;
    }


    get name() {
        return this._name;
    }

    get dueDate() {
        return this._dueDate;
    }

    get grade() {
        return this._grade;
    }

    static getAssignments() {
        return Assignment.ASSIGNMENTS;
    }
}

class Course {

    /*
    <CardLayout topText={"Current Teaching"} class1={"Turtle Racing"} date1={"Jan-Jun 2021"} notifications1={"10"} class2={"Turtle Ethics"} date2={"Jan-Jun 2021"} notifications2={"50"}
                                bottomText={"Previous Taught"} class3={"Introduction"} date3={"Aug 2020"} class4={"Control Statements"} date4={"Aug-Dec 2020"} class5={"Shell Dynamics"} date5={"Aug-Dec 2020"}
                                 class6={"Turtle Ethics"} date6={"Aug-Dec 2020"} link={"/ClassHome"}/>
     */

    static COURSES = [
        new Course("15124", "Turtle Racing", "Jan - Jun 2021", "A", "12"), //TODO: Fill out
        new Course("15284", "Turtle Ethics", "Jan - Jun 2021", "B", "99+"),
        new Course("14902", "Introduction", "Aug - Dec 2020", "A", ""),
        new Course("14029", "Control Statements", "Aug - Dec 2020", "A", ""),
        new Course("14023", "Shell Dynamics", "Aug - Dec 2020", "C+", ""),
        new Course("14619", "Turtle Ethics", "Aug - Dec 2020", "F", "")
    ];

    constructor(id, title, dates, currentGrade, teacherNotifCount) {
        this._id = id;
        this._title = title;
        this._dates = dates;
        this._currentGrade = currentGrade;
        this._teacherNotifCount = teacherNotifCount;
    }

    static findCourse(id) {
        if (id === null || id === undefined) {
            return null;
        }
        let c = Course.COURSES.find((course) => {
            return course.id.toLowerCase() === id;
        });
        if (c === undefined) {
            c = null;
        }
        return c;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get dates() {
        return this._dates;
    }

    get currentGrade() {
        return this._currentGrade;
    }

    get teacherNotifCount() {
        return this._teacherNotifCount;
    }

    static getCourses() {
        return Course.COURSES;
    }
}

export default Course;
export {
    Assignment
};