function normalizeDocument(document) {
  if (document) {
    const object = document.toObject();
    // eslint-disable-next-line no-underscore-dangle
    object.id = object._id;
    // eslint-disable-next-line no-underscore-dangle
    delete object._id;
    return object;
  }
  return document;
}

module.exports = {
  normalizeDocument,
};
