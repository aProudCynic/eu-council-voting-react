import React from 'react';
import VoteAggregateBoard from '../vote-aggregate-board/VoteAggregateBoard';
import VoteResultBoard from '../vote-result-board/VoteResultBoard';

const VoteSummaryPanel = () => {

    return (
        <div>
            <VoteAggregateBoard />
            <VoteResultBoard />
        </div>
    );
}

export default VoteSummaryPanel;