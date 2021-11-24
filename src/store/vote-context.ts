import React from 'react';
import { MemberState } from '../model/member-state';

const VoteContext = React.createContext<MemberState[]>([]);

export default VoteContext;