import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VotePanel from '../vote-panel/VotePanel';

interface MemberStatePanelProps {
  memberState: MemberState;
}

const MemberStatePanel = (props: MemberStatePanelProps) => {

  const [memberState, setMemberState] = useState(props.memberState);

  const castVoteForMemberState = (vote: Vote) => {
    const updatedMemberState = {...memberState, vote: vote};
    setMemberState(updatedMemberState);
  }

  return (
    <tr>
      <td>{memberState.name}</td>
      <td>{memberState.population}</td>
      <VotePanel voteCast={memberState.vote} voteCastingHandler={castVoteForMemberState}/>
    </tr>
  );
}

export default MemberStatePanel;