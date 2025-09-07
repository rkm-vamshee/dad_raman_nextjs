/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import NumerologyMethod from "@/app/_shared/components/templates/NumerologyMethod";
import GlobalStrConstants from "@/app/_shared/constants/GlobalStrConstants";
import { useState } from "react";

export default function NumerologyCalculator() {
    /* 
        New Variables 
        */
    const [isWConsonant, setIsWConsonant] = useState<boolean>(true);
    const [isYConsonant, setIsYConsonant] = useState<boolean>(true);

    const [canCalculate, setCanCalculate] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [dob, setDob] = useState<string>("");

    // const canCalculate: boolean = true;

    const CHALDEAN = GlobalStrConstants.CHALDEAN_SYSTEM;
    const VOWELS = ["A", "E", "I", "O", "U"];

    const [chaldeanData, setChaldeanData] = useState<any>();
    const [pythogoreanData, setpythogoreanData] = useState<any>();

    const [trData, setTrData] = useState<any>([]);
    const [trResultData, setTrResultData] = useState<any>([]);
    const [resultName, setResultName] = useState<string>("");

    const [savedNamesResults, setSavedNamesResults] = useState<any>([]);

    //   trData: any = [];
    //   trResultData: any = [];
    //   resultName = '';
    //   savedNamesResults: any = [];

    const submit = () => {
        const finalName: string = name.trim();
        // resultName = "";
        setResultName("");
        if (!finalName) {
            alert("Enter name");
            return;
        }
        // this.trData = [];
        // this.resultName = this.name;
        setTrData([]);
        console.log("submit==");
        setResultName(name);
        calculateChadlian(finalName);
        // setTimeout(() => {
        //     calculateChadlian(finalName);
        // }, 5000);
        calculatePythpgrean(finalName);
    };

    const calculateChadlian = (finalName: string) => {
        console.log("trData==", trData);
        const splittedName = finalName.split("");

        let total = 0;
        let consonantsTotal = 0;
        let vowelsTotal = 0;
        const lettersArray: any = [];

        const finalLetters: any = [];
        const finalLetterNumbers: any = [];

        splittedName.forEach((nameLetter: any) => {
            const letterDetails: any = {};
            letterDetails.finalLetter = nameLetter;

            CHALDEAN.forEach((s: any) => {
                if (s.letters.includes(nameLetter.toUpperCase())) {
                    letterDetails.finalLetterNumber = s.allottedNumber;
                    if (VOWELS.includes(nameLetter.toUpperCase())) {
                        vowelsTotal = vowelsTotal + s.allottedNumber;
                    } else {
                        consonantsTotal = consonantsTotal + s.allottedNumber;
                    }
                    finalLetters.push(nameLetter);
                    finalLetterNumbers.push(s.allottedNumber);
                    total = total + s.allottedNumber;
                }
            });
        });

        // const originalData = [
        //     ...trData.filter((s: any) => s.systemName != "Chaldian"),
        // ];

        // originalData.push({
        //     systemName: "Chaldian",
        //     total: total,
        //     consonants: consonantsTotal,
        //     vowels: vowelsTotal,
        //     totalResult: getResultBasedOnTotal(total),
        //     lettersArray: lettersArray,

        //     finalLetters: finalLetters,
        //     finalLetterNumbers: finalLetterNumbers,
        // });

        // console.log("originalData==", originalData);
        // setTrData(originalData);
        setChaldeanData({
            systemName: "Chaldian",
            total: total,
            consonants: consonantsTotal,
            vowels: vowelsTotal,
            totalResult: getResultBasedOnTotal(total),
            lettersArray: lettersArray,

            finalLetters: finalLetters,
            finalLetterNumbers: finalLetterNumbers,
        });
        // this.trResultData.push({
        //   systemName: 'Chaldian',
        //   totalResult: this.getResultBasedOnTotal(total)
        // })
    };
    const getResultBasedOnTotal = (total: number) => {
        console.log("total==", total);
        const res = { total: total, type: "", eng: "", tel: "" };
        let goodNumberObj: any;
        let badNumberObj: any;

        GlobalStrConstants.GOOD_NUMBERS.forEach((s) => {
            if (s.number === total) {
                goodNumberObj = { type: "Good Number", ...s };
                return;
            }
        });

        if (goodNumberObj) {
            return { ...res, ...goodNumberObj };
        } else {
            GlobalStrConstants.BAD_NUMBERS.forEach((s) => {
                if (s.number === total) {
                    badNumberObj = { type: "Bad Number", ...s };
                    return;
                }
            });

            if (badNumberObj) {
                return { ...res, ...badNumberObj };
            }
        }
    };

    const calculatePythpgrean = (finalName: string) => {
        const splittedName = finalName.split("");

        let total = 0;
        let consonantsTotal = 0;
        let vowelsTotal = 0;

        const lettersArray: any = [];
        const finalLetters: any = [];
        const finalLetterNumbers: any = [];

        splittedName.forEach((nameLetter: any) => {
            GlobalStrConstants.PYTHAGOREAN_SYSTEM.forEach((s: any) => {
                const letterDetails: any = {};
                letterDetails.finalLetter = nameLetter;
                // finalLetters.push(nameLetter);

                if (s.letters.includes(nameLetter.toUpperCase())) {
                    letterDetails.finalLetterNumber = s.allottedNumber;
                    // finalLetterNumbers.push(s.allottedNumber);

                    if (VOWELS.includes(nameLetter.toUpperCase())) {
                        vowelsTotal = vowelsTotal + s.allottedNumber;
                    } else {
                        consonantsTotal = consonantsTotal + s.allottedNumber;
                    }
                    lettersArray.push(letterDetails);

                    finalLetters.push(nameLetter);
                    finalLetterNumbers.push(s.allottedNumber);

                    total = total + s.allottedNumber;
                }
            });
        });
        console.log("Pythogorean trData==", trData);
        // const originalData = [
        //     ...trData.filter((s: any) => s.systemName != "Pythogrean"),
        // ];

        // originalData.push({
        //     systemName: "Pythogrean",
        //     total: total,
        //     consonants: consonantsTotal,
        //     vowels: vowelsTotal,
        //     totalResult: getResultBasedOnTotal(total),
        //     lettersArray: lettersArray,
        //     finalLetters: finalLetters,
        //     finalLetterNumbers: finalLetterNumbers,
        // });
        // setTrData(originalData);
        setpythogoreanData({
            systemName: "Pythogrean",
            total: total,
            consonants: consonantsTotal,
            vowels: vowelsTotal,
            totalResult: getResultBasedOnTotal(total),
            lettersArray: lettersArray,
            finalLetters: finalLetters,
            finalLetterNumbers: finalLetterNumbers,
        });
    };

    const save = () => {
        const storedNames = localStorage.getItem("savedNames");
        if (!storedNames) {
            const data = [{ name: name, details: trData }];
            localStorage.setItem("savedNames", JSON.stringify(data));
        } else {
            const parsedStoredNames = JSON.parse(storedNames);
            const data = [
                ...parsedStoredNames,
                { name: name, details: trData },
            ];
            localStorage.setItem("savedNames", JSON.stringify(data));
        }
    };
    const clearAllSavedItems = () => {
        localStorage.clear();
    };
    const getSavedNamesResults = () => {
        // canCalculate = false;
        setCanCalculate(false);
        // savedNamesResults = [];
        setSavedNamesResults([]);
        const storedNames = localStorage.getItem("savedNames");
        if (storedNames) {
            const results = JSON.parse(storedNames);
            setSavedNamesResults(results.reverse());
            // savedNamesResults = results.reverse();
            console.log("savedNamesResults==", savedNamesResults);
        }
    };
    // isBadNumber1(num: number) {
    //   console.log('num==', num);
    //   // const badNumbers = [12, 13, 16, 18, 21, 61, 31, 36, 33, 31];
    //   const badNumbers = GlobalConstants.BAD_NUMBERS.find(s=>s.number==num);

    //   return badNumbers?true:false;
    // }
    const getbadNumberObj = (num: number) => {
        console.log("num==", num);
        // const badNumbers = [12, 13, 16, 18, 21, 61, 31, 36, 33, 31];
        const badNumberObj = GlobalStrConstants.BAD_NUMBERS.find(
            (s) => s.number == num
        );

        if (badNumberObj) {
            return { status: true, ...badNumberObj };
        }
        return { status: false, number: 0, eng: "", tel: "" };
    };
    const calculatedDate = () => {
        const arr = dob.split("-").join("").split("");

        const dateTotal = arr.reduce(
            (acc, current) => acc + Number(current),
            0
        );

        let finalTotal = "";

        if (dateTotal.toString().length == 1) {
            finalTotal = dateTotal.toString();
        } else {
            finalTotal = dateTotal.toString();

            const dateTotalArr = dateTotal
                .toString()
                .split("")
                .map((s) => Number(s));

            finalTotal =
                finalTotal +
                "/" +
                dateTotalArr.reduce((acc, current) => acc + Number(current), 0);
        }

        // dateTotal

        return finalTotal;
    };

    return (
        <main className="p-5">
            {/* <h1>Numerology Calculator</h1> */}

            {/* header */}
            <section className="header flex justify-between border-b-2">
                <h1 className="title1">Numerology Calculator</h1>
                <div className="flex flex-col">
                    <div className="space-x-2">
                        <span>W:</span>
                        <span
                            className="cursor-pointer font-semibold"
                            onClick={() => setIsWConsonant(!isWConsonant)}
                        >
                            {isWConsonant ? "Consonant" : "Vowel"}
                        </span>
                    </div>
                    <div className="space-x-2">
                        <span>Y:</span>
                        <span
                            className="cursor-pointer font-semibold"
                            onClick={() => setIsYConsonant(!isYConsonant)}
                        >
                            {isYConsonant ? "Consonant" : "Vowel"}
                        </span>
                    </div>
                </div>
            </section>
            <section className="enterName flex  p-3 gap-2   ">
                <label htmlFor="" className="">
                    Enter Name
                </label>
                <input
                    type="text"
                    className="  border-2 border-gray-300 px-4 py-2 text-2xl font-bold"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <button
                        type="button"
                        className="btn-primary flex-1"
                        onClick={submit}
                    >
                        Submit
                    </button>
                </div>
            </section>
            {/* <section className=" border-2 p-1"></section> */}
            <hr />

            {chaldeanData && <NumerologyMethod resultDetails={chaldeanData} />}
            {pythogoreanData && <NumerologyMethod resultDetails={pythogoreanData} />}
        </main>
    );
}
