export interface VoteType {
    icon: string;
    code: string;
}

export const vote: Record<string, VoteType> = {
    yes: {icon: '👍', code: 'Y'},
    no: {icon: '👎', code: 'N'},
    abstain: {icon: '🤷‍♂️', code: 'A'},
    didNotVote: {icon: '🚫', code: '0'},
}