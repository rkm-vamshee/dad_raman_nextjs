/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { LuBadgeCheck, LuBadgeX, LuEye, LuEyeClosed } from "react-icons/lu";
interface INumerologyMethod {
    resultDetails: any;
}
export default function NumerologyMethod({ resultDetails }: INumerologyMethod) {
    const [canShow, setCanShow] = useState<boolean>(false);
    return (
        <section className="ChaldeanMethod  py-2">
            <div className="ChaldeanMethodHeader flex justify-between border-b-2 ">
                <h1 className="flex justify-between gap-2">
                    <span className="font-bold">
                        {resultDetails.systemName} Method
                    </span>
                    {resultDetails.totalResult.type === "Good Number" ? (
                        <LuBadgeCheck size={24} className="text-green-600" />
                    ) : (
                        <LuBadgeX size={24} className="text-red-600" />
                    )}
                </h1>
                <div className="flex flex-col">
                    <div
                        className={`space-x-2   font-bold ${
                            resultDetails.totalResult.type === "Good Number"
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        <span>Total</span>
                        <span>{resultDetails.totalResult.total}</span>
                    </div>
                    <div
                        className={`space-x-2   font-bold ${
                            resultDetails.totalResult.type === "Good Number"
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        <span>{resultDetails.totalResult.type} : </span>
                        <span>{resultDetails.totalResult.eng}</span>
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
                    <div>{resultDetails.total}</div>
                    <div>{resultDetails.vowels}</div>
                    <div>{resultDetails.consonants}</div>

                    <div
                        className="flex gap-2 cursor-pointer "
                        onClick={() => setCanShow(!canShow)}
                    >
                        {!canShow?<LuEye size={24} />:<LuEyeClosed size={24} />}
                        <span>View</span>
                    </div>
                </div>
            </div>
            {/* ViewDetails */}
            {canShow && (
                <div className="viewDetails p-2">
                    <div
                        className={`flex justify-between  px-2 py-2 ${resultDetails.totalResult.type === "Good Number" ?'bg-green-200' :'bg-red-200'} `}
                    >
                        {resultDetails.finalLetters.map((s: any, i: number) => (
                            <div key={"pytho_details_header_" + i}>{s}</div>
                        ))}
                    </div>
                    <div  className={`flex justify-between  px-2 py-2 ${resultDetails.totalResult.type === "Good Number" ?'bg-green-200' :'bg-red-200'} `}>
                        {resultDetails.finalLetterNumbers.map(
                            (s: any, i: number) => (
                                <div key={"pytho_details_body_" + i}>{s}</div>
                            )
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
