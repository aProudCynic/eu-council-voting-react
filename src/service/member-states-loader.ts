import { MemberState } from "../model/member-state";

export interface MemberStatesLoader {
    loadMemberStates: () => MemberState[];
}