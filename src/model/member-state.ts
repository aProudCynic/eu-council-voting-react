import { Vote } from "./vote";

export class MemberState {
    private _id: string;
    public name: string;
    public population: number;
    public vote: Vote;
    public eurozoneMember: boolean;

    constructor(id: string, name: string, population: number, eurozoneMember = false) {
        this._id = id;
        this.name = name;
        this.population = population;
        this.vote = Vote.DID_NOT_VOTE;
        this.eurozoneMember = eurozoneMember;
    }

    get id() {
        return this._id;
    }
}