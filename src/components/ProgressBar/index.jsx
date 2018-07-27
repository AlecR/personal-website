import React, { Component } from 'react';
import './ProgressBar.css';
import posed from 'react-pose';

const springTransition = {
  type: 'spring'
};

const shakeTransition = {
  type: 'keyframes',
  values: [30, -30, 0]
};

const InnerCircle = posed.div({
  active: {
    scale: 1.05,
    transition: springTransition
  },
  viewed: {
    scale: 1.05,
    transition: springTransition
  },
  idle: {
    scale: 0.0,
    transition: springTransition
  },
  hovered: {
    scale: 0.5,
    transition: springTransition
  }
});

const InnerLine = posed.div({
  active: {
    height: '100%',
    transition: springTransition
  },
  viewed: {
    height: '100%',
    transition: springTransition
  },
  idle: {
    height: '0%',
    transition: springTransition
  }
});

const StepName = posed.div({
  active: {
    transition: shakeTransition,
    rotate: ({ i }) => i,
  },
  idle: {
    transition: shakeTransition
  }
});

class ProgressBar extends Component {

  state = {
    hoveredIndex: null
  }

  render() {
    return (
      <div className="container">
        <ul className="progressbar">
        {
          [...Array(this.props.steps.length).keys()].map(step => {
            const name = this.props.steps[step];
            var pose = 'idle';
            if(step < this.props.activeStep) {
              pose = 'viewed';
            } else if(step === this.props.activeStep) {
              pose = 'active';
            }
            return (
              <li 
                className='progressbar-step'
                onClick={() => this.props.onStepClick(name.toLowerCase())}
                onMouseEnter={() => this.setState({hoveredIndex: step})}
                onMouseLeave={() => this.setState({hoveredIndex: null})}
              >
                <StepName 
                  className={`step-name ${pose}`}
                  pose={pose}
                >
                  {name}
                </StepName>
                {
                  step > 0 ? (
                    <div className='step-line'>
                      <InnerLine 
                        className='step-inner-line'
                        pose={pose} 
                      />
                    </div>
                  ) : null
                } 
                <div 
                  className='circle'
                >
                  <InnerCircle 
                    class='inner-circle'
                    pose={this.state.hoveredIndex === step && step > this.props.activeStep ? 'hovered' : pose }
                  />
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
  
}

export default ProgressBar;