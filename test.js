module.exports = {
  'Example DDD': wind => {
    let heading = wind.getElement('h1').getText();
    return heading;
  }
}
