// When someone clicks on a column
export function dropCounter(col) {
  return {
    type: "DROP_COUNTER",
    payload: col,
  };
}
