import React from 'react';
import { useSelector } from 'react-redux';
import { MemberState } from '../../model/member-state';
import MemberStatePanel from '../member-state-panel/MemberStatePanel';
import './MemberStatesPanel.css';

const MemberStatesPanel = () => {

  const memberStates = useSelector((state: {memberStates: MemberState[]}) => state.memberStates);

  return (
      <div className="MemberStates">
        <table>
          {memberStates.map(memberState => <MemberStatePanel memberState={memberState} key={memberState.name}/>)}
        </table>
      </div>
  );
}

export default MemberStatesPanel;