class Course {

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