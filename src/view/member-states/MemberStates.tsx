import React, { useContext } from 'react';
import VoteContext from '../../store/vote-context';
import MemberStatePanel from '../member-state-panel/MemberStatePanel';
import './MemberStates.css';

const MemberStates = () => {

  const voteContext = useContext(VoteContext);

  return (
      <div className="MemberStates">
        <table>
          {voteContext.memberStates.map(memberState => <MemberStatePanel memberState={memberState} />)}
        </table>
      </div>
  );
}

export default MemberStates;