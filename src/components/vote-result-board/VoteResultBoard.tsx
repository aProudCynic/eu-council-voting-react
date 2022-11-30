import React, { useContext, useState } from 'react';
import { MajorityType } from '../../model/majority-type';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';

const VoteResultBoard = () => {

    const majorities = [
        new MajorityType('Qualified majority', 55, 65),
        new MajorityType('Reinforced qualified majority', 72, 65),
        new MajorityType('Simple majority', 50),
        new MajorityType('Unanimity', 100),
    ]

    const voteContext = useContext(VoteContext);

    const [selectedMajority, setSelectedMajority] = useState(majorities[0])

    const yesVotingMemberStates = voteContext.memberStates.filter(memberState => memberState.vote === Vote.YES);
    const notVotingMemberStates = voteContext.memberStates.filter(memberState => memberState.vote === Vote.DID_NOT_VOTE);
    const eligibleMemberStates = voteContext.memberStates.filter(memberState => memberState.vote !== Vote.EXCLUDED);
    
    const yesVotingMemberStatesPercent = yesVotingMemberStates.length / eligibleMemberStates.length * 100;
    const yesVotingPopulationPercent = yesVotingMemberStates
        .map(memberState => memberState.population)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        / eligibleMemberStates
            .map(memberState => memberState.population)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        * 100;

    const isPopulationThresholdPassed = selectedMajority.populationThresholdPercent ? yesVotingPopulationPercent > selectedMajority.populationThresholdPercent : true;
    const isMemberStateNumberThresholdPassed = yesVotingMemberStatesPercent >= selectedMajority.memberStatesThresholdPercent;
    const isPassed = isPopulationThresholdPassed && isMemberStateNumberThresholdPassed;

    const textResult = notVotingMemberStates.length ?
        `⏳ ${notVotingMemberStates.length} MEMBER STATES STILL NEED TO VOTE` : isPassed ?
            '✅ APPROVED' : '🛑 REJECTED';

    const onMajorityChanged = (event: any) => {
        const newlySelectedMajorityName = event.target.value;
        const newlySelectedMajority = majorities.find(majority => majority.name === newlySelectedMajorityName);
        if (newlySelectedMajority && newlySelectedMajority !== selectedMajority) {
            setSelectedMajority(newlySelectedMajority);
        }
    }

    return (
        <div>
            <select onChange={onMajorityChanged}>
                {majorities.map(majority => <option value={majority.name} key={majority.name}>{majority.name}</option>)}
            </select>
            <table>
                <tr>
                    <td />
                    <th>Member states (%)</th>
                    <th>Population (%)</th>
                </tr>
                <tr>
                    <th>Required</th>
                    <td>{selectedMajority.memberStatesThresholdPercent}</td>
                    <td>{selectedMajority.populationThresholdPercent}</td>
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
