import React from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VotePanel from '../vote-panel/VotePanel';

interface MemberStatePanelProps {
  memberState: MemberState;
  voteCastingHandler: Function;
}

const MemberStatePanel = (props: MemberStatePanelProps) => {

  const castVoteForMemberState = (vote: Vote) => {
    props.voteCastingHandler(vote, props.memberState);
  }

  return (
    <tr>
      <td>{props.memberState.name}</td>
      <td>{props.memberState.population}</td>
      <VotePanel voteCast={props.memberState.vote} voteCastingHandler={castVoteForMemberState}/>
    </tr>
  );
}

export default MemberStatePanel;