// When someone clicks on a column
export function dropTile(col) {
  return {
    type: "DROP_TILE",
    payload: col,
  };
}
