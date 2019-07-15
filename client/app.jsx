//note: very little touch up was done on the front end by me, just accomodating changes to perform SSR


import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    console.log('gettgin static props', this.props)
    this.state = {
        beginning_date:null,
        end_date:null,
        beginning_time:null,
        end_time:null,
        unavailable_time: null,
        curDateTime: Date.now()
    };

   
  }

  componentDidMount() {
    console.log('ComponentDidMount...\nEvent handler hooks not working because of passing down props prior to SSR')

  //   //Get state props if not present
  //   if(this.state.photos.length==0){ 

  //   //Get listing Id from address bar and escape it
  //   let listingNumber = JSON.stringify(window.location.pathname.slice('/').split('/')[1]);

  //   //Make API request with listing ID as params
  //   fetch(`/carousel/photos/${listingNumber}`)
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log(data);
  //       let photos = [];
  //       for(let i in data){
  //         photos.push(data[i])
  //       }

  //       //Update state with photos
  //       this.setState({photos},()=>console.log(state updated));
  //     });
  //   }
  }


  render() {

   
  
      return (
        <React.Fragment>
            Calendar
            <label>Select start date</label>
          <CalendarHeader/>
          <CalendarBody/>
        <input type="button"></input>
        </React.Fragment>
      );
    }
  
}

//for SSR Carousel component has to be exported, however Babel's JS transpiler 
//will not see a window global property because it resides on the browser only
//
if (typeof window !== 'undefined') {
  //hydrate places the event handler hooks onto the page, however it doesn't work because it doesn't expect state to contain props
  ReactDOM.hydrate(<Calendar />, document.getElementById('app-root'), console.log('hydration triggered A:', JSON.stringify(document.getElementById('carousel-container'))));
}

export default Carousel;
