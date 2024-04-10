export default interface IAction {
  error: object;
  payload: {
    status: string,
    error: string,
    data?: {
      message?: string
    }
  };
}
