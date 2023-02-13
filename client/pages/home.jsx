import React from 'react';
import MoodboardModal from '../components/createMoodboard.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodboards: [],
      boardId: 0
    };
    this.incrementBoardId = this.incrementBoardId.bind(this);
  }

  componentDidMount() {
    fetch('/api/moodboards')
      .then(res => res.json())
      .then(moodboard => {
        this.setState({
          moodboards: moodboard,
          boardId: moodboard.length
        });
      });
  }

  incrementBoardId() {
    this.setState(boardId => boardId + 1);
  }

  render() {
    return (
      <>
        {/* rendered moodboards */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {
            this.state.moodboards.map(moodboard => (
              <div key={moodboard.moodboardId}>
                <Moodboard name={moodboard.name} url={moodboard.url} moodboardId={moodboard.moodboardId} />
              </div>
            ))
          }
        </div>
        {/* create moodboard button */}
        <MoodboardModal boardId={this.state.boardId} updateId={this.incrementBoardId}/>
      </>
    );
  }
}

// moodboard render to home
function Moodboard(props) {
  const { name, url, moodboardId } = props;
  return (
    <a
      href={`#moodboards?moodboardId =${moodboardId}`}>
      <div className="card bg-moodboardName rounded-xl w-[350px] h-[225px]">
        <img className="object-cover w-[360px] h-[195px] rounded-t-xl" src={url} alt={name} />
        <div className="card-body">
          <h2 className="card-title font-lora pl-3 pt-1">{name}</h2>
        </div>
      </div>
    </a>
  );
}
