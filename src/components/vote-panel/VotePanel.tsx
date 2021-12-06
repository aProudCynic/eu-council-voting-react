import React from 'react';
import { vote, VoteType } from '../../model/vote';
import './VotePanel.css';

interface VotePanelProps {
  voteCast: VoteType;
  voteCastingHandler: Function;
}

const VotePanel = (props: VotePanelProps) => {

  const handleClick = (vote: VoteType) => {
    props.voteCastingHandler(vote);
  }
  
  return (
    <td>
      {Object.values(vote).map(
        vote => <span className = {vote === props.voteCast ? 'selected-vote' : 'non-selected-vote'} onClick={() => handleClick(vote)} key={vote.code}>{vote.icon}</span>
      )}
    </td>
  );
}

export default VotePanel;