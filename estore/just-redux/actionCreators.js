// actions

// const INC = { type: 'INC', by: 1 }
// const DEC = { type: 'DEC', by: 1 }

// const INC5 = { type: 'INC', by: 5 }
// const DEC5 = { type: 'DEC', by: 5 }

// const INC25 = { type: 'INC', by: 25 }
// const DEC25 = { type: 'DEC', by: 25 }

// actionCreator

function incActionCreator(by) {
  return { type: "INC", by };
}

function decActionCreator(by) {
  return { type: "DEC", by };
}
