import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import { MemberStatesConstantLoader } from '../../service/member-states-constant-loader';
import { MemberStatesLoader } from '../../service/member-states-loader';
import VoteContext from '../../store/vote-context';
import MassVotingPanel from '../mass-voting-panel/MassVotingPanel';
import MemberStatesPanel from '../member-states-panel/MemberStatesPanel';
import VoteResultBoard from '../vote-result-board/VoteResultBoard';
import VoteSummaryBoard from '../vote-summary-board/VoteSummaryBoard';
import './CouncilVoteWidget.css';

const CouncilVoteWidget = () => {

    const memberStatesLoader: MemberStatesLoader = new MemberStatesConstantLoader();

    const [memberStates, setMemberStates] = useState(memberStatesLoader.loadMemberStates());

    const voteCastingHandler = (vote: Vote, memberStateVoting: MemberState) => {
        const newMemberStateData = { ...memberStateVoting, vote: vote };
        setMemberStates(previousState => {
            const result = [...previousState];
            const index = result.indexOf(memberStateVoting);
            if (index === -1) {
                throw new Error(`Member state ${memberStateVoting.name} is not found!`);
            }
            result[index] = newMemberStateData;
            return result;
        });
    }

    return (
        <VoteContext.Provider value={{ memberStates: memberStates, voteCastingHandler: voteCastingHandler }}>
            <div className='widget-container'>
                <div>
                    <MassVotingPanel />
                    <MemberStatesPanel />
                </div>
                <div>
                    <VoteSummaryBoard />
                    <VoteResultBoard />
                </div>
            </div>
        </VoteContext.Provider>
    );
}

export default CouncilVoteWidget;