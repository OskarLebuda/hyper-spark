export default function(state, map) {
  const { ui: { cwd, git, spark } } = state;

  return Object.assign({}, map, {
    cwd,
    git,
    spark,
  })
};
