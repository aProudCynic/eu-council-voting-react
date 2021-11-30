import React from 'react';
import MemberStateGroupsPanel from '../member-state-groups-panel/MemberStateGroupsPanel';
import MemberStatesPanel from '../member-states-panel/MemberStatesPanel';

const VoteCastingPanel = () => {

    return (
        <div>
            <MemberStateGroupsPanel />
            <MemberStatesPanel />
        </div>
    );
}

export default VoteCastingPanel;