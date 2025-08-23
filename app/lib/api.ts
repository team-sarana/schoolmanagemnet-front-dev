/* eslint-disable @typescript-eslint/no-explicit-any */
export async function post({
  endpoint,
  data = null,
  revalidate = 0,
  params = null,
}: {
  endpoint: string;
  data?: any | null;
  params?: any | null;
  revalidate?: number;
}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  if (params) {
    const queryParams = new URLSearchParams(params).toString();
    endpoint += `?${queryParams}`;
  }

  if (data == null) {
    return get({ endpoint, revalidate });
  }

  if (data == null && params) {
    return get({ endpoint, revalidate, params });
  }

  const option: any = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data),
    next: { revalidate },
  };

  try {
    const res = await fetch(url, option);

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return await res.json();
  } catch (error: any) {
    return error.message;
  }
}

export async function get({ endpoint, params = null, revalidate = 0 }: { endpoint: string; params?: any | null; revalidate?: number }) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

    if (params) {
      const queryParams = new URLSearchParams(params).toString();
      endpoint += `?${queryParams}`;
    }

    const option: any = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      next: { revalidate },
    };

    const res = await fetch(url, option);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  } catch (error: any) {
    return error.message;
  }
}
