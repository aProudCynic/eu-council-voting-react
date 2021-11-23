import React, { useState } from 'react';
import { MemberState } from '../../model/member-state';
import { Vote } from '../../model/vote';
import MemberStatePanel from '../member-state-panel/MemberStatePanel';
import './MemberStates.css';

const MemberStates = () => {

  const [memberStates, setMemberStates] = useState([
    new MemberState('Austria', 8822267),
    new MemberState('Belgium', 11413058),
    new MemberState('Bulgaria', 7050034),
    new MemberState('Czech Republic', 10610055),
    new MemberState('Denmark', 5781190),
    new MemberState('Germany', 82850000),
    new MemberState('Estonia', 1319133),
    new MemberState('Ireland', 4838259),
    new MemberState('Greece', 10738868),
    new MemberState('Spain', 46659302),
    new MemberState('France', 67221943),
    new MemberState('Croatia', 4105493),
    new MemberState('Italy', 60483973),
    new MemberState('Cyprus', 864236),
    new MemberState('Latvia', 1934379),
    new MemberState('Lithuania', 2808901),
    new MemberState('Luxembourg', 602005),
    new MemberState('Hungary', 9778371),
    new MemberState('Malta', 475701),
    new MemberState('The Netherlands', 17181084),
    new MemberState('Poland', 37976687),
    new MemberState('Portugal', 10291027),
    new MemberState('Romania', 19523621),
    new MemberState('Slovenia', 2066880),
    new MemberState('Slovakia', 5443120),
    new MemberState('Finland', 5513130),
    new MemberState('Sweden', 10120242),
  ].sort((memberState1, memberState2) => memberState1.name.localeCompare(memberState2.name)));

  const voteCastingHandler = (vote: Vote, memberStateVoting: MemberState) => {
    const newMemberStateData = { ...memberStateVoting, vote: vote };
    setMemberStates(previousState => {
      const newMemberStateArrayData = previousState
        .filter(memberState => memberStateVoting.name !== memberState.name)
        .concat(newMemberStateData)
        .sort((memberState1, memberState2) => memberState1.name.localeCompare(memberState2.name));
      return newMemberStateArrayData;
    });
  }

  return (
    <div className="MemberStates">
      <table>
        {memberStates.map(memberState => <MemberStatePanel memberState={memberState} voteCastingHandler={voteCastingHandler}/>)}
      </table>
    </div>
  );
}

export default MemberStates;