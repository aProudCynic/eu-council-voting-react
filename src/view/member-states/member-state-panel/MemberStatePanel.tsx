import React, { useState } from 'react';
import { MemberState } from '../../../model/member-state';

interface MemberStatePanelProps {
  memberState: MemberState;
}

const MemberStatePanel = (props: MemberStatePanelProps) => {

  const [memberState, setMemberState] = useState(props.memberState);

  return (
    <tr>
      <td>{memberState.name}</td>
      <td>{memberState.population}</td>
      <td>{memberState.vote}</td>
    </tr>
  );
}

export default MemberStatePanel;