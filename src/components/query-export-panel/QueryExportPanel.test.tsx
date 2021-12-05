
import { render, screen } from "@testing-library/react";
import { MemberState } from "../../model/member-state";
import { Vote } from "../../model/vote";
import VoteContext from "../../store/vote-context";
import QueryExportPanel from "./QueryExportPanel";

function renderVoteContext(memberStates: MemberState[]) {
    const mockContext = { memberStates: memberStates, castVote: () => { } }
    return render(
        <VoteContext.Provider value={mockContext}>
            <QueryExportPanel />
        </VoteContext.Provider>
    );
}

it("Query params are rendered correctly for all three vote types", () => {

    const yesmanlandCode = 'YES'
    const yesmanland = new MemberState(yesmanlandCode, 'Yesmanland', 1000);
    yesmanland.vote = Vote.YES;

    const naysayerstanCode = 'NO';
    const naysayerstan = new MemberState(naysayerstanCode, 'Naysayerstan', 1000);
    naysayerstan.vote = Vote.NO;

    const abstaniaCode = 'ABSTAIN';
    const abstainia = new MemberState(abstaniaCode, 'Abstainia', 1000);
    abstainia.vote = Vote.ABSENT;

    renderVoteContext([
        yesmanland,
        naysayerstan,
        abstainia,
    ]);

    expect(screen.getByDisplayValue('http://localhost?YES=Y&NO=N&ABSTAIN=A')).toBeInTheDocument();
})

it("Default vote type is not rendered to query params", () => {

    const yesmanlandVote = Vote.YES;
    const yesmanlandCode = 'YES';
    const yesmanland = new MemberState(yesmanlandCode, 'Yesmanland', 1000);
    yesmanland.vote = yesmanlandVote;

    const republicOfNotVotingCode = 'DEFAULT'
    const republicOfNotVoting = new MemberState(republicOfNotVotingCode, 'Republic of Default Vote', 1000);
    republicOfNotVoting.vote = MemberState.DEFAULT_VOTE;

    renderVoteContext([
        yesmanland,
        republicOfNotVoting,
    ]);

    // safety measure to ensure that test fails of default vote is changed to yes
    // @ts-ignore to let TypeScript compile despite cleverly deducing that this is currently always false
    expect(MemberState.DEFAULT_VOTE === yesmanlandVote).toBeFalsy();
    
    expect(screen.getByDisplayValue('http://localhost?YES=Y')).toBeInTheDocument();
})
