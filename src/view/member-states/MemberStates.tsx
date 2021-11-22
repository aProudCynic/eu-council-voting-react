import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import MemberStatePanel from './member-state-panel/MemberStatePanel';
import './MemberStates.css';

const MemberStates = () => {

  const [memberStates, setMemberStates] = useState([new MemberState('Hungary', 10000000)]);

  return (
    <div className="MemberStates">
      <table>
        {memberStates.map(memberState => <MemberStatePanel memberState={memberState}/>)}
      </table>
    </div>
  );
}

export default MemberStates;