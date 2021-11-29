import { MemberState } from "../model/member-state";
import { MemberStatesLoader } from "./member-states-loader";

export class MemberStatesConstantLoader implements MemberStatesLoader {

    readonly compareMemberStatesByLocaleName = (memberState1: MemberState, memberState2: MemberState) => memberState1.name.localeCompare(memberState2.name);

    public loadMemberStates() {
        return [
            new MemberState('AT', 'Austria', 8822267, true),
            new MemberState('BE', 'Belgium', 11413058, true),
            new MemberState('BG', 'Bulgaria', 7050034),
            new MemberState('CZ', 'Czech Republic', 10610055),
            new MemberState('DK', 'Denmark', 5781190),
            new MemberState('DE', 'Germany', 82850000, true),
            new MemberState('EE', 'Estonia', 1319133, true),
            new MemberState('IE', 'Ireland', 4838259, true),
            new MemberState('EL', 'Greece', 10738868, true),
            new MemberState('ES', 'Spain', 46659302, true),
            new MemberState('FR', 'France', 67221943, true),
            new MemberState('HR', 'Croatia', 4105493),
            new MemberState('IT', 'Italy', 60483973, true),
            new MemberState('CY', 'Cyprus', 864236, true),
            new MemberState('LV', 'Latvia', 1934379, true),
            new MemberState('LT', 'Lithuania', 2808901, true),
            new MemberState('LU', 'Luxembourg', 602005, true),
            new MemberState('HU', 'Hungary', 9778371),
            new MemberState('MT', 'Malta', 475701, true),
            new MemberState('NL', 'The Netherlands', 17181084, true),
            new MemberState('PL', 'Poland', 37976687),
            new MemberState('PT', 'Portugal', 10291027, true),
            new MemberState('RO', 'Romania', 19523621),
            new MemberState('SI', 'Slovenia', 2066880, true),
            new MemberState('SK', 'Slovakia', 5443120, true),
            new MemberState('FI', 'Finland', 5513130, true),
            new MemberState('SE', 'Sweden', 10120242),
        ].sort(this.compareMemberStatesByLocaleName);
    }

}