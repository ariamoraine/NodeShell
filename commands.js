module.exports = {
  pwd: function () {
    process.stdout.write(process.env.PWD);
  },
  date: function () {
    const now = new Date(3600000*Math.floor(Date.now()/3600000));
    process.stdout.write(`${now}`)
  }
}
