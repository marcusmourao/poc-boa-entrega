const Pagination = require('./Pagination');

function getReqMock({ pageSize, pageNumber } = {}) {
  return {
    query: {
      pageSize: pageSize || 10,
      pageNumber: pageNumber || 2,
      sortBy: 'name',
      sortType: 'ASC',
      textSearch: 'text-search',
    },
  };
}

describe('Pagination', () => {
  it('should create default pagination', () => {
    const pagination = new Pagination({ query: {} });
    expect(pagination.pageSize).toBe(20);
    expect(pagination.pageNumber).toBe(1);
  });

  it('should create pagination with req pageSize and pageNumber', () => {
    const pagination = new Pagination(getReqMock());
    expect(pagination.pageSize).toBe(10);
    expect(pagination.pageNumber).toBe(2);
  });

  it('should set pagination count when count is multiple from pageSize', () => {
    const pagination = new Pagination(getReqMock());

    pagination.setCount(40);

    expect(pagination.toJSON()).toEqual({
      count: 40,
      pageNumber: 2,
      pageSize: 10,
      sortBy: 'name',
      sortType: 'ASC',
      textSearch: 'text-search',
      totalPages: 4,
    });
  });

  it('should set pagination count when count is multiple from pageSize', () => {
    const pagination = new Pagination(getReqMock());

    pagination.setCount(41);

    expect(pagination.toJSON()).toEqual({
      count: 41,
      pageNumber: 2,
      pageSize: 10,
      sortBy: 'name',
      sortType: 'ASC',
      textSearch: 'text-search',
      totalPages: 5,
    });
  });

  it('should build full pagination', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 1,
        sortBy: 'age',
        sortType: 'ASC',
        textSearch: 'text-search',
      },
    });

    pagination.setCount(0);

    expect(pagination.count).toBe(0);
    expect(pagination.pageSize).toBe(10);
    expect(pagination.pageNumber).toBe(1);
    expect(pagination.totalPages).toBe(0);
    expect(pagination.sortBy).toBe('age');
    expect(pagination.sortType).toBe('ASC');
    expect(pagination.textSearch).toBe('text-search');
  });
  it('should get query skip when page number is 1', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 1,
        sortBy: 'age',
        sortType: 'ASC',
        textSearch: 'text-search',
      },
    });

    expect(pagination.getQuerySkip()).toBe(0);
  });
  it('should get query skip when page number is bigger than 1', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 3,
        sortBy: 'age',
        sortType: 'ASC',
        textSearch: 'text-search',
      },
    });

    expect(pagination.getQuerySkip()).toBe(20);
  });
  it('should get query limit when page number is bigger than 1', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 2,
        sortBy: 'age',
        sortType: 'ASC',
        textSearch: 'text-search',
      },
    });

    expect(pagination.getQueryLimit()).toBe(10);
  });
  it('should get sort configuration when sort asc', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 2,
        sortBy: 'age',
        sortType: 'ASC',
        textSearch: 'text-search',
      },
    });

    expect(pagination.getSortConfiguration()).toEqual({ age: 1 });
  });

  it('should get sort configuration when sort desc', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 2,
        sortBy: 'age',
        sortType: 'DESC',
        textSearch: 'text-search',
      },
    });

    expect(pagination.getSortConfiguration()).toEqual({ age: -1 });
  });

  it('should get sort configuration when sort type is not provide', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 2,
        sortBy: 'age',
        textSearch: 'text-search',
      },
    });

    expect(pagination.getSortConfiguration()).toEqual({ age: 0 });
  });

  it('should get sort configuration when sort options are not provide', () => {
    const pagination = new Pagination({
      query: {
        pageSize: 10,
        pageNumber: 2,
        textSearch: 'text-search',
      },
    });

    expect(pagination.getSortConfiguration()).toEqual({ });
  });
});
