module.exports = {
  datastore: 'mongo',
  attributes: {
    id: {
      type: 'string',
      required:true,
      unique: true,
      columnName: '_id'
    },
    company: {
      type: 'string',
      required: true
    },
    open: {
      type: 'number',
      required: true,
      columnType: 'FLOAT'
    },
    close: {
      type: 'number',
      required: true,
      columnType: 'FLOAT'
    },
    high: {
      type: 'number',
      required: true,
      columnType: 'FLOAT'
    },
    low: {
      type: 'number',
      required: true,
      columnType: 'FLOAT'
    },
    volume: {
      type: 'number',
      required: true
    },
    profession: {
      type: 'string',
      required: true
    },
    sector: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    registration: {
      type: 'string',
      required: true
    },
    class: {
      type: 'string',
      columnName: '_class'
    }
  },
  customToJSON: function() {
    return _.omit(this, ['class']);
  }
};
