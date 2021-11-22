import React, { useState } from 'react';
import { Vote } from '../../model/vote';
import './VotePanel.css';

interface VotePanelProps {
  voteCast: Vote;
}

const VotePanel = (props: VotePanelProps) => {

  const [voteCast, setVoteCast] = useState(props.voteCast);

  return (
    <td>
     {Object.values(Vote).map(vote => <span className = {vote === voteCast ? 'selected-vote' : 'non-selected-vote'}>{vote}</span>)}
    </td>
  );
}

export default VotePanel;