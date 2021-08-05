import React,
{ 
  Component
} from 'react';

import {
  TextField,
  Typography,
  Slider
} from '@material-ui/core';

import styles from './DrinkPlan.module.css'

class DrinkPlan extends Component {

  constructor() {

    super();
    this.state = {
      gender:"",
      liquorBase:"",
      eveningGoals:"",
      startTime:"",
      endTime:"",
      dd:"",
    }
  }

  componentDidUpdate() { 
  }
  
  render() {
    
    const marks = [
      {
        value: 0,
        label: "virgin",
      },
      {
        value: 20,
        label: "Stress relief",
      },
      {
        value: 40,
        label: "Friday",
      },
      {
        value: 60,
        label: "Drunk",
      },
      {
        value: 80,
        label: "Crawling",
      },
      {
        value: 100,
        label: "dead",
      }
    ]; 
    

    return (
      <form className="col s1" autoComplete="off"> 
        <div className="row">
          <TextField 
            id="liquor"
            label="Liquor Base"
          />
        </div>
        <div className="row">
          <TextField
            id="time"
            label="Start Time"
            type="time"
            defaultValue="2021-08-06"
            className=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
  
        <div className="row">
          <TextField
            id="time"
            label="End Time"
            type="time"
            defaultValue="2021-08-06"
            className=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="row">
          <div className="input-field col">
          <Typography id="discrete-slider-custom" gutterBottom>
            Soberness
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText=""
            aria-labelledby="discrete-slider-custom"
            step={20}
            valueLabelDisplay="auto"
            marks={marks}
          />
          </div>
        </div>
      </form>
    )
  }
}

export default DrinkPlan;
