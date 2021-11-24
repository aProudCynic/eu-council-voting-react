import React, { useContext } from 'react';
import { Vote } from '../../model/vote';
import VoteContext from '../../store/vote-context';
import './MassVotingPanel.css';

// TODO think about possible inheritance with VotePanel
const MassVotingPanel = () => {

    const voteContext = useContext(VoteContext);

    const handleClick = (vote: Vote) => {
        voteContext.memberStates.forEach(
            memberState => voteContext.voteCastingHandler(vote, memberState)
        );
    }

    return (
        <div>
            all: {Object.values(Vote).map(
                vote => <span className={'clickable-vote'} onClick={() => handleClick(vote)}>{vote}</span>
            )}
        </div>
    );
}

export default MassVotingPanel;