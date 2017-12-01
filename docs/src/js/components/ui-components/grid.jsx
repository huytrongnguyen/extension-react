import React, { Component } from 'react';
import { Route, Container } from '~/rext';

@Route('/ui-components/grids')
export default class GridComponent extends Component {
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Grids</h1>
      </div>
      <Container className="panel-body">
        <p>
          <code>Grid</code> is one of the centerpieces of Extension React.
          It's an incredibly versatile component that provides an easy way to display and edit data.
        </p>
        <UserGrid /><br />
        <p>Let's get started by creating a basic <code>Grid</code>. Here's all you need to know to get a simple grid up and running:</p>
        <h3>Model and Store</h3>
        <p>
          <code>Grid</code> is simply a component that displays data contained in a <code>Store</code>.
          <code>Store</code> can be thought of as a collection of records, or <code>Model</code> instances.
        </p>
        <p>
          The benefit of this setup is separating our concerns.
          <code>Grid</code> is only concerned with displaying the data, while <code>Store</code> takes care of fetching and saving the data using proxy.
        </p>
        <p>First, let's create a Ext.data.Store that contains several "User" instances.</p>
        <pre className="editor">{`import { Store } from 'ext-react';

export default Store({
  storeId: 'UserStore',
  data: [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
  ]
})`}</pre>
        <p>
          For sake of ease, we configured <code>Store</code> to load its data inline.
          In a real world application, you would most likely configure the <code>Store</code> to use a proxy to load data from the server.
        </p>
        <h3>Grid Panel</h3>
        <p>
          Now, we have a model, which defines our data structure.
          We have also loaded several model instances into an <code>Store</code>. Now we're ready to display the data using <code>Grid</code>.
        </p>
        <pre className="editor">{`import React, { Component } from 'react';
import { Container, Grid } from 'ext-react';
import UserStore from '~/stores/user';

export default class UserGrid extends Component {
  render() {
    return <Container style={{minHeight:180}}>
      <Grid store={UserStore} style={{minHeight:180}}>
        <div text="Name" dataIndex="name" />
        <div text="Email" dataIndex="email" />
        <div text="Phone" dataIndex="phone" />
      </Grid>
    </Container>
  }
}`}</pre>
        <p>
          For sake of ease, we configured <code>Store</code> to load its data inline.
          In a real world application, you would most likely configure the <code>Store</code> to use a proxy to load data from the server.
        </p>
        <p>
          We just created a <code>Grid</code> that renders itself to the body element.
          We also told the Grid panel to get its data from the UserStore that we previously created.
        </p>
        <p>Finally, we defined the Grid panel's columns and gave them a dataIndex property. This dataIndex associates a field from our model to a column.</p>
      </Container>
    </Container>
  }
}