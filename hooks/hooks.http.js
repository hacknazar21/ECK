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
        setRespCode(response.status);
        if (!response.ok && response.status === 413) {
          throw new Error(
            JSON.stringify({
              detail: "Файл слишком большой",
              non_field_errors: ["Файл слишком большой"],
            })
          );
        }
        const data = await response.json();
        if (!response.ok) {
          throw new Error(JSON.stringify(data));
        }
        if (data.success) {
          setSuccess(data.success);
        }
        setLoading(false);
        return data;
      } catch (e) {
        console.log(e);
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
