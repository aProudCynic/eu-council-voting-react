import { useContext } from "react";
import { MemberState } from "../../model/member-state";
import { vote, VoteType } from "../../model/vote";
import VoteContext from "../../store/vote-context";

const QueryExportPanel = (): JSX.Element => {

    const voteContext = useContext(VoteContext);

    const getKeyByValue = (voteTypes: Record<string, VoteType>, searchValue: VoteType): string => {
        const voteTypeEntry = Object.entries(voteTypes).find(voteTypeEntry => voteTypeEntry[1] === searchValue);
        if (!voteTypeEntry) {
            throw new Error(`Unindentifiable vote type for ${searchValue}`)
        }
        return voteTypeEntry[0];
    }

    // TODO extract next to import function
    const generateQuery = (memberStates: MemberState[]) => {
        const queryParamInitializer = '?';
        // eslint-disable-next-line no-restricted-globals
        var result = `${location.protocol}//${location.host}${queryParamInitializer}`;
        memberStates.forEach(memberState => {
            if (memberState.vote !== MemberState.DEFAULT_VOTE) {
                const voteValue = getKeyByValue(vote, memberState.vote);
                const lastCharacter = result.charAt(result.length - 1);
                const isFirstValueToBeAdded = lastCharacter === queryParamInitializer;
                if (!isFirstValueToBeAdded) {
                    result += '&'
                }
                result += `${memberState.id}=${voteValue}`;
            }
        })
        return result;
    }

    const copyQueryToClipBoard = () => {
        // TODO extract to state
        const query = generateQuery(voteContext.memberStates);
        navigator.clipboard.writeText(query);
    }

    return (
        <div>
            <input type="text" readOnly={true} value={generateQuery(voteContext.memberStates)} />
            <button onClick={copyQueryToClipBoard}>Copy to clipboard</button>
        </div>
    );
}

export default QueryExportPanel;
