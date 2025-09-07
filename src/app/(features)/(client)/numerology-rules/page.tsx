/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalStrConstants from "@/app/_shared/constants/GlobalStrConstants";
import React from "react";

export default function NumerologyRulesPage() {
    const constants = GlobalStrConstants;
    return (
        
            <main className="container p-3">
                <div className="row">
                    <div className="container">
                        <div className="row">
                          
                            <div className="col-md-12">
                                <h3 className="title1">Numerology Rules </h3>
                                <h3>CHALDEAN Name-Number rules</h3>
                                <table className="bordered w50">
                                    <thead>
                                        <tr>
                                            <th>Letters</th>
                                            <th>Alotted Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {constants.CHALDEAN_SYSTEM.map(
                                            (s:any, i) => (
                                                <tr key={"rules_" + i}>
                                                    <td>{s.letters.join(',')}</td>
                                                    <td>{s.allottedNumber}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <hr />
                                <h3>PYTHAGOREAN Name-Number rules</h3>
                                <table className="bordered  w50">
                                    <thead>
                                        <tr>
                                            <th>Letters</th>
                                            <th>Alotted Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {constants.PYTHAGOREAN_SYSTEM.map(
                                            (s, i) => (
                                                <tr key={"rules_pytho_" + i}>
                                                 <td>{s.letters}</td>
                                                    <td>{s.allottedNumber}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <hr />
                                <h3>Good Numbers</h3>
                                <table className="bordered  w50">
                                    <thead>
                                        <tr>
                                            <th>Number</th>
                                            <th>Result Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {constants.GOOD_NUMBERS.map((s, i) => (
                                            <tr key={"rules_good_num_" + i}>
                                                <td>{s.number}</td>
                                                    <td>{s.eng}</td>
                                             
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <h3>Bad Numbers</h3>
                                <table className="bordered  w50">
                                    <thead>
                                        <tr>
                                            <th>Number</th>
                                            <th>Result Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {constants.BAD_NUMBERS.map((s, i) => (
                                            <tr key={"rules_good_num_" + i}>
                                              <td>{s.number}</td>
                                                    <td>{s.eng}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
    );
}
