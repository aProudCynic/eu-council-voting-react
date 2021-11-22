import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import './MemberStates.css';

const MemberStates = () => {

  const [memberStates, setMemberStates] = useState([new MemberState('Hungary', 10000000)]);

  return (
    <div className="MemberStates">
      <table>
        {memberStates.map(memberState => <tr><td>{memberState.name}</td><td>{memberState.population}</td><td>{memberState.vote}</td></tr>)}
      </table>
    </div>
  );
}

export default MemberStates;