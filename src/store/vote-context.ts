import React from 'react';
import { MemberState } from '../model/member-state';

interface VoteContextProps {
  memberStates: MemberState[];
  castVote: Function;
}

const VoteContext = React.createContext<VoteContextProps>({memberStates: [], castVote: () => {}});

export default VoteContext;