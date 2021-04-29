export default (pathname) => {
  var id = pathname.slice(10);
  if (id[id.length - 1] === '/') {
    id = id.slice(0, id.length - 1);
  }
  id = parseInt(id);
  return id;
};