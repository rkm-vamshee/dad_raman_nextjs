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
    CHALDEAN_SYSTEM: [
        { letters: ["A", "I", "J", "Q", "Y"], allottedNumber: 1 },
        { letters: ["B", "K", "R"], allottedNumber: 2 },
        { letters: ["C", "G", "L", "S"], allottedNumber: 3 },
        { letters: ["D", "M", "T"], allottedNumber: 4 },

        { letters: ["E", "H", "N", "X"], allottedNumber: 5 },
        { letters: ["U", "V", "W"], allottedNumber: 6 },
        { letters: ["O", "Z"], allottedNumber: 7 },
        { letters: ["F", "P"], allottedNumber: 8 },
    ],
    PYTHAGOREAN_SYSTEM: [
        { letters: ["A", "J", "S"], allottedNumber: 1 },
        { letters: ["B", "K", "T"], allottedNumber: 2 },
        { letters: ["C", "L", "U"], allottedNumber: 3 },
        { letters: ["D", "M", "V"], allottedNumber: 4 },
        { letters: ["E", "N", "W"], allottedNumber: 5 },
        { letters: ["F", "O", "X"], allottedNumber: 6 },
        { letters: ["G", "P", "Y"], allottedNumber: 7 },
        { letters: ["H", "Q", "Z"], allottedNumber: 8 },
        { letters: ["I", "R"], allottedNumber: 9 },
    ],

    GOOD_NUMBERS: [
        { number: 14, eng: "Attraction Number", tel: "" },
        { number: 15, eng: "Hypnotic Number", tel: "" },
        { number: 19, eng: "Prince Of Heven", tel: "" },
        { number: 23, eng: "Prince Of HevenRoyal Start Of the Line", tel: "" },
        { number: 24, eng: "Enjoy Number", tel: "" },
        { number: 25, eng: "Confident Number", tel: "" },
        { number: 27, eng: "Courage Number", tel: "" },

        { number: 30, eng: "Amrutha Number", tel: "" },
        { number: 32, eng: "Royal Start Of the Line", tel: "" },
        { number: 37, eng: "Leader And Lucky", tel: "" },

        { number: 40, eng: "Sahasam", tel: "" },
        { number: 41, eng: "Attraction Number", tel: "" },
        { number: 42, eng: "Enjoy Number", tel: "" },
        { number: 45, eng: "Sowkyam & Sukham", tel: "" },
        { number: 46, eng: "Lucky", tel: "" },

        { number: 50, eng: "Vaktha", tel: "" },
        { number: 51, eng: "Luxery", tel: "" },
        { number: 52, eng: "Pleasant", tel: "" },
        { number: 54, eng: "Sowkyam & Sukham", tel: "" },
        { number: 55, eng: "Legend", tel: "" },
        { number: 59, eng: "Lovable Number", tel: "" },

        { number: 60, eng: "Talk Tick Number", tel: "" },
        { number: 62, eng: "Firendly Number", tel: "" },
        { number: 64, eng: "Good Position & Mental Number", tel: "" },
        { number: 66, eng: "Wealth Number", tel: "" },
        { number: 69, eng: "King Number", tel: "" },

        { number: 71, eng: "==Samsdhagata Number", tel: "" },
        { number: 72, eng: "Booming Number", tel: "" },
        { number: 73, eng: "Karodpathi Number", tel: "" },

        { number: 75, eng: "Artistic Number", tel: "" },
        { number: 76, eng: "Tack Tick Number", tel: "" },
        { number: 77, eng: "Energetic Number", tel: "" },

        { number: 79, eng: "Leader Number", tel: "" },

        { number: 81, eng: "Gurus Number", tel: "" },
        { number: 82, eng: "Future Number", tel: "" },

        { number: 85, eng: "Victory Number", tel: "" },
        { number: 86, eng: "Self Confidence Number", tel: "" },

        { number: 88, eng: "Angel Number", tel: "" },

        { number: 91, eng: "Confidence Number", tel: "" },
        { number: 92, eng: "Wealth Number", tel: "" },
        { number: 93, eng: "Intelligent Number", tel: "" },
        { number: 94, eng: "Inventory Number", tel: "" },
        { number: 95, eng: "Discipline Number", tel: "" },
        { number: 96, eng: "Victory Number", tel: "" },
        { number: 97, eng: "Perfection Number", tel: "" },

        { number: 100, eng: "Good Number", tel: "" },

        { number: 105, eng: "Good Number", tel: "" },

        { number: 108, eng: "Good Number", tel: "" },
        { number: 109, eng: "Good Number", tel: "" },

        { number: 111, eng: "Good Number", tel: "" },

        { number: 113, eng: "Good Number", tel: "" },
        { number: 114, eng: "Good Number", tel: "" },

        { number: 117, eng: "Good Number", tel: "" },
    ],
    BAD_NUMBERS: [
        { number: 10, eng: "Soul Number", tel: "" },
        { number: 11, eng: "Sun Set and Sun Rise", tel: "" },
        { number: 12, eng: "Hanged Man Number", tel: "" },
        { number: 13, eng: "Death Number", tel: "" },
        { number: 16, eng: "Blasting Number", tel: "" },
        { number: 17, eng: "UnLucky Number", tel: "" },
        { number: 18, eng: "Hi-Tenstion Number", tel: "" },
        { number: 20, eng: "Master Number", tel: "" },
        { number: 21, eng: "Reverse Number", tel: "" },
        { number: 22, eng: "Pournami & Amavasya", tel: "" },
        { number: 26, eng: "Danger", tel: "" },
        { number: 28, eng: "Problems", tel: "" },
        { number: 29, eng: "Sunami", tel: "" },

        { number: 31, eng: "Reverse Number", tel: "" },
        { number: 33, eng: "Bali Pashuvu", tel: "" },
        { number: 34, eng: "Addiction", tel: "" },
        { number: 35, eng: "Enemy Number", tel: "" },
        { number: 36, eng: "War Number", tel: "" },
        { number: 38, eng: "== Up & Down Number(Bad Number)", tel: "" },
        { number: 39, eng: "Parasite", tel: "" },
        { number: 43, eng: "Conflict Number", tel: "" },
        { number: 44, eng: "Destroy Number", tel: "" },
        { number: 47, eng: "Liar Number", tel: "" },
        { number: 48, eng: "Suiscide Number", tel: "" },
        { number: 49, eng: "Enemy Number", tel: "" },
        { number: 53, eng: "Horrible Number", tel: "" },
        { number: 56, eng: "Depressive Number", tel: "" },

        { number: 57, eng: "Master number", tel: "" },

        // ! Newly added
        { number: 58, eng: "Death number", tel: "" },
        { number: 61, eng: "Blasting number", tel: "" },
        { number: 63, eng: "Goods AandGaints(Dev Rakshasa) number", tel: "" },
        { number: 65, eng: "Debts(Applu) number", tel: "" },
        { number: 67, eng: "Accidents number", tel: "" },
        { number: 68, eng: "Devil number", tel: "" },

        { number: 70, eng: "Insecure number", tel: "" },
        { number: 74, eng: "Lazy number", tel: "" },

        { number: 78, eng: "Debts(Applu) number", tel: "" },
        { number: 80, eng: "Guilty number", tel: "" },
        { number: 83, eng: "Jelousy number", tel: "" },
        { number: 84, eng: "Die and Hanged man number", tel: "" },

        { number: 87, eng: "Devil number", tel: "" },
        { number: 89, eng: "UnLucky number", tel: "" },
        { number: 90, eng: "Emotional number", tel: "" },
        { number: 98, eng: "UnLucky number", tel: "" },
        { number: 99, eng: "High Blood Pressure number", tel: "" },

        { number: 101, eng: "Bad number", tel: "" },
        { number: 102, eng: "Bad number", tel: "" },
        { number: 103, eng: "Average Number", tel: "" },
        { number: 104, eng: "Average Number", tel: "" },

        { number: 106, eng: "Bad number", tel: "" },
        { number: 107, eng: "Bad number", tel: "" },

        { number: 110, eng: "Bad number", tel: "" },

        { number: 112, eng: "Bad Number", tel: "" },
        { number: 115, eng: "Bad Number", tel: "" },
        { number: 116, eng: "Bad Number", tel: "" },
    ],
};

export default GlobalStrConstants;
