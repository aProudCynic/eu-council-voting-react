import { MemberState } from "../model/member-state";
import { Vote } from "../model/vote";
import { MemberStatesConstantLoader } from "./member-states-constant-loader";

export class MemberStatesQueryParamLoader extends MemberStatesConstantLoader {

    loadMemberStates = () => {
        const memberStates = super.loadMemberStates();
        const urlQueryParams = new URLSearchParams(window.location.search);
        const queryParams = Object.fromEntries(urlQueryParams);
        Object.entries(queryParams).forEach(queryParam => {
            const memberStateToChange: MemberState | undefined = memberStates.find(memberState => memberState.id === queryParam[0]);
            if (memberStateToChange) {
                const newVote: Vote | undefined = this.matchVoteWith(queryParam[1]);
                if (newVote) {
                    memberStateToChange.vote = newVote;
                }
            }
        });
        return memberStates;
    }

    private matchVoteWith = (memberStateVoteData: string): Vote | undefined => {
        switch (memberStateVoteData) {
            case '0':
                return Vote.DID_NOT_VOTE;
            case 'Y':
                return Vote.YES;
            case 'N':
                return Vote.NO;
            case 'A':
                return Vote.ABSENT;
        }
    }

}