import React, { useContext, useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';
import MemberStatePanel from '../member-state-panel/MemberStatePanel';
import VoteBoard from '../vote-board/VoteBoard';
import './MemberStates.css';

interface MemberStateProps {
  voteCastingHandler: Function;
}

const MemberStates = (props: MemberStateProps) => {

  const memberStates = useContext(VoteContext);
  
  const voteCastingHandler = (vote: Vote, memberStateVoting: MemberState) => {
    props.voteCastingHandler(vote, memberStateVoting);
  }

  return (
      <div className="MemberStates">
        <table>
          {memberStates.map(memberState => <MemberStatePanel memberState={memberState} voteCastingHandler={voteCastingHandler} />)}
        </table>
      </div>
  );
}

export default MemberStates;