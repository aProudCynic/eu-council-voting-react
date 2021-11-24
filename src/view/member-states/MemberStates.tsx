import React, { useContext, useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';
import MemberStatePanel from '../member-state-panel/MemberStatePanel';
import './MemberStates.css';

interface MemberStateProps {
  voteCastingHandler: Function;
}

const MemberStates = (props: MemberStateProps) => {

  const voteContext = useContext(VoteContext);

  const voteCastingHandler = (vote: Vote, memberStateVoting: MemberState) => {
    props.voteCastingHandler(vote, memberStateVoting);
  }

  return (
      <div className="MemberStates">
        <table>
          {voteContext.memberStates.map(memberState => <MemberStatePanel memberState={memberState} voteCastingHandler={voteCastingHandler} />)}
        </table>
      </div>
  );
}

export default MemberStates;