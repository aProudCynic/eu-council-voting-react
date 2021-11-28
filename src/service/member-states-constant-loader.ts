import { MemberState } from "../model/member-state";
import { MemberStatesLoader } from "./member-states-loader";

export class MemberStatesConstantLoader implements MemberStatesLoader {

    readonly compareMemberStatesByLocaleName = (memberState1: MemberState, memberState2: MemberState) => memberState1.name.localeCompare(memberState2.name);

    loadMemberStates = () => [
        new MemberState('Austria', 8822267, true),
        new MemberState('Belgium', 11413058, true),
        new MemberState('Bulgaria', 7050034),
        new MemberState('Czech Republic', 10610055),
        new MemberState('Denmark', 5781190),
        new MemberState('Germany', 82850000, true),
        new MemberState('Estonia', 1319133, true),
        new MemberState('Ireland', 4838259, true),
        new MemberState('Greece', 10738868, true),
        new MemberState('Spain', 46659302, true),
        new MemberState('France', 67221943, true),
        new MemberState('Croatia', 4105493),
        new MemberState('Italy', 60483973, true),
        new MemberState('Cyprus', 864236, true),
        new MemberState('Latvia', 1934379, true),
        new MemberState('Lithuania', 2808901, true),
        new MemberState('Luxembourg', 602005, true),
        new MemberState('Hungary', 9778371),
        new MemberState('Malta', 475701, true),
        new MemberState('The Netherlands', 17181084, true),
        new MemberState('Poland', 37976687),
        new MemberState('Portugal', 10291027, true),
        new MemberState('Romania', 19523621),
        new MemberState('Slovenia', 2066880, true),
        new MemberState('Slovakia', 5443120, true),
        new MemberState('Finland', 5513130, true),
        new MemberState('Sweden', 10120242),
    ].sort(this.compareMemberStatesByLocaleName);

}