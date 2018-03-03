import React from 'react';
import Ext from '~/core/ext';
import { Container } from '~/components/container';
import { Checkbox } from '~/components/form';

export default function GridHeader({ outerWidth, headerWidth, checkColumn, columns = [], store, ...others }) {
  return <section className="rx-grid-header" style={{width:outerWidth}}>
    <Container layout="column" className="rx-grid-header-container" style={{width:headerWidth}}>
      {checkColumn && <div className="rx-grid-header-column" style={{width:Ext.CHECK_COLUMN_WIDTH}}>
          {(checkColumn === 'multiple') && <Checkbox disabled={store.count() === 0}
                                                      checked={store.count() > 0 && store.getSelectedRecords().count() === store.count()}
                                                      onChange={() => store.toggleSelectAll()} />}
        </div>}
      {columns.map(({ header = '', className = '', ...others }) =>
        <div className={Ext.className('rx-grid-header-column text-center', className)} style={{flex:1}} {...others}>
          {header}
        </div>
      )}
      <div style={{width:Ext.SCROLL_WIDTH}} />
    </Container>
  </section>
}