const fetchData = async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url,
    {
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        "Accept-Language": 'en'
      }
    });

  if (!res.ok) {
    if (res.status == 400) return {} as T;
    throw new Error(`Failed to fetch data ${res.statusText}`);
  }

  const jsonData = await res.json();
  return jsonData as T;
}

export default fetchData;
