import { createStore, Reducer } from  'redux';
import { MemberState } from '../model/member-state';

interface VoteContextProps {
  memberStates: MemberState[];
  castVote: Function;
}

const voteReducer: Reducer = (state = {memberStates: []}, action) => {
  switch(action.type) {
    case 'castVote':
      // TODO
      break;
  }
}

const voteContext = createStore(voteReducer);

export default voteContext;