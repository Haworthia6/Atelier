module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath
      .replace(
        /\.test\.([tj]sx?)/,
        `.test${snapshotExtension}`
      )
      .replace(
        /__tests__/,
        '__snapshots__'
      ),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace(snapshotExtension, '.js')
      .replace('__snapshots__', '__tests__'),

  testPathForConsistencyCheck: '../__tests__/App.test.js',
};
