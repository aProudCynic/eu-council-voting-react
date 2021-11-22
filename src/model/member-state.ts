import { Vote } from "./vote";

export class MemberState {
    private _name: string;
    public population: number;
    public vote: Vote;

    constructor(name: string, population: number) {
        this._name = name;
        this.population = population;
        this.vote = Vote.DID_NOT_VOTE;
    }

    public get name() {
        return this._name;
    }
}