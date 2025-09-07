"use client";
import { useState } from "react";
import { LuBadgeCheck, LuBadgeX, LuEye } from "react-icons/lu";

export default function NumerologyCalculator() {
    const [canShowPythogoreanDetails, setCanShowPythogoreanDetails] =
        useState<boolean>(false);
    const [canShowChaldeanDetails, setCanShowChaldeanDetails] =
        useState<boolean>(false);
    const pythogroeanResult = {
        headers: ["K", "I", "R", "A", "N"],
        data: [1, 2, 3, 4, 10],
    };

    return (
        <main className="p-5">
            {/* <h1>Numerology Calculator</h1> */}

            {/* header */}
            <section className="header flex justify-between border-b-2">
                <h1>Numerology Calculator</h1>
                <div className="flex flex-col">
                    <div className="space-x-2">
                        <span>W</span>
                        <span>Consonant</span>
                    </div>
                    <div className="space-x-2">
                        <span>Y</span>
                        <span>Consonant</span>
                    </div>
                </div>
            </section>
            <section className="enterName flex justify-between items-center p-3 gap-2  ">
                <label htmlFor="" className="w-[25%]">
                    Enter Name
                </label>
                <input type="text" className="vform-control w-[50%]" />
                <div>
                    <button type="button" className="btn-primary flex-1">
                        Submit
                    </button>
                </div>
            </section>
            <section className=" border-2 p-1"></section>
            {/* 
            Pythogorean Method
            
            */}
            <section className="PythogoreanMethod  py-2">
                <div className="PythogoreanMethodHeader flex justify-between border-b-2 ">
                    <h1 className="flex justify-between gap-2">
                        <span className="font-bold">Pythogorean Method</span>
                        {/* <LuCircleCheckBig
                            size={24}
                            className="text-green-600"
                        /> */}
                        <LuBadgeCheck size={24} className="text-green-600" />
                    </h1>
                    <div className="flex flex-col">
                        <div className="space-x-2 text-green-600 font-bold text-right">
                            <span>Total</span>
                            <span>30</span>
                        </div>
                        <div className="space-x-2  text-green-600 font-bold">
                            <span>Good Number: </span>
                            <span> Amrutha Number</span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="vtable">
                    <div className="flex justify-between bg-amber-200 p-1">
                        <div>Total</div>
                        <div>Vowels</div>
                        <div>Consonants</div>
                        <div>TotalResult</div>
                    </div>
                    <div className="flex justify-between p-1 border-b-2">
                        <div>1</div>
                        <div>10</div>
                        <div>20</div>
                        <div
                            className="flex gap-2 cursor-pointer "
                            onClick={() =>
                                setCanShowPythogoreanDetails(
                                    !canShowPythogoreanDetails
                                )
                            }
                        >
                            <LuEye size={24} />
                            <span>View</span>
                        </div>
                    </div>
                </div>
                {/* ViewDetails */}
                {canShowPythogoreanDetails && (
                    <div className="viewDetails p-2">
                        <div className="flex justify-between bg-green-200 p-1">
                            {pythogroeanResult.headers.map((s, i) => (
                                <div key={"pytho_details_header_" + i}>{s}</div>
                            ))}
                        </div>
                        <div className="flex justify-between p-1  bg-green-200">
                            {pythogroeanResult.data.map((s, i) => (
                                <div key={"pytho_details_body_" + i}>{s}</div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
            {/* 
            Chaldean Method
            
            */}
            <section className="ChaldeanMethod  py-2">
                <div className="ChaldeanMethodHeader flex justify-between border-b-2 ">
                    <h1 className="flex justify-between gap-2">
                        <span className="font-bold">Chaldean Method</span>
                        <LuBadgeX size={24} className="text-green-600" />
                    </h1>
                    <div className="flex flex-col">
                        <div className="space-x-2 text-green-600 font-bold text-right">
                            <span>Total</span>
                            <span>30</span>
                        </div>
                        <div className="space-x-2  text-green-600 font-bold">
                            <span>Good Number: </span>
                            <span> Amrutha Number</span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="vtable">
                    <div className="flex justify-between bg-amber-200 p-1">
                        <div>Total</div>
                        <div>Vowels</div>
                        <div>Consonants</div>
                        <div>TotalResult</div>
                    </div>
                    <div className="flex justify-between p-1 border-b-2">
                        <div>1</div>
                        <div>10</div>
                        <div>20</div>
                        <div
                            className="flex gap-2 cursor-pointer "
                            onClick={() =>
                                setCanShowChaldeanDetails(
                                    !canShowChaldeanDetails
                                )
                            }
                        >
                            <LuEye size={24} />
                            <span>View</span>
                        </div>
                    </div>
                </div>
                {/* ViewDetails */}
                {canShowChaldeanDetails && (
                    <div className="viewDetails p-2">
                        <div className="flex justify-between bg-green-200 p-1">
                            {pythogroeanResult.headers.map((s, i) => (
                                <div key={"pytho_details_header_" + i}>{s}</div>
                            ))}
                        </div>
                        <div className="flex justify-between p-1  bg-green-200">
                            {pythogroeanResult.data.map((s, i) => (
                                <div key={"pytho_details_body_" + i}>{s}</div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
