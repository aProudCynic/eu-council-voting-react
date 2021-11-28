import React, { useContext, useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';
import './MemberStateGroupsPanel.css';

// TODO think about possible inheritance with VotePanel
const MassVotingPanel = () => {

    const visegradFourFilter = (memberState: MemberState) => 
        memberState.name === 'Hungary' || 
        memberState.name === 'Slovakia' || 
        memberState.name === 'Czech Republic' || 
        memberState.name === 'Poland';
    const beneluxStatesFilter = (memberState: MemberState) => 
        memberState.name === 'Belgium' || 
        memberState.name === 'The Netherlands' || 
        memberState.name === 'Luxembourg';
    const bigStatesFilter = (memberState: MemberState) =>
        memberState.population > 50000000;
    const eurozoneMemberFilter = (memberState: MemberState) => memberState.eurozoneMember;
    const memberStateGroups: { [key: string]: Function; } = {
        'all': (_: MemberState) => true,
        'Visegrad Four': visegradFourFilter,
        'Benelux states': beneluxStatesFilter,
        'big states (50m+ population)': bigStatesFilter,
        'Eurozone member': eurozoneMemberFilter,
        'non-Eurozone member': (memberState: MemberState) => !eurozoneMemberFilter(memberState)
    }

    const voteContext = useContext(VoteContext);

    const [groupKey, setGroupKey] = useState<string>('all')

    const handleClick = (vote: Vote) => {
        voteContext.memberStates
        .filter((memberState: MemberState) => memberStateGroups[groupKey](memberState))
        .forEach(
            memberState => voteContext.castVote(vote, memberState)
        );
    }

    const onGroupChanged = (event: any) => {
        setGroupKey(event.target.value);
    };

    return (
        <div>
            <select onChange={onGroupChanged}>
                {Object.keys(memberStateGroups).map(key => <option value={key} key={key}>{key}</option>)}
            </select>: {Object.values(Vote).map(
                vote => <span className={'clickable-vote'} onClick={() => handleClick(vote)} key={`${vote}_massvote`}>{vote}</span>
            )}
        </div>
    );
}

export default MassVotingPanel;