import React, { useContext } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';
import VotePanel from '../vote-panel/VotePanel';

interface MemberStatePanelProps {
  memberState: MemberState;
}

const MemberStatePanel = (props: MemberStatePanelProps) => {

  const voteContext = useContext(VoteContext);

  const castVoteForMemberState = (vote: Vote) => {
    voteContext.voteCastingHandler(vote, props.memberState);
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