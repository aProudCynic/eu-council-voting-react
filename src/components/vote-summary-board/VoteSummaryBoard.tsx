import React from 'react';
import { useSelector } from 'react-redux';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';

const VoteSummaryBoard = () => {

    const memberStates = useSelector((state: {memberStates: MemberState[]}) => state.memberStates);

    const sumReducer = (previousValue: number, currentValue: number) => previousValue + currentValue;

    return (
        <table>
            <thead>
                <tr>
                    <td />
                    {Object.values(Vote).map(
                        vote => <th key={vote}>{vote}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Member states</th>
                    {Object.values(Vote).map(
                        vote => <td key={`${vote}_ms`}>{(memberStates.filter(memberState => memberState.vote === vote)).length}</td>
                    )}
                </tr>
                <tr>
                    <th>Population</th>
                    {Object.values(Vote).map(
                        vote => <td key={`${vote}_pop`}>{(memberStates.filter(memberState => memberState.vote === vote))
                            .map(memberState => memberState.population)
                            .reduce(sumReducer, 0)}</td>
                    )}
                </tr>
            </tbody>
        </table>
    );
}

export default VoteSummaryBoard;
