export class MajorityType {
    name: string;
    memberStatesThresholdPercent: number;
    populationThresholdPercent?: number;

    constructor(name: string, memberStatesThresholdPercent: number, populationThresholdPercent = 0) {
        this.name = name;
        this.memberStatesThresholdPercent = memberStatesThresholdPercent;
        this.populationThresholdPercent = populationThresholdPercent;
    }
}