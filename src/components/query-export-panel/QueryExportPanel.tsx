import { render } from "@testing-library/react";
import { useContext } from "react";
import { MemberState } from "../../model/member-state";
import { Vote } from "../../model/vote";
import { VOTE_QUERY_PARAMETER_RESOLVER } from "../../service/member-states-query-param-loader";
import VoteContext from "../../store/vote-context";

const QueryExportPanel = () => {

    const voteContext = useContext(VoteContext);

    const getKeyByValue = (map: Map<string, Vote>, searchValue: string): string | undefined => {
        console.log(Object.entries(map), searchValue)
        return Array.from(map.keys()).find(key => map.get(key) === searchValue);
    }

    const generateQuery = (memberStates: MemberState[]) => {
        const queryParamInitializer = '?';
        // eslint-disable-next-line no-restricted-globals
        var result = `${location.protocol}//${location.host}${queryParamInitializer}`;
        memberStates.forEach(memberState => {
            const voteValue = getKeyByValue(VOTE_QUERY_PARAMETER_RESOLVER, memberState.vote);
            const isFirstValueToBeAdded = result === queryParamInitializer;
            if (!isFirstValueToBeAdded) {
                result += '&'
            }
            result += `${memberState.id}=${voteValue}`;

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
