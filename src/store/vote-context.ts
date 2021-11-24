import React from 'react';
import { MemberState } from '../model/member-state';

interface VoteContextProps {
  memberStates: MemberState[];
  voteCastingHandler: Function;
}

const VoteContext = React.createContext<VoteContextProps>({memberStates: [], voteCastingHandler: () => {}});

export default VoteContext;