import React, { useContext } from 'react';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';

const VoteSummaryBoard = () => {

    const voteContext = useContext(VoteContext);

    const sumReducer = (previousValue: number, currentValue: number) => previousValue + currentValue;

    return (
        <table>
            <tr>
                <td />
                {Object.values(Vote).map(
                    vote => <th>{vote}</th>
                )}
            </tr>
            <tr>
                <th>Member states</th>
                {Object.values(Vote).map(
                    vote => <td>{(voteContext.memberStates.filter(memberState => memberState.vote === vote)).length}</td>
                )}
            </tr>
            <tr>
                <th>Population</th>
                {Object.values(Vote).map(
                    vote => <td>{(voteContext.memberStates.filter(memberState => memberState.vote === vote))
                        .map(memberState => memberState.population)
                        .reduce(sumReducer, 0)}</td>
                )}
            </tr>
        </table>
        );
}

export default VoteSummaryBoard;
