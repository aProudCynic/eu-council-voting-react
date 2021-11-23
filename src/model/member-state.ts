import { Vote } from "./vote";

export class MemberState {
    public name: string;
    public population: number;
    public vote: Vote;

    constructor(name: string, population: number) {
        this.name = name;
        this.population = population;
        this.vote = Vote.DID_NOT_VOTE;
    }
}