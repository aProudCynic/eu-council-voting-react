import React from 'react';
import VoteAggregateBoard from '../vote-aggregate-board/VoteAggregateBoard';
import VoteResultBoard from '../vote-result-board/VoteResultBoard';
import './CouncilVoteWidget.css';

const VoteSummaryPanel = () => {

    return (
        <div>
            <VoteAggregateBoard />
            <VoteResultBoard />
        </div>
    );
}

export default VoteSummaryPanel;