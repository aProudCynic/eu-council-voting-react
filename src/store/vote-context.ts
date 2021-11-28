import { createStore, Reducer } from  'redux';
import { MemberState } from '../model/member-state';
import { MemberStatesConstantLoader } from '../service/member-states-constant-loader';

export interface StoreProps {
  memberStates: MemberState[];
}

const memberStatesLoader = new MemberStatesConstantLoader();

const voteReducer: Reducer = (state: StoreProps = {memberStates: memberStatesLoader.loadMemberStates()}, action) => {
  switch(action.type) {
    case 'castVote':
      const newMemberStateData = { ...action.memberStateVoting, vote: action.vote };
      const newMemberStatesData = state.memberStates.map(
        (memberState: MemberState) => memberState.name === action.memberStateVoting.name ? newMemberStateData : memberState
      );
      return {...state, memberStates: newMemberStatesData};
    default:
      return state;
  }
}

const voteContext = createStore(voteReducer);

export default voteContext;