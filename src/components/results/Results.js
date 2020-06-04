import React from 'react';
import './results.scss';

const Results = () => {
    return (
        <div className="results">
            <section className="results__group">
                <h2 className="results__heading">Data Type 1</h2>
                <table className="results__table">
                    <thead className="results__thead">
                        <tr className="results__thead-tr">
                            <th className="results__th">ID</th>
                            <th className="results__th">Username</th>
                            <th className="results__th">Bus Number</th>
                            <th className="results__th">Gas Tank Filled</th>
                            <th className="results__th">External Damage</th>
                            <th className="results__th">Technical Repair</th>
                            <th className="results__th">Washing Needed</th>
                            <th className="results__th">Vehicle State</th>
                            <th className="results__th">Result Time</th>
                        </tr>
                    </thead>
                    <tbody className="results__tbody">
                        <tr className="results__tbody-tr">
                            <td className="results__td" contentEditable="true">1</td>
                            <td className="results__td">John Doe</td>
                            <td className="results__td">654578</td>
                            <td className="results__td">Filled</td>
                            <td className="results__td">Damaged</td>
                            <td className="results__td">Needed</td>
                            <td className="results__td">Yes</td>
                            <td className="results__td">Bad</td>
                            <td className="results__td">2020/20/06</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="results__group">
                <h2 className="results__heading">Data Type 2</h2>
                <table className="results__table">
                    <thead className="results__thead">
                        <tr className="results__thead-tr">
                            <th className="results__th">ID</th>
                            <th className="results__th">Username</th>
                            <th className="results__th">Bus Number</th>
                            <th className="results__th">Gas Tank Filled</th>
                            <th className="results__th">External Damage</th>
                            <th className="results__th">Technical Repair</th>
                            <th className="results__th">Washing Needed</th>
                            <th className="results__th">Vehicle State</th>
                            <th className="results__th">Result Time</th>
                        </tr>
                    </thead>
                    <tbody className="results__tbody">
                        <tr className="results__tbody-tr">
                            <td className="results__td">1</td>
                            <td className="results__td">John Doe</td>
                            <td className="results__td">654578</td>
                            <td className="results__td">Filled</td>
                            <td className="results__td">Damaged</td>
                            <td className="results__td">Needed</td>
                            <td className="results__td">Yes</td>
                            <td className="results__td">Bad</td>
                            <td className="results__td">2020/20/06</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};
export default Results;
