// import RouteConstants from "@/frontend/shared/constants/RouteConstants";

const GlobalStrConstants = {
    NOT_FOUND: "NOT_FOUND",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",

    CREATED: "Created Successfully",
    UPDATED: "Updated Successfully",
    DELETED: "Deleted Successfully",

    SIDEBAR_LINKS: [
        { icon: "", menuLabel: "Dashboard", routePath: "/dashboard" },
        // {
        //     icon: "",
        //     menuLabel: "Student Category",
        //     routePath: RouteConstants.STUDENT_CATEGORIES_LIST,
        // },
        // {
        //     icon: "",
        //     menuLabel: "Student Subcategory",
        //     routePath: RouteConstants.STUDENT_SUBCATEGORY_LIST,
        // },
        // {
        //     icon: "",
        //     menuLabel: "Students",
        //     routePath: RouteConstants.STUDENTS_LIST,
        // },
        // {
        //     icon: "",
        //     menuLabel: "AdminUsers",
        //     routePath: RouteConstants.STUDENTS_LIST,
        // },
        { icon: "", menuLabel: "Subjects", routePath: "/subjects" },
        { icon: "", menuLabel: "Chapters", routePath: "/chapters" },
        { icon: "", menuLabel: "Questions", routePath: "/questions" },
        { icon: "", menuLabel: "Exams", routePath: "/exams" },
        { icon: "", menuLabel: "Reports", routePath: "/reports" },
        // {
        //     icon: "",
        //     menuLabel: "Assign Questions",
        //     routePath: "/assign-questions-to-exam",
        // },
        // {
        //     icon: "",
        //     menuLabel: "Reports",
        //     routePath: RouteConstants.REPORTS_LIST,
        // },
    ],
    QUESTIONS_DIFFICULTY_LEVELS: [
        { display: "Easy", value: "Easy" },
        { display: "Medium", value: "Medium" },
        { display: "Tough", value: "Tough" },
    ],
    QUESTIONS_NO_OF_OPTIONS: [
        { display: "4", value: "4" },
        { display: "3", value: "3" },
        { display: "2", value: "2" },
    ],
    EXAM_TYPES_OPTIONS: [
        { value: "mock", label: "Mock" },
        { value: "practice", label: "practice" },
        { value: "live", label: "live" },
    ],
};

export default GlobalStrConstants;
