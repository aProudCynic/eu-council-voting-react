import { Vote } from "./vote";

export class MemberState {
    public name: string;
    public population: number;
    public vote: Vote;
    public eurozoneMember: boolean;

    constructor(name: string, population: number, eurozoneMember = false) {
        this.name = name;
        this.population = population;
        this.vote = Vote.DID_NOT_VOTE;
        this.eurozoneMember = eurozoneMember;
    }
}