import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import { MemberStatesLoader } from '../../service/member-states-loader';
import VoteContext from '../../store/vote-context';
import VoteCastingPanel from '../vote-casting-panel/vote-casting-panel';
import { MemberStatesQueryParamLoader } from '../../service/member-states-query-param-loader';
import VoteSummaryPanel from '../vote-summary-panel/VoteSummaryPanel';
import './CouncilVoteWidget.css';

const CouncilVoteWidget = () => {

    const memberStatesLoader: MemberStatesLoader = new MemberStatesQueryParamLoader();

    const [memberStates, setMemberStates] = useState(memberStatesLoader.loadMemberStates());

    const voteCastingHandler = (vote: Vote, memberStateVoting: MemberState) => {
        const newMemberStateData = {...memberStateVoting, vote};
        setMemberStates(previousState => previousState.map(
            memberState => memberState.id === newMemberStateData.id ? newMemberStateData : memberState
        ));
    }

    return (
        <VoteContext.Provider value={{ memberStates: memberStates, castVote: voteCastingHandler }}>
            <div className='CouncilVoteWidget'>
                <VoteCastingPanel />
                <VoteSummaryPanel />
            </div>
        </VoteContext.Provider>
    );
}

export default CouncilVoteWidget;