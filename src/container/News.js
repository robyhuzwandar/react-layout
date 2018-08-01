import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import { Link } from "react-router-dom";
import "../style/news.css";
import Home from './Home';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: null, date: null, alert:[]};
  }

  handleSubmit(){
    this.setState({
      alert : 'Created Succes'
    })
  }

  render() {
    return <div className="container">
        <div className="alert alert-secondary" role="alert">
          Create News
        </div>
        {this.state.alert.map((val)=> <h3>{val}</h3>)}
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input maxLength="15" type="text" ref="title" className="form-control" placeholder="Title" required/>
            </div>

             <div className="form-group">
              <label>Content</label>
              <textarea placeholder="content" maxLength="60" cols="40" rows="5" size="60" className="form-control"  />
            </div>
        
            <div className="form-group">
              <label>Date</label>
              <br />
              <SingleDatePicker className="form-control" 
              small={true} 
              block={false} 
              date={this.state.date} numberOfMonths={1} onDateChange={date => this.setState(
                    { date }
                  )} focused={this.state.focused} onFocusChange={({ focused }) => this.setState(
                    { focused }
                  )} hideKeyboardShortcutsPanel={true} required/>
            </div>

            <div className="form-group">
              <label>Cover</label>
            <input type="file" className="form-control" required />
            </div>

            <div className="row">
              <div className="col-xs-2">
                <button type="clear" className="btn btn-primary">
                  Clear
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary">
                  <Link className="btn-cancel" to="/home">
                    Cancel
                  </Link>
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary" type="SUBMIT">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>;
  }
}
