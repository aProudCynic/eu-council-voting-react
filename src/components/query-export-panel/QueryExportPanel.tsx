import { useContext } from "react";
import { MemberState } from "../../model/member-state";
import { Vote } from "../../model/vote";
import { VOTE_QUERY_PARAMETER_RESOLVER } from "../../service/member-states-query-param-loader";
import VoteContext from "../../store/vote-context";

const QueryExportPanel = () => {

    const voteContext = useContext(VoteContext);

    const getKeyByValue = (map: Map<string, Vote>, searchValue: string): string | undefined => {
        return Array.from(map.keys()).find(key => map.get(key) === searchValue);
    }

    // TODO extract next to import function
    const generateQuery = (memberStates: MemberState[]) => {
        const queryParamInitializer = '?';
        // eslint-disable-next-line no-restricted-globals
        var result = `${location.protocol}//${location.host}${queryParamInitializer}`;
        memberStates.forEach(memberState => {
            if (memberState.vote !== MemberState.DEFAULT_VOTE) {
                const voteValue = getKeyByValue(VOTE_QUERY_PARAMETER_RESOLVER, memberState.vote);
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
