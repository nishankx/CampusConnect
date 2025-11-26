import { useEffect, useState } from "react";

export default function useFetch(callback) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callback().then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
