import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodboards: []
    };
  }

  componentDidMount() {
    fetch('/api/moodboards')
      .then(res => res.json())
      .then(moodboards => this.setState({ moodboards }));
  }

  // const moodboardList = moodboard.map(moodboard =>
  //     <li key={moodboard.moodboardId}>{ url, moodboard.name }</li>
  //   )
  render() {
    return (
      <>
        {/* rendered moodboards */}
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          {
            this.state.moodboards.map(moodboard => (
              <div key={moodboard.moodboardId}>
                <Moodboard name={moodboard.name} url={moodboard.url} moodboardId={moodboard.moodboardId} />
              </div>
            ))
          }
        </div>
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
      <div className="card bg-moodboardName rounded-xl w-[360px] h-[225px]">
        <img className="object-cover w-[360px] h-[195px] rounded-t-xl" src={url} alt={name} />
        <div className="card-body">
          <h2 className="card-title pl-3 pt-1">{name}</h2>
        </div>
      </div>
    </a>
  );
}
