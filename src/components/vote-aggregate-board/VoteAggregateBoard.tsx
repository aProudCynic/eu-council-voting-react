import React, { useContext } from 'react';
import { Formatters } from '../../formatters';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';

const VoteAggregateBoard = () => {

    const voteContext = useContext(VoteContext);

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
                        vote => <td key={`${vote}_ms`}>{(voteContext.memberStates.filter(memberState => memberState.vote === vote)).length}</td>
                    )}
                </tr>
                <tr>
                    <th>Population</th>
                    {Object.values(Vote).map(
                        vote => <td key={`${vote}_pop`}>{
                            Formatters.PERCENTAGE_FORMATTER.format(
                                (voteContext.memberStates.filter(memberState => memberState.vote === vote))
                                    .map(memberState => memberState.population)
                                    .reduce(sumReducer, 0)
                            )
                        }</td>
                    )}
                </tr>
            </tbody>
        </table>
    );
}

export default VoteAggregateBoard;
