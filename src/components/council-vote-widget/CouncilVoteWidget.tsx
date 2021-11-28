import React from 'react';
import MassVotingPanel from '../mass-voting-panel/MassVotingPanel';
import MemberStatesPanel from '../member-states-panel/MemberStatesPanel';
import VoteResultBoard from '../vote-result-board/VoteResultBoard';
import VoteSummaryBoard from '../vote-summary-board/VoteSummaryBoard';
import './CouncilVoteWidget.css';

const CouncilVoteWidget = () => {
   
    return (
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
    );
}

export default CouncilVoteWidget;