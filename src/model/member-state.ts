import { Vote } from "./vote";

export class MemberState {
    private _name: string;
    public vote: Vote;

    constructor(name: string) {
        this._name = name;
        this.vote = Vote.DID_NOT_VOTE;
    }

    public get name() {
        return this._name;
    }
}