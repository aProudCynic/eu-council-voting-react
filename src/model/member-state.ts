import { vote, VoteType } from "./vote";

export class MemberState {
    public static readonly DEFAULT_VOTE = vote.didNotVote;

    public id: string;
    public name: string;
    public population: number;
    public vote: VoteType;
    public isEurozoneMember: boolean;

    constructor(id: string, name: string, population: number, isEurozoneMember = false) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.vote = MemberState.DEFAULT_VOTE;
        this.isEurozoneMember = isEurozoneMember;
    }
}