import React,
{ 
  Component
} from 'react';
import {
  TextField,
  Typography,
  Slider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch
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
      dd: false,
    }
  }

  
  selectLiquor(event) {
    this.setState({selectLiquor: event.target.value})
  }

  onGenderChange(event) {
    this.setState({gender: event.target.value})
  }

  toggleDD(event) {
    this.setState((state) => {
      return {dd: !state.dd};
    })
  }

  onStartTime(event) {
    this.setState({startTime: event.target.value})
  }

  onEndTime(event) {
    this.setState({endTime: event.target.value})
  }

  soberGoal(event) {
    this.setState({soberGoal: event.target.value})

  }

  componentDidUpdate() { 
  }
  
  render() {
    
    const marks = [
      {
        value: 0,
        label: "Virgin",
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
        label: "Dead",
      }
      ];
    console.log(this.state)
    

    return (
      <form className="col s1" autoComplete="off"> 
        <div className="row">
          <TextField 
            id="liquor"
            label="Liquor Base"
            value={this.state.selectLiquor}
            onChange={this.selectLiquor.bind(this)}
          />
        </div>
        
        
        <div className="row">
          <TextField
            id="startTime"
            label="Start Time"
            type="time"
            defaultValue="00:00"
            value={this.state.startTime}
            onChange={this.onStartTime.bind(this)}
            className=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
  
        <div className="row">
          <TextField
            id="endTime"
            label="End Time"
            type="time"
            defaultValue="00:00"
            className=""
            value={this.state.endTime}
            onChange={this.onEndTime.bind(this)}
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
            defaultValue={0}
            getAriaValueText=""
            aria-labelledby="discrete-slider-custom"
            step={20}
            valueLabelDisplay="auto"
            value={this.state.soberGoal}
            onChange={this.soberGoal.bind(this)}
            marks={marks}
          />
          </div>
        </div> 
        <div className="row">
          <div className="input-field col">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender" 
                  name="gender1"
                  value={this.state.gender}
                  onChange={this.onGenderChange.bind(this)}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
          </div>
        </div>
        
        <FormControlLabel 
          control={
            <Switch
              checked={this.state.dd}
              onChange={this.toggleDD.bind(this)}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Are you the Designated Driver?"
        />
       
      </form>
      
    )
  }
}

export default DrinkPlan;
