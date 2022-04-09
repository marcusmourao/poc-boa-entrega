/* eslint-disable no-underscore-dangle */

function getSortType(sortType) {
  if (sortType) {
    return sortType === 'ASC' ? 1 : -1;
  }
  return 0;
}

class Pagination {
  constructor(req) {
    this._pageSize = parseInt(req.query.pageSize || process.env.DEFAULT_PAGE_SIZE, 10);
    this._pageNumber = parseInt(req.query.pageNumber || process.env.DEFAULT_FIRST_PAGE_NUMBER, 10);
    this._sortBy = req.query.sortBy || null;
    this._sortType = req.query.sortType || null;
    this._textSearch = req.query.textSearch || null;
    this._count = null;
    this._totalPages = null;
  }

  get pageSize() {
    return this._pageSize;
  }

  get pageNumber() {
    return this._pageNumber;
  }

  get sortBy() {
    return this._sortBy;
  }

  get sortType() {
    return this._sortType;
  }

  get textSearch() {
    return this._textSearch;
  }

  get count() {
    return this._count;
  }

  get totalPages() {
    return this._totalPages;
  }

  setCount(value) {
    this._count = value;
    this._totalPages = Math.ceil(value / this._pageSize);
  }

  toJSON() {
    return {
      pageSize: this._pageSize,
      pageNumber: this._pageNumber,
      sortBy: this._sortBy,
      sortType: this._sortType,
      textSearch: this._textSearch,
      count: this._count,
      totalPages: this._totalPages,
    };
  }

  getSortConfiguration() {
    if (this._sortBy) {
      return {
        [this._sortBy]: getSortType(this._sortType),
      };
    }
    return {};
  }

  getQuerySkip() {
    return this._pageSize * (this._pageNumber - 1);
  }

  getQueryLimit() {
    return this._pageSize;
  }
}

module.exports = Pagination;
