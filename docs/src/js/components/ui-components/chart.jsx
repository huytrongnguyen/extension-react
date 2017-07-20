import React, { Component } from 'react';
import { Route, Container } from '~/rext';
import Pet from './example/pet';

@Route('/ui-components/charts')
export default class ChartComponent extends Component {
  // render() {
  //   return <Container>
  //     <div className="panel-header">
  //       <h1 className="panel-title">Charts</h1>
  //     </div>
  //     <Container className="panel-body">
  //       <p>
  //         The <code>Chart</code> provides the capability to visualize data.
  //         Each chart binds directly to a <code>Store</code> enabling automatic updates of the chart.
  //         A chart configuration object has some overall styling options as well as an array of axes and series.
  //         A chart instance example could look like this:
  //       </p>
  //       <Pet />
  //     </Container>
  //   </Container>
  // }
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Charts</h1>
      </div>
      <Container className="panel-body">
        <p>
          The <code>Chart</code> provides the capability to visualize data.
          Each chart binds directly to a <code>Store</code> enabling automatic updates of the chart.
          A chart configuration object has some overall styling options as well as an array of axes and series.
          A chart instance example could look like this:
        </p>
        <pre className="editor">{`import React, { Component } from 'react';
import { Container, Chart } from 'ext-react';
import PetStore from '~/stores/pet';

export default class PetView extends Component {
  constructor(props) {
    super(props);
    this.series = {
      type: 'pie',
      donut: 75,
      angleField: 'total',
      labelField: 'pet'
    }
  }

  render() {
    return <Container style={{height:300}}>
      <Viz series={this.series} store={PetStore} />
    </Container>
  }
}`}</pre>
        <p>In this example we set the width and height of a chart; We decide whether our series are animated or not and we select a store to be bound to the chart:</p>
        <Pet />
        <p>There are three types of charts:</p>
        <ul className="list-style-disc">
          <li>
            <strong>cartesian/chart</strong>
             - Creates a Chart for series implementations that plot values using cartesian coordinates. Examples of this include Bar, Area, Scatter, and Line charts.
          </li>
          <li>
            <strong>polar</strong>
             - Creates a chart for series implementations that plot values using polar coordinates. Examples of this include Pie and Radial charts.
          </li>
          <li>
            <strong>spacefilling</strong>
             - Creates a chart that fills the entire area of the chart.
          </li>
        </ul>
        <p>A Chart component manages the following items:</p>
        <ul className="list-style-disc">
          <li>
            <strong>Axes</strong>
             - These are accessed through <code>axis</code> and represent all the axes being defined and drawn for this visualization. This is a mixed collection.
          </li>
          <li>
            <strong>Series</strong>
             - These are accessed through <code>series</code> and represent all the series being drawn for the chart. This could be line, bar, scatter, and so on. This is also a mixed collection.
          </li>
          <li>
            <strong>Interactions</strong>
             - These are controllers that directly manipulate the series and axes when certain events are recognized.
          </li>
          <li>
            <strong>Legend Store</strong>
             - This represents the legend information collected from the series. Normally you can attach a data list to this store and get automatically updated on the legend information changes.
          </li>
        </ul>
      </Container>
    </Container>
  }
}