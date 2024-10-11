import {errorUtils} from '../errorUtils';

describe('errorUtils', () => {
  describe('getErrorMessage', () => {
    it('should return the message from an Axios error response', () => {
      const error = {
        isAxiosError: true,
        response: {
          data: {message: 'Request failed with status code 404'},
        },
      };
      const result = errorUtils.getErrorMessage(error);
      expect(result).toBe('Request failed with status code 404');
    });

    it('should return concatenated messages from an Axios error with multiple errors', () => {
      const error = {
        isAxiosError: true,
        response: {
          data: {
            errors: [{message: 'First error'}, {message: 'Second error'}],
          },
        },
      };
      const result = errorUtils.getErrorMessage(error);
      expect(result).toBe('First error, Second error');
    });

    it('should return a generic error message for non-Axios errors', () => {
      const error = new Error('Something went wrong');
      const result = errorUtils.getErrorMessage(error);
      expect(result).toBe('Something went wrong');
    });
  });
  describe('getErrorStatusCode', () => {
    it('should return status code from Axios error', () => {
      const error = {
        isAxiosError: true,
        response: {
          status: 404,
        },
      };

      const result = errorUtils.getErrorStatusCode(error);
      expect(result).toBe(404);
    });

    it('should return status code from generic error object', () => {
      const error = {status: 500};
      const result = errorUtils.getErrorStatusCode(error);
      expect(result).toBe(500);
    });

    it('should return null if no status code is present', () => {
      const error = new Error('This is a generic error');
      const result = errorUtils.getErrorStatusCode(error);
      expect(result).toBeNull();
    });
  });
});
