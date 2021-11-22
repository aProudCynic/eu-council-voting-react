import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import VotePanel from '../vote-panel/VotePanel';

interface MemberStatePanelProps {
  memberState: MemberState;
}

const MemberStatePanel = (props: MemberStatePanelProps) => {

  const [memberState, setMemberState] = useState(props.memberState);

  return (
    <tr>
      <td>{memberState.name}</td>
      <td>{memberState.population}</td>
      <VotePanel voteCast={memberState.vote}/>
    </tr>
  );
}

export default MemberStatePanel;