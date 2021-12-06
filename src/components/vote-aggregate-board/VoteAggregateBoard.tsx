import React, { useContext } from 'react';
import { vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';

const VoteAggregateBoard = () => {

    const voteContext = useContext(VoteContext);

    const sumReducer = (previousValue: number, currentValue: number) => previousValue + currentValue;

    return (
        <table>
            <thead>
                <tr>
                    <td />
                    {Object.values(vote).map(
                        vote => <th key={vote.code}>{vote.icon}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Member states</th>
                    {Object.values(vote).map(
                        vote => <td key={`${vote.code}_ms`}>{(voteContext.memberStates.filter(memberState => memberState.vote === vote)).length}</td>
                    )}
                </tr>
                <tr>
                    <th>Population</th>
                    {Object.values(vote).map(
                        vote => <td key={`${vote.code}_pop`}>{(voteContext.memberStates.filter(memberState => memberState.vote === vote))
                            .map(memberState => memberState.population)
                            .reduce(sumReducer, 0)}</td>
                    )}
                </tr>
            </tbody>
        </table>
    );
}

export default VoteAggregateBoard;
