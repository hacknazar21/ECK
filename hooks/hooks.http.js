import { useState, useCallback, useEffect } from "react";
const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isOk, setIsOk] = useState(true);
  const [respCode, setRespCode] = useState(200);
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {},
      isFormData = false
    ) => {
      setLoading(true);
      try {
        if (body && !isFormData) {
          body = JSON.stringify(body);
        }
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        setRespCode(response.status);
        if (!response.ok) {
          throw new Error(
            data.message || JSON.stringify(data) || "Что-то пошло не так"
          );
        } else {
          setIsOk(true);
        }
        if (data.success) {
          setSuccess(data.success);
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        throw e;
      }
    },
    []
  );
  const clearError = () => setError(null);
  const clearSuccess = () => setSuccess(null);
  return {
    loading,
    request,
    error,
    clearError,
    success,
    clearSuccess,
    isOk,
    respCode,
  };
};
export default useHttp;
