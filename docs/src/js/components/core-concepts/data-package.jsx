import React, { PureComponent } from 'react';
import { Route, Container } from '~/rext';

@Route('/core-concepts/data-package')
export default class DataPackage extends PureComponent {
  render() {
    return <Container className="main container scrollable">
      <h1 className="mb-md">Data Package</h1>
      <p className="mb-md">The data package is what loads and saves all of the data in your application.</p>
      <h3 className="mb-md">Models</h3>
      <p className="mb-md">The centerpiece of the data package is `Model` which represents an entity in an application.</p>
      <h3 className="mb-md">Stores</h3>
      <p className="mb-md">The <code>Store</code> class encapsulates a client side cache of <code>Model</code> objects.</p>
      <pre className="mb-md">
{`import { Store } from 'ext-react'

export default Store({
  storeId: 'CardStore',
  proxy: {
    url: '/data/card.json'
  }
})`}
      </pre>
      <p className="mb-md">
        In the example above we configured an AJAX proxy to load data from the url <code>/api/user/search</code>.
        Stores load data via <code>proxy</code> with this following structure:
      </p>
      <pre className="mb-md">
{`{
  url:    /* The URL from which to request the data object */,
  method: /* The default HTTP method to be used for requests. If not set, GET will be used. */
  params: /* Request parameters sent as json data */
  reader: /* Use to decode the server's response */
}`}
      </pre>
      <p className="mb-md">Stores can also load data inline. Internally, Store converts each of the objects we pass in as cfg-data into Model instances:</p>
      <pre className="mb-md">
{`import { Store } from 'ext-react'

export default Store({
  storeId: 'UserStore',
  data: [
    {firstName: 'Peter',   lastName: 'Venkman'},
    {firstName: 'Egon',    lastName: 'Spengler'},
    {firstName: 'Ray',     lastName: 'Stantz'},
    {firstName: 'Winston', lastName: 'Zeddemore'}
  ]
})`}
      </pre>
      <p className="mb-md">Now, just bind a store to the <code>Component</code>:</p>
      <pre className="mb-md">
{`import React, { PureComponent } from 'react';
import CardStore from '~/stores/card';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.reload = () => this.forceUpdate();
  }

  componentDidMount() {
    CardStore.clearData();
    CardStore.load();
    CardStore.subscribe(this.reload);
  }

  render() {
    const records = CardStore.getData();
    return <section>
      <section className="rx-grid-header">
        <div className="d-flex flex-row rx-grid-header-container">
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>ID</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Name</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Type</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Armor</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Weapon</div>
        </div>
      </section>
      <section className="rx-grid-body" style={{overflow:'visible'}}>
        <section className="rx-grid-view">
          {records.map(record => <article className="d-flex flex-row rx-grid-row">
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Id')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Name')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Type')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('ArmorUsable')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('WeaponUsable')}</div>
          </article>)}
        </section>
      </section>
    </section>;
  }
}`}
      </pre>
      <p className="mb-md">
        In this above example, we use <code>subscribe</code> to update the component whenever data's changed.
        Because Store convert data to Model then you need to use <code>get</code> to access data.
      </p>
    </Container>
  }
}