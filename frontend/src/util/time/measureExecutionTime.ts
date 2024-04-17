export default function measureExecutionTime<RESULT>(
  func: () => RESULT,
  logCb: (timeInMs: number) => void,
): RESULT {
  const start = performance.now();
  const result = func();
  const end = performance.now();
  logCb(end - start);
  return result;
}
