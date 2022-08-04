import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const buttonsArray = [
  {
    message: "apple",
    emoji: "🍏"
  },
  {
    message: "pineapple",
    emoji: "🍍"
  },
  {
    message: "kiwi",
    emoji: "🥝"
  },
  {
    message: "avokado",
    emoji: "🥑"
  },
  {
    message: "cherry",
    emoji: "🍒"
  },
  {
    message: "strawberry",
    emoji: "🍓"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {timerValue : 0};
    this.timerId = undefined;
    this.title = this.getButtonTitle();
    this.resetInterval = this.resetInterval.bind(this);
  }

  render() {
    return (
      <button onClick={this.resetInterval}>{this.title}</button>
    )
  }

  resetInterval() {
    
    if (this.timerId !== undefined) {
        clearInterval(this.timerId);
        this.setState({timerValue: 0});
        this.title = this.getButtonTitle();
    }
    this.timerId = setInterval(() => {
        this.setState({timerValue: this.state.timerValue + 1});
        this.title = this.getButtonTitle();
    }, 500);

  }

  getButtonTitle() {
    return `eaten ${this.state.timerValue} ${this.props.message} ${this.props.emoji} `;
}
}

root.render(
  <>
      {buttonsArray.map((e, index) => (
        <Button {...e} />
      ))}
  </>
)
