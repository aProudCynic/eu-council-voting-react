import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';
import VotePanel from '../vote-panel/VotePanel';

interface MemberStatePanelProps {
  memberState: MemberState;
}

const MemberStatePanel = (props: MemberStatePanelProps) => {

  const dispatch = useDispatch();

  const castVoteForMemberState = (vote: Vote) => {
    dispatch({type: 'castVote', vote: vote, memberStateVoting: props.memberState})
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