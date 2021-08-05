import React, { Component } from 'react';


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

  componentDidMount() {
  
  }
  
  render() {
    return (
      <div>
        <div className="row">
  
          <form className="col s12" autoComplete="off">
  
             <div className="row">
              <div className="input-field col s12">
                <input id="liquor_base" type="text" className="validate" />
                <label htmlFor="liquor_base" className="active">
                  Liquor Base
                </label>
              </div>
            </div>
  
            <div className="row">
              <div className="input-field col s12">
                <input type="text" id="starttime" className="timepicker" />
                <label htmlFor="starttime" className="active">
                  Start Time
                </label>
              </div>
            </div>
  
            <div className="row">
              <div className="input-field col s12">
                <input type="text" id="endtime" className="timepicker" />
                <label htmlFor="endtime" className="active">
                  End Time
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default DrinkPlan;
