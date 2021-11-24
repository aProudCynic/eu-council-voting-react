import React, { useContext } from 'react';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';

const VoteResultBoard = () => {

    const voteContext = useContext(VoteContext);

    const qualifiedMajority = { populationThresholdPercent: 65, memberStatesThresholdPercent: 55 };

    const yesVotingMemberStates = voteContext.memberStates.filter(memberState => memberState.vote === Vote.YES);
    const notVotingMemberStates = voteContext.memberStates.filter(memberState => memberState.vote === Vote.DID_NOT_VOTE);

    const yesVotingMemberStatesPercent = yesVotingMemberStates.length / voteContext.memberStates.length * 100;

    const yesVotingPopulationPercent = yesVotingMemberStates
        .map(memberState => memberState.population)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        / voteContext.memberStates
            .map(memberState => memberState.population)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        * 100;

    const isPassed = yesVotingPopulationPercent >= qualifiedMajority.populationThresholdPercent && yesVotingMemberStatesPercent >= qualifiedMajority.memberStatesThresholdPercent;
    const textResult = notVotingMemberStates.length ? `⏳ ${notVotingMemberStates.length} MEMBER STATES STILL NEED TO VOTE` : isPassed ? '✅ APPROVED' : '🛑 REJECTED';

    return (
        <div>
            <table>
                <tr>
                    <td />
                    <th>Member states (%)</th>
                    <th>Population (%)</th>
                </tr>
                <tr>
                    <th>Required</th>
                    <td>{qualifiedMajority.memberStatesThresholdPercent}</td>
                    <td>{qualifiedMajority.populationThresholdPercent}</td>
                </tr>
                <tr>
                    <th>Current</th>
                    <td>{yesVotingMemberStatesPercent}</td>
                    <td>{yesVotingPopulationPercent}</td>
                </tr>
            </table>
            <p>{textResult}</p>
        </div>
    );
}

export default VoteResultBoard;
