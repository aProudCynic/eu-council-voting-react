import React from 'react';
import { Vote } from '../../model/vote';
import './VotePanel.css';

interface VotePanelProps {
  voteCast: Vote;
  voteCastingHandler: Function;
}

const VotePanel = (props: VotePanelProps) => {

  const handleClick = (vote: Vote) => {
    props.voteCastingHandler(vote);
  }
  
  return (
    <td>
      {Object.values(Vote).map(
        vote => <span className = {vote === props.voteCast ? 'selected-vote' : 'non-selected-vote'} onClick={() => handleClick(vote)} key={vote}>{vote}</span>
      )}
    </td>
  );
}

export default VotePanel;