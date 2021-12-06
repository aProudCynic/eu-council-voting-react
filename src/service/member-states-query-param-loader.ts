import { MemberState } from "../model/member-state";
import { vote, VoteType } from "../model/vote";
import { MemberStatesConstantLoader } from "./member-states-constant-loader";

export class MemberStatesQueryParamLoader extends MemberStatesConstantLoader {

    loadMemberStates = () => {
        const memberStates = super.loadMemberStates();
        const urlQueryParams = new URLSearchParams(window.location.search);
        const queryParams = Object.fromEntries(urlQueryParams);
        Object.entries(queryParams).forEach(queryParam => {
            const memberStateToChange: MemberState | undefined = memberStates.find(memberState => memberState.id === queryParam[0]);
            if (memberStateToChange) {
                const newVote: VoteType | undefined = this.matchVoteWith(queryParam[1]);
                if (newVote) {
                    memberStateToChange.vote = newVote;
                }
            }
        });
        return memberStates;
    }

    private matchVoteWith = (memberStateVoteData: string): VoteType | undefined => {
        return Object.values(vote).find(voteValue => voteValue.code === memberStateVoteData);
    }

}