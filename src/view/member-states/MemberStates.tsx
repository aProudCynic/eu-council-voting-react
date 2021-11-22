import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import './MemberStates.css';

const MemberStates = () => {

  const [memberStates, setMemberStates] = useState([new MemberState('Hungary')]);

  return (
    <div className="MemberStates">
        {memberStates.map(memberState => <p>{memberState.name}</p>)}
    </div>
  );
}

export default MemberStates;