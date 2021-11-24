import React, { useContext } from 'react';
import VoteContext from '../../store/vote-context';
import MemberStatePanel from '../member-state-panel/MemberStatePanel';
import './MemberStatesPanel.css';

const MemberStatesPanel = () => {

  const voteContext = useContext(VoteContext);

  return (
      <div className="MemberStates">
        <table>
          {voteContext.memberStates.map(memberState => <MemberStatePanel memberState={memberState} />)}
        </table>
      </div>
  );
}

export default MemberStatesPanel;