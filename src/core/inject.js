import Ext from './ext';

export function Injectable(comp) {
  console.log(comp, Ext.Provider);
  Ext.Provider[comp.name] = new comp();
}

export default comp => {
  console.log(comp, Ext.Provider);
  return Ext.Provider[comp.name];
}
