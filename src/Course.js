class Assignment {

    static ASSIGNMENTS = [
        new Assignment("yolo"),
        new Assignment("pants")
    ];

    constructor(name) {
        this._name = name;
    }


    get name() {
        return this._name;
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
        new Course("15124", "Turtle Racing", "Jan - Jun 2021", "B", "99+"), //TODO: Fill out
        new Course(/* ... etc ... */),
        new Course(),
        new Course()
    ];

    constructor(id, title, dates, currentGrade, teacherNotifCount) {
        this._id = id;
        this._title = title;
        this._dates = dates;
        this._currentGrade = currentGrade;
        this._teacherNotifCount = teacherNotifCount;
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