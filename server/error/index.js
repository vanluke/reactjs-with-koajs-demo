export default function* (next) {
  try {
    yield next;
    const status = this.status || 404;
    if (status === 404) {
      this.throw(404);
    }
  } catch (err) {
    err.status = err.status || 500;
    err.message = err.expose ? err.message : 'Error!';
    this.status = err.status;
    this.body = {
      code: err.status,
      message: err.message
    };
    this.app.emit('error', err, this);
  }
}
