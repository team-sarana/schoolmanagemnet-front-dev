/* eslint-disable @typescript-eslint/no-explicit-any */

export async function post({
  endpoint,
  data = null,
  params = null,
  revalidate = 0,
}: {
  endpoint: string;
  data?: Record<string, any> | null;
  params?: Record<string, any> | null;
  revalidate?: number;
}) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  if (params) {
    const queryParams = new URLSearchParams(params).toString();
    url += `?${queryParams}`;
  }

  if (!data) {
    return get({ endpoint, params, revalidate });
  }

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data),
    next: { revalidate } as any,
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function get({
  endpoint,
  params = null,
  revalidate = 0,
}: {
  endpoint: string;
  params?: Record<string, any> | null;
  revalidate?: number;
}) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  if (params) {
    const queryParams = new URLSearchParams(params).toString();
    url += `?${queryParams}`;
  }

  const options: RequestInit = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate } as any,
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  } catch (error: any) {
    return { error: error.message };
  }
}
