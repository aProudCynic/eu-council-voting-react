import React from 'react';
import QueryExportPanel from '../query-export-panel/QueryExportPanel';
import VoteAggregateBoard from '../vote-aggregate-board/VoteAggregateBoard';
import VoteResultBoard from '../vote-result-board/VoteResultBoard';

const VoteSummaryPanel = () => {

    return (
        <div>
            <VoteAggregateBoard />
            <VoteResultBoard />
            <QueryExportPanel />
        </div>
    );
}

export default VoteSummaryPanel;