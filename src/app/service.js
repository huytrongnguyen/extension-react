export default clazz => {
  const service = new clazz();
  service.serviceId = clazz.name;
  return service;
}