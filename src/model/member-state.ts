import { Vote } from "./vote";

export class MemberState {
    public static readonly DEFAULT_VOTE = Vote.DID_NOT_VOTE;

    public id: string;
    public name: string;
    public population: number;
    public vote: Vote;
    public eurozoneMember: boolean;

    constructor(id: string, name: string, population: number, eurozoneMember = false) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.vote = MemberState.DEFAULT_VOTE;
        this.eurozoneMember = eurozoneMember;
    }
}