import React, { useState } from 'react';
import { Vote } from '../../model/vote';
import './VotePanel.css';

interface VotePanelProps {
  voteCast: Vote;
}

const VotePanel = (props: VotePanelProps) => {

  const [voteCast, setVoteCast] = useState(props.voteCast);

  const handleClick = (vote: Vote) => {
    setVoteCast(vote);
  }
  
  return (
    <td>
      {Object.values(Vote).map(
        vote => <span className = {vote === voteCast ? 'selected-vote' : 'non-selected-vote'} onClick={() => handleClick(vote)}>{vote}</span>
      )}
    </td>
  );
}

export default VotePanel;